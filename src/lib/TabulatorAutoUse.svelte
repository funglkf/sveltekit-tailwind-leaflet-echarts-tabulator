<script>
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_simple.min.css';
	import '$lib/xlsx.full.min.js';
	import AutoComplete from '$lib/SimpleAutocomplete.svelte';

	export let title = 'Table View';

	export let tableDataUrl;

	export let tableList = [];

	export let copyData = true;
	export let saveExcel = true;
	export let saveCSV = true;

	export let customTableConfig = {};

	let showItemSidebar = false;
	let searchTerm = '';

	let selectName;

	let table;

	function makeTable(node, { ajaxurl }) {
		table = new Tabulator(node, {
			...{
				ajaxURL: ajaxurl,
				autoColumns: true,
				autoColumnsDefinitions: function (definitions) {
					definitions.forEach((column) => {
						column.headerFilter = true; // add header filter to every column
						column.headerFilterPlaceholder = 'Filter';
					});
					return definitions;
				},
				// columns: columns,
				layout: 'fitDataStretch',
				pagination: true,
				paginationSize: 100,
				clipboard: true
			},
			...customTableConfig
		});

		return {
			update: ({ ajaxurl }) => {
				table.setData(ajaxurl, {});
			}
			// destroy: () => alert('bye bye table :\'(')
		};
	}

	$: filteredItemList = tableList.filter((item) => item.name.indexOf(searchTerm) !== -1);
</script>

<div class="flex">
	{#if showItemSidebar}
		<div class="overflow-y-auto min-w-[7rem] h-noHeader-noFooter text-gray-800 border-x-4 rounded">
			<div class="flex items-center">
				<svg style="width:20px;height:20px" viewBox="0 0 20 20">
					<path fill="currentColor" d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14" />
				</svg>
				<h1 class="px-1 font-semibold text-base">List items</h1>
			</div>
			<input
				class="mx-1 my-1 max-w-[6rem] text-xs border-solid border-2 rounded"
				placeholder="Search"
				bind:value={searchTerm}
			/>
			<ul class="space-y-1">
				{#each filteredItemList as { name, url }}
					<li>
						<a
							href="#{name}"
							class="flex items-center p-1 text-xs font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							on:click={() => {
								tableDataUrl = url;
							}}
							>{name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
	<div class="mx-5 flex-auto w-10">
		<div>
			<h1 class="font-semibold text-xl">{title}</h1>
		</div>
		<div class="flex items-center my-1 space-x-1">
			{#if !(tableList.length < 2)}
				<svg
					style="width:20px;height:20px"
					viewBox="0 0 20 20"
					class="cursor-pointer"
					on:click={() => (showItemSidebar = !showItemSidebar)}
				>
					<path fill="currentColor" d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14" />
				</svg>
				<div class="max-w-[100px] p-0 border border-solid rounded text-base">
					<AutoComplete
						items={tableList}
						bind:selectedItem={selectName}
						bind:value={tableDataUrl}
						labelFieldName="name"
						valueFieldName="url"
						placeholder="Select"
					/>
				</div>
				<!-- 				
				<select
					class="border border-solid border-gray-300 rounded text-base"
					bind:value={tableDataUrl}
					on:change={makeTable}
				>
					<option selected disabled>Select Table</option>
					{#each tableList as { name, url }}
						<option value={url}>{name}</option>
					{/each}
				</select> -->
			{/if}

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
		</div>

		<div class="h-noHeader-noFooter-noButton" use:makeTable={{ ajaxurl: tableDataUrl }} />
	</div>
</div>
