<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async function ({fetch, session}) {
        const body = fetch('/test', { method: 'GET' })
        const result = (await body).json()
		return {
            props: {
                foo: session.foo,
                thing: result
            }
        };
	};
</script>

<script lang="ts">
export let foo: 'bar';
export let thing: string;
</script>

From load: {foo}
From endpoint: {thing}

<slot />