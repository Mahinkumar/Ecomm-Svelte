
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { env } from '$env/dynamic/private';  //Change to 'process' for using drizzle studio;

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = postgres(env.DATABASE_URL);
export const db = drizzle(client);


