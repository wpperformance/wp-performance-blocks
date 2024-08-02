import {store} from '@wordpress/interactivity';

const $fetch = async (url) => {
	let data = null
	try {
		const response = await fetch(url)
		data = await response.json()
	} catch (e) {
		throw e
	}
	return data
}

const {state, actions} = store('wp-performance/global', {
	state: {
		// github block infos
		// githubData: {},
		// githubZip: {},
		get stargazer() {
			return state.githubData.stargazers_count ? `${state.githubData.stargazers_count} Stars` : ''
		},
		get zipText() {
			return state.githubZip.name ? `Télécharger la dernière version (${state.githubZip.name})` : ''
		},
		get repoUrl() {
			return state.githubData.html_url ? state.githubData.html_url : ''
		},
		get zipUrl() {
			return state.githubZip.zipball_url ? state.githubZip.zipball_url : ''
		}
	},
	actions: {
		// initGithub: async () => {
		// 	const data = await $fetch('https://api.github.com/repos/WP-Performance/press-wind');
		// 	if (data) {
		// 		state.githubData = data;
		// 	}
		// 	const dataZip = await $fetch(
		// 		'https://api.github.com/repos/WP-Performance/press-wind/tags',
		// 	)
		// 	if (dataZip && dataZip.length > 0) {
		// 		const [d] = dataZip
		// 		state.githubZip = d;
		// 	}
		// }
	}
})
