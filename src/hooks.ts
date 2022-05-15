import type { GetSession } from '@sveltejs/kit';

export const getSession: GetSession = async function () {
	return {
		foo: 'bar'
	};
};
