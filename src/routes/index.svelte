<!-- <script context="module">
	export async function load({ params, fetch, session, stuff }) {
		// const url = `https://echarts.apache.org/examples/data/asset/geo/HK.json`;

		const url = `https://services3.arcgis.com/6j1KwZfY2fZrfNMR/arcgis/rest/services/Hong_Kong_18_Districts/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				hkmapjson: response.ok && (await response.json())
			}
		};
	}
</script> -->
<script>
	import { echarts } from '$lib/echartsMap';

	//// load from web api
	// export let hkmapjson;

	////  Local hkmapjson
	import hkmapjson from '../lib/json/hksar_18_district_boundary.json';

	const upperCaseFirstLetter = (string) => `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
	const lowerCaseAllWordsExceptFirstLetters = (string) =>
		string.replaceAll(/\S*/g, (word) => `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`);

	hkmapjson['features'].forEach(
		(x) => (x.properties['name'] = lowerCaseAllWordsExceptFirstLetters(x.properties.ENAME))
	);
</script>

<h1 class="px-6 text-lg font-semibold">Population Density of Hong Kong (2011)</h1>
<div class="w-full h-noHeader-noFooter-noTitle" use:echarts={hkmapjson} />
