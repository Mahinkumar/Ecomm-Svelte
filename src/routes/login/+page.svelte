<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
    let is_signup : boolean = false;
</script>

<div
	class="flex h-[100svh] w-[100svw] items-center justify-center
            bg-white text-5xl dark:bg-neutral-900"
>
	<div
		class="flex h-96 w-80 flex-col rounded-md shadow-lg shadow-black/20 ring-1 ring-neutral-200 dark:shadow-orange-500/20 dark:ring-neutral-700"
	>
		<div class="flex h-1/4 items-center justify-center">
			<!--Title: Customize any part of the Logo component with specific classes-->
			<Logo text_class="text-3xl dark:text-white" Logo_class="w-8" full_class="p-5 space-x-2" />
		</div>
		<form method="post" class="h-3/4">
			<div class="flex h-[100%] flex-col items-center justify-center text-2xl">
				<input
					required
					aria-required="true"
					type="email"
					placeholder="Email"
					class="m-2 w-[90%] p-2 text-xl ring-1 ring-neutral-200 dark:text-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700"
				/>
				<input
					required
					aria-required="true"
					type="password"
					placeholder="password"
					class="m-2 w-[90%] p-2 text-xl ring-1 ring-neutral-200  dark:text-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700"
				/>
                {#if is_signup}
                    <input
                            required
                            aria-required="true"
                            type="password"
                            placeholder="password again"
                            class="m-2 w-[90%] p-2 text-xl ring-1 ring-neutral-200  dark:text-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700"
                        />
                    <input
                            required
                            aria-required="true"
                            type="text"
                            placeholder="Address."
                            class="m-2 w-[90%] p-2 text-xl ring-1 ring-neutral-200 dark:text-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700"
                        />
                    
                {/if}
				<button class="text-xl m-2 mt-10 w-[80%] rounded-lg bg-orange-600 p-2 text-white">Login</button>
			
            </div>
		</form>
	</div>
</div>
