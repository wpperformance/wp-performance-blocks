import*as e from"@wordpress/interactivity";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const r=(n={getContext:()=>e.getContext,getElement:()=>e.getElement,privateApis:()=>e.privateApis,store:()=>e.store},s={},t.d(s,n),s);var n,s;const{directive:a}=(0,r.privateApis)("I acknowledge that using private APIs means my theme or plugin will inevitably break in the next version of WordPress.");a("html",(({directives:{html:e},element:t,evaluate:r})=>{const n=e.length>0?e[0]:null;if(n)try{const e=r(n);t.props.dangerouslySetInnerHTML="object"==typeof e?null:{__html:e}}catch(e){t.props.children=null}else t.props.children=null}));const{state:o,actions:i}=(0,r.store)("wp-performance/search",{state:{open:!1,q:"",selected:-1,hasSearch:!1,results:[],facets:[],filters:[],get hasFacet(){return!1},get hasResults(){return!o.hasSearch||o.hasSearch&&o.results.length>0},get facetValue(){const e=(0,r.getContext)();return`${e.facet.key} (${e.facet.value})`},get isChecked(){const{attributes:e}=(0,r.getElement)(),t=e["data-cat"],n=e.value;return o.filters.some((e=>e.key===t&&e.value===n))}},actions:{openSearch(){o.open=!o.open,o.open&&i.setFocus()},setFocus(){const{ref:e}=(0,r.getElement)();setTimeout((()=>{e.parentNode.querySelector(".wpref-input-search").focus()}),200)},handlerKeyDown(e){e.metaKey&&"k"===e.key&&(o.open=!0,i.setFocus()),"Escape"===e.key&&(o.open=!1),"ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key||i.selectItem(e)},selectItem(e){const{ref:t}=(0,r.getElement)(),n=t.parentNode.querySelector(".wpref-input-search"),s=t.parentNode.querySelector(".wpref-search-results");if("ArrowUp"===e.key){if(e.preventDefault(),o.selected<=0)return o.selected=-1,n.focus();o.selected--,s.children[o.selected].focus()}else"ArrowDown"===e.key?(e.preventDefault(),o.selected<s.children.length-1&&o.selected++,s.children[o.selected].focus()):"Enter"===e.key&&(e.preventDefault(),s.children[o.selected].click())},addFilter(){const{ref:e}=(0,r.getElement)(),t=e.dataset.cat,n=e.value;e.checked?o.filters.push({key:t,value:n}):o.filters=o.filters.filter(((e,r)=>e.key!==t&&e.value!==n)),i.query()},search:function(e,t,r){var n,s=r||{},a=s.noTrailing,o=void 0!==a&&a,i=s.noLeading,c=void 0!==i&&i,l=s.debounceMode,u=void 0===l?void 0:l,p=!1,h=0;function d(){n&&clearTimeout(n)}function f(){for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];var i=this,l=Date.now()-h;function f(){h=Date.now(),t.apply(i,s)}function y(){n=void 0}p||(c||!u||n||f(),d(),void 0===u&&l>e?c?(h=Date.now(),o||(n=setTimeout(u?y:f,e))):f():!0!==o&&(n=setTimeout(u?y:f,void 0===u?e-l:e)))}return f.cancel=function(e){var t=(e||{}).upcomingOnly,r=void 0!==t&&t;d(),p=!r},f}(700,(e=>{o.q=e.target.value,i.query()})),async query(){if(o.facets=[],""===o.q)return o.results=[],o.filters=[],void(o.hasSearch=!1);const e=await(async({url:e,index:t,token:r,query:n,filters:s})=>{if(!e||!r||!t)throw new Error("Missing required parameters");let a=null;const o={q:n,limit:10,facets:["categories"],matchingStrategy:"frequency",attributesToHighlight:["title","excerpt"]};try{s.length>0&&(o.filter=[s.map((e=>`${e.key}='${e.value}'`))]);const n=await fetch(`${e}/indexes/${t}/search`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify(o)});a=await n.json()}catch(e){throw e}return a})({url:o.search_url,index:o.index_name,token:o.search_key,query:o.q,filters:o.filters});o.index=-1,o.hasSearch=!0,o.results=e.hits,o.facets=Object.keys(e.facetDistribution).map((t=>({key:t,value:Object.keys(e.facetDistribution[t]).map((r=>({parentKey:t,key:r,value:e.facetDistribution[t][r]})))})))}}},{lock:!0});