import { lucia } from '$lib/server/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../login/$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		throw redirect(301, '/login');
	}
};

export const actions: Actions = {
	logout : async (event) => {
		if (event.locals.session){
			await lucia.invalidateSession(event.locals.session.id);
			throw redirect(301,'/login');
		}
	},
	logout_all : async (event) => {
		if (event.locals.session?.userId){
			await lucia.invalidateUserSessions(event.locals.session.userId);
			throw redirect(301,'/login');
		}
	},

};
