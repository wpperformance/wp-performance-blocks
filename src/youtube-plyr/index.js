import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";
// import "plyr/dist/plyr.css";

import Edit from "./edit.js";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
});
