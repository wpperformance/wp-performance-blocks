import { __ } from "@wordpress/i18n";
import ServerSideRender from "@wordpress/server-side-render";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<ServerSideRender block="wp-performance/youtube-plyr" />
		</div>
	);
}
