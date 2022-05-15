<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async function ({session}) {
		return {
            props: {
                foo: session.foo
            }
        };
	};
</script>

<script lang="ts">
export let foo: 'bar';
</script>

From load: {foo}

<slot />