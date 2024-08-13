<?php
wp_interactivity_state('wp-performance/search', [
    'search_url' => MEILISEARCH_URL,
    'search_key' => MEILISEARCH_KEY_SECRET,
    'index_name' => WPPerformance\Search\wp_perf_search_index_name(),
]);

?>


<div data-wp-interactive="wp-performance/search" class="wperf-search-box">
	<button data-wp-on--click="actions.openSearch" data-wp-on-window--keydown="actions.handlerKeyDown" data-wp-bind--aria-expanded="state.open">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
			<title>
				<?php _e('Open search', 'search-box'); ?>
			</title>
			<path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"></path>
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path>
		</svg>
	</button>
	<dialog data-wp-bind--open="state.open" class="wperf-search-box_content">
		<button class="wperf-search-box_close" data-wp-on--click="actions.openSearch"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
				<title>
					</php _e('Close', 'search-box' ); ?>
				</title>
				<path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"></path>
			</svg>
		</button>
		<div class="wperf-search-box_container">
			<input type="search" class="wpref-input-search" data-wp-on--input="actions.search" placeholder="<?php _e('Search', 'search-box'); ?>" />
			<div class="wpref-search-facets" data-wp-bind--hidden="!state.hasFacet">
				<template data-wp-each="state.facets">
					<template data-wp-each--facet="context.item.value" data-wp-key="context.item.key">
						<label data-wp-key="context.item.key">
							<input type="checkbox" data-wp-bind--name="context.facet.key" data-wp-bind--value="context.facet.key" data-wp-bind--data-cat="context.facet.parentKey" data-wp-on--change="actions.addFilter"
								data-wp-bind--checked="state.isChecked" />
							<span data-wp-text="state.facetValue"></span>
						</label>
					</template>
				</template>
			</div>
			<div class="wpref-search-results">
				<template data-wp-each="state.results">
					<a data-wp-key="context.item.id" data-wp-bind--href="context.item.url">
						<h3 data-wp-html="context.item._formatted.title"></h3>
						<p data-wp-html="context.item._formatted.excerpt"></p>
					</a>
				</template>
				<div data-wp-bind--hidden="state.hasResults"><?php _e('no result', 'search-box'); ?></div>
			</div>
		</div>
		<div class="perf-search-mask" data-wp-on--click="actions.openSearch"></div>
	</dialog>
</div>
