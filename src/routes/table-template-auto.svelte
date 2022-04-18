<script>
	import TableAuto from '$lib/TabulatorAutoMount.svelte';

	let title = 'I am Name';

	let tableDataUrl = 'https://jsonplaceholder.typicode.com/posts';

	let tablePluginSettings = {
		copyData: true,
		saveExcel: true,
		saveCSV: false
	};

	let tableList = [
		{
			name: 'post',
			url: 'https://jsonplaceholder.typicode.com/posts'
		},
		{
			name: 'albums',
			url: 'https://jsonplaceholder.typicode.com/albums/1/photos'
		}
	];

	let customTableConfig = {
		paginationSize: 10
	};
</script>

<main>
	<TableAuto {tableDataUrl} {...tablePluginSettings} {tableList} {customTableConfig} />
</main>
