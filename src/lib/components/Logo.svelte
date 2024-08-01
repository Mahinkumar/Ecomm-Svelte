<script>
    import { websiteName,icon_name,icon_path } from '$lib/config'
    export let text_class;
    export let Logo_class;
    export let full_class;
</script>



<a href="/" class="flex items-center {full_class}">
    <img src="icons/{icon_path}" alt={icon_name} class="{Logo_class}"/>
    <h1 class="text-center font-bold {text_class}">{websiteName}</h1>
</a>
