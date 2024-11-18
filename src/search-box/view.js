import {
	store,
	getElement,
	getContext,
	privateApis,
} from "@wordpress/interactivity";

import { throttle } from "throttle-debounce";

/** create new directive for html */
const { directive } = privateApis(
	"I acknowledge that using private APIs means my theme or plugin will inevitably break in the next version of WordPress.",
);

directive("html", ({ directives: { html }, element, evaluate }) => {
	const entry = html.length > 0 ? html[0] : null;
	// 18 november 2024, suffix default is not working anymore
	// const entry = html.find(({ suffix }) => suffix === "default");
	if (!entry) {
		element.props.children = null;
		return;
	}

	try {
		const result = evaluate(entry);
		element.props.dangerouslySetInnerHTML =
			typeof result === "object" ? null : { __html: result };
	} catch (e) {
		element.props.children = null;
	}
});

/**
 * Search call function
 */
const search = async ({ url, index, token, query, filters }) => {
	if (!url || !token || !index) {
		throw new Error("Missing required parameters");
	}
	let data = null;

	// init body
	const body = {
		q: query,
		limit: 10,
		facets: ["categories"],
		matchingStrategy: "frequency",
		attributesToHighlight: ["title", "excerpt"],
	};

	try {
		// add filters if any
		if (filters.length > 0) {
			body.filter = [filters.map((f) => `${f.key}='${f.value}'`)];
		}
		const response = await fetch(`${url}/indexes/${index}/search`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(body),
		});
		data = await response.json();
	} catch (e) {
		throw e;
	}
	return data;
};

const { state, actions } = store(
	"wp-performance/search",
	{
		state: {
			// open or close search
			open: false,
			// search query
			q: "",
			// item selected for keyboard navigation
			selected: -1,
			// search results
			hasSearch: false,
			results: [],
			facets: [],
			filters: [],
			get hasFacet() {
				// return state.facets.length > 0;
				return false;
			},
			// for display no results message
			get hasResults() {
				return (
					!state.hasSearch || (state.hasSearch && state.results.length > 0)
				);
			},
			// facet checkbox label value
			get facetValue() {
				const context = getContext();
				return `${context.facet.key} (${context.facet.value})`;
			},
			// define if item is checked
			get isChecked() {
				const { attributes } = getElement();
				const cat = attributes["data-cat"];
				const value = attributes.value;

				return state.filters.some((f) => f.key === cat && f.value === value);
			},
		},
		actions: {
			/**
			 * Open or close
			 */
			openSearch() {
				state.open = !state.open;
				if (state.open) {
					actions.setFocus();
				}
			},
			/**
			 * Set focus on search input
			 * @returns {void}
			 */
			setFocus() {
				const { ref } = getElement();
				setTimeout(() => {
					ref.parentNode.querySelector(".wpref-input-search").focus();
				}, 200);
			},
			/**
			 * Handle key down events
			 * @param {KeyboardEvent} e
			 * @returns {void}
			 */
			handlerKeyDown(e) {
				// key command + k
				if (e.metaKey && e.key === "k") {
					state.open = true;
					actions.setFocus();
				}

				// key esc
				if (e.key === "Escape") {
					state.open = false;
				}

				if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
					actions.selectItem(e);
				}
			},
			/**
			 * Select item from search results
			 * @param {KeyboardEvent} e
			 * @returns {void}
			 */
			selectItem(e) {
				const { ref } = getElement();
				const input = ref.parentNode.querySelector(".wpref-input-search");
				const searchResults = ref.parentNode.querySelector(
					".wpref-search-results",
				);

				if (e.key === "ArrowUp") {
					e.preventDefault();
					if (state.selected <= 0) {
						state.selected = -1;
						return input.focus();
					}
					state.selected--;
					searchResults.children[state.selected].focus();
				} else if (e.key === "ArrowDown") {
					e.preventDefault();
					if (state.selected < searchResults.children.length - 1) {
						state.selected++;
					}

					searchResults.children[state.selected].focus();
				} else if (e.key === "Enter") {
					e.preventDefault();
					searchResults.children[state.selected].click();
				}
			},
			addFilter() {
				const { ref } = getElement();

				const cat = ref.dataset.cat;
				const value = ref.value;

				if (ref.checked) {
					state.filters.push({
						key: cat,
						value,
					});
				} else {
					state.filters = state.filters.filter((f, k) => {
						return f.key !== cat && f.value !== value;
					});
				}
				actions.query();
			},
			/**
			 * Handle search input change
			 */
			search: throttle(700, (e) => {
				state.q = e.target.value;
				actions.query();
			}),
			/**
			 * Query search
			 */
			async query() {
				state.facets = [];
				if (state.q === "") {
					state.results = [];
					state.filters = [];
					state.hasSearch = false;
					return;
				}
				const data = await search({
					url: state.search_url,
					index: state.index_name,
					token: state.search_key,
					query: state.q,
					filters: state.filters,
				});
				state.index = -1;
				state.hasSearch = true;
				state.results = data.hits;
				// format object to array
				state.facets = Object.keys(data.facetDistribution).map((key) => ({
					key,
					value: Object.keys(data.facetDistribution[key]).map((k) => ({
						parentKey: key,
						key: k,
						value: data.facetDistribution[key][k],
					})),
				}));
			},
		},
	},
	// lock store to avoid communication with other blocks
	{ lock: true },
);
