<script lang="ts">
    import { breeds } from "$lib/data";
    import { Input } from "$lib/components/ui/input";
    import * as Card from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
    import { Search } from "lucide-svelte";

    let searchQuery = $state("");

    let filteredBreeds = $derived(
        breeds.filter(b => 
            b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            b.temperament.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
</script>

<svelte:head>
  <title>CatWorld - Breeds</title>
  <meta name="description" content="Explore different cat breeds, their temperament and origins." />
</svelte:head>

<div class="container py-10">
    <div class="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <div class="space-y-1">
            <h1 class="text-3xl font-bold tracking-tight">Cat Breeds</h1>
            <p class="text-muted-foreground">Find the perfect breed for your lifestyle.</p>
        </div>
        <div class="relative w-full md:w-72">
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
                type="search" 
                placeholder="Search breeds..." 
                class="pl-9"
                bind:value={searchQuery}
            />
        </div>
    </div>
    
    {#if filteredBreeds.length === 0}
        <div class="text-center py-20">
            <p class="text-muted-foreground text-lg">No breeds found matching "{searchQuery}"</p>
            <Button variant="link" onclick={() => searchQuery = ""}>Clear search</Button>
        </div>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredBreeds as breed (breed.id)}
                <Card.Root class="flex flex-col overflow-hidden h-full">
                    <div class="aspect-video w-full overflow-hidden bg-muted">
                        <img src={breed.image} alt={breed.name} class="h-full w-full object-cover transition-all hover:scale-105" loading="lazy" />
                    </div>
                    <Card.Header>
                        <div class="flex justify-between items-start">
                            <div>
                                <Card.Title>{breed.name}</Card.Title>
                                <Card.Description>{breed.origin}</Card.Description>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Content class="flex-1">
                        <p class="text-sm text-muted-foreground line-clamp-3 mb-4">{breed.description}</p>
                        <div class="flex flex-wrap gap-1">
                            {#each breed.temperament.split(', ') as temp}
                                <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                    {temp}
                                </span>
                            {/each}
                        </div>
                    </Card.Content>
                    <Card.Footer>
                        <Button class="w-full" variant="outline" href="/breeds/{breed.id}">View Details</Button>
                    </Card.Footer>
                </Card.Root>
            {/each}
        </div>
    {/if}
</div>
