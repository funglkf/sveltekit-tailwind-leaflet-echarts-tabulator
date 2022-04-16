<script>
	import { onMount } from 'svelte';
	import TableAuto from '$lib/TableAuto.svelte';

	let title = 'I am Name';

	const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

	let tData = [];
	let tColumns = [];

	tColumns = [
		{ title: 'userid', field: 'userId', sorter: 'number' },
		{ title: 'id', field: 'id', sorter: 'number' },
		{ title: 'title', field: 'title' },
		{ title: 'body', field: 'body', formatter: 'textarea', width: 500 }
	];

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
	<TableAuto {tColumns} {tData} />
</main>
