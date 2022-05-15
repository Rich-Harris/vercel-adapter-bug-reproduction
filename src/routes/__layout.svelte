<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async function ({fetch, session}) {
        const response = await fetch('/test', { method: 'GET' })
        const { thing } = await response.json()
        await fetch('/foo/set-cookie', { method: 'POST' })

		return {
            props: {
                foo: session.foo,
                thing
            }
        };
	};
</script>

<script lang="ts">
export let foo: App.Session['foo'];
export let thing: string;
</script>

From load: {foo}
From endpoint: {thing}

<slot />