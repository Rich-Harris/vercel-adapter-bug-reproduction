import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = function() {
    return {
        body: {
            thing: 'boop'
        }
    }
}