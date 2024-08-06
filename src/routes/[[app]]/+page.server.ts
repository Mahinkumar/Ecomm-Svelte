import { lucia } from "$lib/server/auth";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../login/$types";


export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		throw redirect(301,"/login");
	}
};

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.user) {
			throw fail(401);
		}
	}
};
