<script>
	import { onMount } from 'svelte';
	import TableAuto from '$lib/TabulatorAuto.svelte';

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
</script>

<main>
	<div class="mx-5">
		<h1 class="font-semibold text-xl">{title}</h1>
	</div>
	<TableAuto {tableDataUrl} {...tablePluginSettings} {tableList} />
</main>
