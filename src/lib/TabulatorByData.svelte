<script>
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_simple.min.css';
	import '$lib/xlsx.full.min.js';

	export let tColumns, tData;

	export let copyData = true;
	export let saveExcel = true;
	export let saveCSV = true;

	let table;

	function tableAction(node, { data, columns }) {
		table = new Tabulator(node, {
			data,
			columns,
			layout: 'fitColumns',
			pagination: true,
			paginationSize: 100,
			clipboard: true
		});
		return {
			update: ({ data, columns }) => {
				table.replaceData(data);
				table.setColumns(columns);
			}
			// destroy: () => alert('bye bye table :\'(')
		};
	}

	function removeData() {
		tData = [
			{
				userId: 1,
				id: 1,
				title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
				body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
			}
		];
	}
</script>

<div class="mx-5">
	<button class="bg-red-500 hover:bg-red-700 text-white px-1 rounded" on:click={removeData}
		>Remove Data
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
	{#if saveExcel}
		<div
			class="h-noHeader-noFooter-noButton"
			use:tableAction={{ data: tData, columns: tColumns }}
		/>
	{/if}
</div>
