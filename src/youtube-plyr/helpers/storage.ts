import { getVideoId } from "./getVideoUrl";
import { throttle } from "throttle-debounce";

/**
 * save current time to local storage
 * @param {number} currentTime
 * @param {PlayerContext} context
 */
export const saveToLocalStorage = throttle(1000, (currentTime, context) => {
	if (!context) return;

	const videoID = getVideoId(context.videoUrl);
	const listVideo = localStorage.getItem("wp-performance/training-video");
	if (listVideo) {
		const list = JSON.parse(listVideo);
		list[videoID] = currentTime;
		localStorage.setItem(
			"wp-performance/training-video",
			JSON.stringify(list),
		);
	} else {
		const list = {};
		list[videoID] = currentTime;
		localStorage.setItem(
			"wp-performance/training-video",
			JSON.stringify(list),
		);
	}
}
);

/**
 * load current time from local storage
 *
 * @param context
 * @returns
 */
export const loadFromLocalStorage = (context) => {
	if (!context) return;
	const videoID = getVideoId(context.videoUrl);

	const listVideo = localStorage.getItem("wp-performance/training-video");
	if (listVideo) {
		const list = JSON.parse(listVideo);
		if (list[videoID]) {
			context.currentTime = list[videoID];
		}
	}
}
