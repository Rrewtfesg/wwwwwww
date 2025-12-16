<script lang="ts">
    import { breeds } from "$lib/data";
    import { AspectRatio } from "$lib/components/ui/aspect-ratio";
    
    // Duplicate breeds to have more images for the gallery
    const images = [...breeds, ...breeds];
</script>

<svelte:head>
  <title>CatWorld - Gallery</title>
  <meta name="description" content="View our collection of adorable cat photos." />
</svelte:head>

<div class="container py-10">
    <div class="flex flex-col gap-2 mb-8">
        <h1 class="text-3xl font-bold tracking-tight">Gallery</h1>
        <p class="text-muted-foreground">A collection of our favorite feline friends.</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each images as item, i}
            <div class="overflow-hidden rounded-lg border bg-background shadow-sm">
                 <AspectRatio ratio={4/3}>
                    <img src={item.image} alt="Cat {i}" class="h-full w-full object-cover transition-all hover:scale-105" loading="lazy" />
                 </AspectRatio>
            </div>
        {/each}
    </div>
</div>
