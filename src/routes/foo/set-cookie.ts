import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async function () {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return {
        status: 200,
        headers: new Headers({
            'Set-Cookie': `cookie=yum; Path=/; SameSite=None; HttpOnly; Expires=${tomorrow.toUTCString()};`
        })
    };
};
