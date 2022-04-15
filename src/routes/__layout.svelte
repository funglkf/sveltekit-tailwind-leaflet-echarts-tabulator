<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles/main.css';
</script>

<body>
	<div>
		<Header />

		<slot />

		<Footer />
	</div></body
>
