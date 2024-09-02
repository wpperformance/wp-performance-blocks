import { store, getContext, getElement, useRef, useEffect } from "@wordpress/interactivity";
import Plyr from "plyr";
import getYouTubeUrl, { getVideoId } from "./helpers/getVideoUrl";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";
import { splitTask } from "./helpers/splitTask";

/** context for player */
type PlayerContext = {
	videoUrl: string;
	completion: number;
	currentTime: number;
}

/**
 * update current time
 * @param {*} event
 * @param {PlayerContext} context
 */
const updateTime = (event, context) => {
	const currentTime = event.detail.plyr.currentTime;
	const duration = event.detail.plyr.duration;
	context.completion = +((currentTime / duration) * 100).toFixed(2);

	const videoID = getVideoId(context.videoUrl);
	saveToLocalStorage(currentTime, context);
}




/**
 * hook player
 */
const usePlayer = () => {
	const player = useRef<Plyr | null>(null);
	useEffect(() => {
		const init = async () => {
			if (player.current) {
				player.current.destroy();
			}
			const context = getContext<PlayerContext>();
			const videoPlayer = getElement();
			const parent = videoPlayer.ref?.parentNode;
			if (parent) {
				await splitTask();
				player.current = new Plyr(parent as HTMLElement, {
					loop: { active: false }
				});
				player.current.on("timeupdate", (e) => updateTime(e, context));
				player.current.on("ended", () => actions.ended());
				// set current time for this video
				player.current.on('ready', () => {
					if (player.current) {
						player.current.currentTime = context.currentTime;
					}
				})
			}
		}

		init();

		return () => {
			if (player.current) {
				player.current.destroy();
				player.current = null;
			}
		};
	}, []);
	return player;
}



const { actions } = store("wp-performance/training", {
	state: {
		get completeUrl() {
			const context = getContext<PlayerContext>();
			return getYouTubeUrl(context.videoUrl);
		},
	},
	actions: {
		mounted() {
			const context = getContext<PlayerContext>();
			loadFromLocalStorage(context);
		},
		initPlayer() {
			usePlayer();
		},
		ended() {
			console.log("ended");
			const context = getContext<PlayerContext>();
			context.currentTime = 0;
			saveToLocalStorage(0, context);
		}
	},
});
