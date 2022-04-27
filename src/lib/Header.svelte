<script>
	import { page } from '$app/stores';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faFlag, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
</script>

<header>
	<div class="px-6 py-1">
		<div class="container mx-auto flex items-center justify-center border-b-2 border-gray-900">
			<a class="flex items-center font-serif italic font-semibold text-lg mr-4" href="/">
				<img class="h-4 w-4 mx-1" src="favicon.svg" alt="Icon" />
				<!-- <Fa icon={faMagnifyingGlassChart} class="space-x-0" /> -->
				Svelte Web
			</a>
			<ul class="flex items-end space-x-3 scrollmenu overflow-x-auto header-scrollbar">
				<li>
					<a
						href="/"
						class={`text-base text-gray-800 hover:text-gray-400  
											${$page.url.pathname === '/' ? 'underline' : ' '}`}
					>
						Home</a
					>
				</li>
				<li>
					<a
						href="/map"
						class={`text-base text-gray-800 hover:text-gray-400  
											${$page.url.pathname === '/map' ? 'underline' : ' '}`}
					>
						Map</a
					>
				</li>
				<li>
					<a
						href="/echart"
						class={`text-base text-gray-800 hover:text-gray-400 
											${$page.url.pathname === '/echart' ? 'underline' : ' '}`}
					>
						Echart</a
					>
				</li>
				<li class:active={$page.url.pathname === '/table'}>
					<a
						href="/table"
						class={`text-base text-gray-800 hover:text-gray-400 
											${$page.url.pathname === '/tabble' ? 'underline' : ' '}`}
					>
						Table</a
					>
				</li>
				<li>
					<a
						href="/table-template-auto"
						class={`text-base text-gray-800 hover:text-gray-400 
											${$page.url.pathname === '/table-template-auto' ? 'underline' : ' '}`}
					>
						table-custom</a
					>
				</li>
			</ul>
		</div>
	</div>
</header>

<style>
	/* Thin scrollbar for Chrome, Safari and Opera */
	.header-scrollbar::-webkit-scrollbar {
		height: 4px; /* height of horizontal scrollbar */
		/* width: 4px;               /* width of vertical scrollbar */
		/* border: 4px solid #2f19be;  */
	}

	.header-scrollbar::-webkit-scrollbar-track {
		border-radius: 100vh;
		background: #ffffff;
	}

	.header-scrollbar::-webkit-scrollbar-thumb {
		background: #ababab;
		border-radius: 100vh;
		/* border: 3px solid #20ccb8; */
	}

	.header-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #5f5f5f;
	}

	/* a.active{
	color: rgb(168, 168, 168);
} */
</style>
