<?php

/**
 * Plugin Name:       Wp Performance Blocks
 * Description:       Wp Performance Blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-performance
 */
if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

require_once __DIR__.'/inc/search.php';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wp_performance_blocks_block_init()
{
    register_block_type(__DIR__.'/build/links-credit');
    register_block_type(__DIR__.'/build/github-infos');
    register_block_type(__DIR__.'/build/search-box');
}
add_action('init', 'create_block_wp_performance_blocks_block_init');
