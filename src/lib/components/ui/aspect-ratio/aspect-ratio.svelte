<script lang="ts">
	import { AspectRatio as AspectRatioPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		ratio = 1 / 1,
		children,
		...restProps
	}: AspectRatioPrimitive.RootProps = $props();
</script>

<AspectRatioPrimitive.Root
	bind:ref
	{ratio}
	class={cn(className)}
	{...restProps}
>
	{@render children?.()}
</AspectRatioPrimitive.Root>
