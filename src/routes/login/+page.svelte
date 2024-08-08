<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
	export let data;

	let is_signup: boolean = false;

	function toggle() {
		is_signup = !is_signup;
	}
</script>

<div
	class="flex h-[100svh] w-[100svw] items-center justify-center
            bg-white text-5xl dark:bg-neutral-900"
>
	<div
		class="flex min-h-80 w-96 flex-col rounded-md shadow-none shadow-black/20 ring-0 ring-neutral-200 transition-all duration-500 lg:md:ring-1 lg:md:shadow-lg dark:shadow-orange-500/20 dark:ring-neutral-700"
	>
		<div class="flex h-1/4 flex-col items-center justify-center">
			<!--Title: Customize any part of the Logo component with specific classes-->
			<Logo text_class="text-3xl dark:text-white" Logo_class="w-8" full_class="p-5 space-x-2" />
			<h1 class="mb-2 mt-2 text-lg dark:text-white">
				{is_signup ? 'Have an account already?' : "Don't have an account yet?"}
				<button class="font-bold" on:click={toggle}>{!is_signup ? 'Sign up' : 'Login'}</button>
			</h1>
			<h1 class="text-xl text-red-600">{form?.message ?? ''}</h1>
		</div>

		<form method="post" class="h-3/4" use:enhance>
			<div class="flex h-[100%] flex-col items-center justify-center text-2xl">
				<input
					required
					aria-required="true"
					type="email"
					name="email"
					placeholder="Email"
					class="m-2 w-[90%] p-2 text-xl ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:ring-neutral-700"
				/>
				<input
					required
					aria-required="true"
					name="password"
					type="password"
					placeholder="password"
					class="m-2 w-[90%] p-2 text-xl ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:ring-neutral-700"
				/>

				{#if is_signup}
					{#each Object.entries(data.details) as name, type}
						<input
							required
							aria-required="true"
							type={name[1]}
							name={name[0]}
							placeholder={name[0]}
							class="m-2 w-[90%] p-2 text-xl ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:ring-neutral-700"
						/>
					{/each}
				{/if}
				<button
					class="m-2 mb-6 mt-10 w-[80%] rounded-lg bg-orange-600 p-2 text-xl text-white"
					formaction={is_signup ? '?/register' : '?/login'}
					>{is_signup ? 'Register' : 'Login'}</button
				>
				
			</div>
		</form>
	</div>
</div>
