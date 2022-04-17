<script>
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_simple.min.css';
	import '$lib/xlsx.full.min.js';

	export let tableDataUrl;

	export let tableList = [];

	export let copyData = true;
	export let saveExcel = true;
	export let saveCSV = true;

	let table;

	function tableAction(node, { ajaxurl }) {
		table = new Tabulator(node, {
			ajaxURL: ajaxurl,
			autoColumns: true,
			autoColumnsDefinitions: function (definitions) {
				definitions.forEach((column) => {
					column.headerFilter = true; // add header filter to every column
				});
				return definitions;
			},
			// columns: columns,
			layout: 'fitColumns',
			pagination: true,
			paginationSize: 100,
			clipboard: true
		});
		return {
			update: ({ ajaxurl }) => {
				table.setData(ajaxurl, {});
			}
			// destroy: () => alert('bye bye table :\'(')
		};
	}

	let selected;

	function changetable() {
		tableDataUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';
	}
</script>

<div class="mx-5">
	<select
		class="border border-solid border-gray-300 mx-1 rounded text-base"
		bind:value={tableDataUrl}
	>
		<option selected disabled>Select Table</option>
		{#each tableList as { name, url }}
			<option value={url}>{name}</option>
		{/each}
	</select>
	<button class="bg-blue-500 hover:bg-blue-700 text-white px-1 rounded" on:click={changetable}
		>ChangeTable
	</button>
	{#if copyData}
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white px-1 rounded"
			on:click={() => table.copyToClipboard('all')}
			>Copy data
		</button>
	{/if}
	{#if saveCSV}
		<button
			class="bg-green-500 hover:bg-green-700 text-white px-1 rounded"
			on:click={() => table.download('csv', 'data.csv', { delimiter: ',' })}
			>Download CSV
		</button>
	{/if}
	{#if saveExcel}
		<button
			class="bg-green-500 hover:bg-green-700 text-white px-1 rounded"
			on:click={() => table.download('xlsx', 'data.xlsx', { sheetName: 'MyData' })}
			>Download Excel
		</button>
	{/if}
	<div class="h-noHeader-noFooter-noButton" use:tableAction={{ ajaxurl: tableDataUrl }} />
</div>
