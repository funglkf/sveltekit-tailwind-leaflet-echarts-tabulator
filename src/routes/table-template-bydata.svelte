<script>
	import { onMount } from 'svelte';
	import TableAuto from '$lib/TabulatorByData.svelte';

	let title = 'I am Name';

	const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

	let tData = [];
	let tColumns = [];

	tColumns = [
		{ title: 'userid', field: 'userId', sorter: 'number', headerFilter: true },
		{ title: 'id', field: 'id', sorter: 'number', headerFilter: true },
		{ title: 'title', field: 'title', headerFilter: true },
		{ title: 'body', field: 'body', formatter: 'textarea', headerFilter: 'input' }
	];

	let tablePluginSettings = {
		copyData: true,
		saveExcel: true,
		saveCSV: false
	};

	// Sample Data
	/* 	tColumns = [
		{ title: 'Name', field: 'name', sorter: 'string', width: 200 },
		{ title: 'Progress', field: 'progress', sorter: 'number', formatter: 'progress' },
		{ title: 'Gender', field: 'gender', sorter: 'string' },
		{ title: 'Rating', field: 'rating', formatter: 'star', hozAlign: 'center', width: 100 },
		{ title: 'Favourite Color', field: 'col', sorter: 'string' }
	];

	tData = [
		{ id: 1, name: 'Oli Bob', progress: 12, gender: 'male', rating: 1, col: 'red' },
		{ id: 2, name: 'Mary May', progress: 1, gender: 'female', rating: 2, col: 'blue' },
		{ id: 3, name: 'Christine Lobowski', progress: 42, gender: 'female', rating: 0, col: 'green' },
		{ id: 4, name: 'Brendon Philips', progress: 100, gender: 'male', rating: 1, col: 'orange' },
		{ id: 5, name: 'Margret Marmajuke', progress: 16, gender: 'female', rating: 5, col: 'yellow' }
	]; */

	onMount(async function () {
		{
		}
		const response = await fetch(apiUrl);
		tData = await response.json();
	});
</script>

<main>
	<div class="mx-5">
		<h1 class="font-semibold text-xl">{title}</h1>
	</div>
	<TableAuto {tColumns} {tData} {...tablePluginSettings} />
</main>
