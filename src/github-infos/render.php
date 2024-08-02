<?php
if (false === ($transient = get_transient('github_data'))) {
    $response = wp_remote_get('https://api.github.com/repos/WP-Performance/press-wind');
    $githubData = wp_remote_retrieve_body($response);

    $response = wp_remote_get('https://api.github.com/repos/WP-Performance/press-wind/tags');
    $githubZip = wp_remote_retrieve_body($response);

    $transient = [
        'githubData' => $githubData,
        'githubZip' => $githubZip,
    ];
    set_transient('github_data', $transient, 60 * 60);
} else {
    $githubData = $transient['githubData'];
    $githubZip = $transient['githubZip'];
}

wp_interactivity_state('wp-performance/global', [
    'githubData' => $githubData,
    'githubZip' => $githubZip,
]);
?>
<div class="wp-block-group gm-github-infos is-layout-flex wp-block-group-is-layout-flex"
	 data-wp-interactive="wp-performance/global">
	<p>
		<a class="gm-star" data-wp-text="state.stargazer" data-wp-bind--href="state.repoUrl" target="_blank"></a>
		<a download="" class="gm-zip" data-wp-text="state.zipText"
			data-wp-bind--href="state.zipUrl" target="_blank"></a>
	</p>
</div>
