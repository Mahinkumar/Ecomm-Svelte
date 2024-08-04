
import { details } from '$lib/config';
import { generateIdFromEntropySize } from "lucia";
import { hash } from "@node-rs/argon2";
import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { lucia } from "$lib/server/auth";
import { db } from '$lib/server/db';
import { userTable } from '$lib/server/db/schema';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		return redirect(302, "/");
	}
	return {details};
};

export const actions: Actions = {
	//Login Action
	//Takes Email and Password
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		console.log(email, password);
		return { success: true };
	},

	//Register Action
	//Require user data based on config
	register: async ({ cookies, request }) => {

		interface Udata {
			[key: string]: any;
		}
		let user_data: Udata = {};

		const formData = await request.formData();
		const password = formData.get("password");

		if (typeof password !== "string" || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: "Invalid password"
			});
		}

		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});
		const userId = generateIdFromEntropySize(10); // 16 characters longil'] = data.get('email');

		user_data['email'] = formData.get("email");
		user_data['hash'] =  passwordHash;
		user_data['id'] = userId

		for (const [key, value] of Object.entries(details)) {
			user_data[key] = formData.get(key);
		}

		console.log(user_data);

		await db.insert(userTable).values({
			id: user_data.id,
			hash: user_data.hash,
			email: user_data.email,
			name: user_data.name,
			address: user_data.address,
			phone: user_data.phone
		});


		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});

		redirect(302, "/");
	}
};
