/**
 * split task is like next tick
 * @returns
 */
export function splitTask() {
	return new Promise(resolve => {
		setTimeout(resolve, 0);
	});
}
