


/** @type {import('./$types').PageLoad} */
import { details } from "$lib/config";

export function load() {
	return {
        details
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		return { success: true };
	},
	register: async ({cookies, request}) => {
		const data = await request.formData();

        interface Udata{ [key: string]: any; }
        let user_data: Udata = {};

        user_data['email'] = data.get('email');
        user_data['password'] = data.get('password');

        for (const [key, value] of Object.entries(details)) {
            user_data[key] = data.get(key);
        }
	}
};