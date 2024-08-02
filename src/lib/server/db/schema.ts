import { pgTable, serial, text, integer,timestamp } from 'drizzle-orm/pg-core';
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { drizzle } from "drizzle-orm/node-postgres";
import { db } from '.';
import { details } from '$lib/config';



const userTable = pgTable("user", {
	id: text("id").primaryKey(),
	hash: text("hash").notNull(),
	email: text("email").notNull(),

	//Change your db config according to your detauils in config.js
	name: text("name").notNull(),
	address: text("address").notNull(),
	phone: text("phone").notNull()
});

const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);



