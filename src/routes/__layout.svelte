<script lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async function () {
		return {};
	};
</script>

<slot />

<style>
</style>
