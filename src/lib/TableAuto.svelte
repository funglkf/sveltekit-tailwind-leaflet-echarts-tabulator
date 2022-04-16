<script>
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_simple.min.css';
	import '$lib/xlsx.full.min.js';

	export let tColumns, tData;

	let showTable = true;

	let table;

	function tableAction(node, { data, columns }) {
		table = new Tabulator(node, {
			data,
			columns,
			layout: 'fitColumns',
			pagination: true,
			paginationSize: 100
		});
		return {
			update: ({ data }) => {
				table.replaceData(data);
			}
			// destroy: () => alert('bye bye table :\'(')
		};
	}
</script>

<div class="mx-5">
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white px-1 rounded"
		on:click={() => (tData = [])}>remove data</button
	>
	<button
		class="bg-red-500 hover:bg-red-700 text-white px-1 rounded"
		on:click={() => (showTable = !showTable)}>toggle table</button
	>
	<button
		class="bg-green-500 hover:bg-green-700 text-white px-1 rounded"
		on:click={() => table.download('csv', 'data.csv', { delimiter: ',' })}
		>Download CSV
	</button>
	<button
		class="bg-green-500 hover:bg-green-700 text-white px-1 rounded"
		on:click={() => table.download('xlsx', 'data.xlsx', { sheetName: 'MyData' })}
		>Download Excel
	</button>
	{#if showTable}
		<div
			class="h-noHeader-noFooter-noButton"
			use:tableAction={{ data: tData, columns: tColumns }}
		/>
	{/if}
</div>
