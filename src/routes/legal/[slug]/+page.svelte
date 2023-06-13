<script>
	import SvelteMarkdown from 'svelte-markdown';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="container h-full mx-auto flex flex-col">
	<div class="
		space-y-10 flex flex-col items-center py-10
		lg:py-20
		text-center
		bg-gray-50/60 dark:bg-gray-800/40 backdrop-blur-lg">
		<h2 class="h2 font-head text-secondary-900 dark:text-secondary-50">{data.title}</h2>
	</div>
	<div class="
		flex flex-col space-y-10 mx-10 pt-10
		text-justify font-content legal-content leading-6
	">
		<SvelteMarkdown source={data.content} />
	</div>
</div>
