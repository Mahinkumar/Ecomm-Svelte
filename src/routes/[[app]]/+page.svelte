<div class="w-screen min-h-screen dark:bg-black bg-white">
    <nav class="h-12 bg-blue-500 justify-center items-center flex">Some Navigation</nav>
    <div class="pb h-96 text-white w-screen grid grid-cols-4">
        <!--Combine Multiple blocks for an Ad.-->
        {#each [1,2,3,4,5,6,7,8] as i}
            <div class="bg-green pb flex justify-center items-center text-xl">Block: {i}</div>
        {/each}
    </div>
    <div class="flex pb h-72 justify-center items-center text-2xl text-white">
        Section Goes Here
    </div>
</div>
