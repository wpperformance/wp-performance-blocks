<?php

namespace WPPerformance\Search;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/SearchClient.php';
require_once __DIR__ . '/wp-cli.php';

/**
 * get current post types
 */
function getPostTypes()
{
	return ['post', 'page', 'snippet'];
}

/**
 * get meta keys autorized for meilisearch
 */
function getMetaKeys()
{
	// exemple for seo press
	return ['_seopress_titles_title', '_seopress_titles_desc'];
}

/**
 * get index name for meilisearch
 * add prefix env
 */
function wp_perf_search_index_name($defaultName = 'content')
{
	return WP_ENV . '_' . $defaultName;
}

// init keys for search
Search_Client::initKeys(MEILISEARCH_URL, MEILISEARCH_KEY_SECRET);

/**
 * map data
 */
function wp_perf_post_to_record($post)
{
	/** add tags */
	$tags = array_map(function (\WP_Term $term) {
		return $term->name;
	}, wp_get_post_terms($post->ID, 'post_tag'));

	/** add cat */
	$cat = array_map(function (\WP_Term $term) {
		return $term->name;
	}, wp_get_post_terms($post->ID, 'category'));

	return [
		'id' => $post->ID,
		'title' => $post->post_title,
		'author' => [
			'id' => $post->post_author,
			'name' => get_user_by('ID', $post->post_author)->display_name,
		],
		'excerpt' => html_entity_decode(get_the_excerpt($post)),
		'content' => html_entity_decode(strip_tags($post->post_content)),
		'tags' => $tags,
		'categories' => $cat,
		'url' => get_permalink($post->ID),
		'custom_field' => get_post_meta($post->id, $post->custom_type),
	];
}

/** same for all but you can change by post type */
// add_filter('post_to_record', __NAMESPACE__ . '\wp_perf_post_to_record');
// add_filter('snippet_to_record', __NAMESPACE__ . '\wp_perf_post_to_record');
// add_filter('page_to_record', __NAMESPACE__ . '\wp_perf_post_to_record');

/**
 * hook meta update
 */
function wp_perf_update_post_meta($meta_id, $object_id, $meta_key, $_meta_value)
{
	$search = Search_Client::getInstance();

	if (in_array($meta_key, namespace\getMetaKeys())) {
		$index = $search->index(
			namespace\wp_perf_search_index_name()
		);

		$index->updateDocuments([
			'id' => $object_id,
			$meta_key => $_meta_value,
		]);
	}
}

add_action('update_post_meta', __NAMESPACE__ . '\wp_perf_update_post_meta', 10, 4);

/**
 * hook post update or create
 */
function wp_perf_update_post($id, \WP_Post $post, $update)
{
	if (wp_is_post_revision($id) || wp_is_post_autosave($id)) {
		return $post;
	}

	if (! in_array($post->post_type, namespace\getPostTypes())) {
		return $post;
	}

	$search = Search_Client::getInstance();

	$record = (array) wp_perf_post_to_record($post);

	if (! isset($record['id'])) {
		$record['id'] = $post->ID;
	}

	$index = $search->index(
		namespace\wp_perf_search_index_name()
	);

	if ($post->post_status == 'trash') {
		$index->deleteDocument($record['id']);
	} else {
		$index->updateDocuments([$record]);
	}

	return $post;
}

add_action('save_post', __NAMESPACE__ . '\wp_perf_update_post', 10, 3);
