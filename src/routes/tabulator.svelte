<script>
	import { onMount } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_simple.min.css';
	// import {Tabulator, FormatModule, EditModule} from 'tabulator-tables';
	// Tabulator.registerModule([FormatModule, EditModule]);

	let title = 'I am Name';

	const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
	export let apiData = [];

	export let tableComponent;
	export let tableColumns;
	let tableDiv;

	tableColumns = [
		{ title: 'userid', field: 'userId', sorter: 'number' },
		{ title: 'id', field: 'id', sorter: 'number' },
		{ title: 'title', field: 'title' },
		{ title: 'body', field: 'body', formatter: 'textarea', width: 500 }
	];

	onMount(async function () {
		const response = await fetch(apiUrl);
		apiData = await response.json();
		// console.log(Object.keys(apiData));

		tableComponent = new Tabulator(tableDiv, {
			height: '100%',
			data: apiData, //link data to table
			// autoColumns:true,
			reactiveData: true, //enable data reactivity
			columns: tableColumns //define table columns
		});
	});
</script>

<main>
	<!--   {#each apiData as article}
  <div>
    <p>{article.title}</p>
  </div>
  {/each} -->
	<div class="mx-5">
		<h1 class="font-semibold text-xl">{title}</h1>
	</div>
	<div class="h-noHeader-noFooter mx-5">
		<div bind:this={tableDiv} class="h-noHeader-noFooter" />
	</div>
</main>

<!-- 
<svelte:head>
  <link href="https://unpkg.com/tabulator-tables@4.9.1/dist/css/tabulator.min.css" rel="stylesheet">
</svelte:head>
 -->
