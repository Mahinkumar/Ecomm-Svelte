> [!NOTE]  
> This Project is a work in progress and is not suitable for production at this moment.
> Star the repository for progress updates.


# Ecommerce Website Built with Sveltekit
A self Hostable ecommerce website solution powered by <a href="https://kit.svelte.dev/">Sveltekit<a>, 
<a href="https://orm.drizzle.team/">Drizzle ORM<a> and <a href="https://www.postgresql.org/">PostgreSQL<a>.
Authentication with <a href="https://lucia-auth.com">lucia Auth</a>


# To Run:
```
// Install required packages with
npm install

//Create a .env file with the Postgres URL Environment Variable.
1. ```DATABASE_URL=<Your Postgres connection URL>```

//Run Drizzle kit migrations with
npx drizzle-kit generate 
npx drizzle-kit push 
npx drizzle-kit migrate

//Run Development Server
npm run dev

//Run Build
npm run build

//To preview the build
npm run preview 
```
