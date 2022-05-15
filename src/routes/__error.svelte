<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = function ({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script lang="ts">
	export let error: Error;
	export let status: number;

	console.log(`ERROR MESSAGE, STATUS: ${status}`);
	console.error(error);
</script>

<h1>Error</h1>