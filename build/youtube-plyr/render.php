<?php
global $post;

$video_url = get_post_meta(get_the_ID(), 'video_url', true);

$context = [
	'videoUrl' => $video_url,
	'postId' => get_the_ID(),
];

?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="wp-performance/training"
	<?php echo wp_interactivity_data_wp_context($context); ?>
	data-wp-init="actions.mounted">
	<div class="plyr__video-embed">
		<iframe
			data-wp-run="actions.initPlayer"
			data-wp-bind--src="state.completeUrl"
			allowfullscreen
			allowtransparency
			allow="autoplay"></iframe>
	</div>
</div>