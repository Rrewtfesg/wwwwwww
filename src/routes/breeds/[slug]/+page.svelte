<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import { ArrowLeft } from "lucide-svelte";

    let { data } = $props();
    let breed = $derived(data.breed);
</script>

<svelte:head>
  <title>CatWorld - {breed.name}</title>
  <meta name="description" content={breed.description} />
</svelte:head>

<div class="container py-10 max-w-4xl">
    <Button variant="ghost" href="/breeds" class="mb-6 pl-0 hover:pl-2 transition-all">
        <ArrowLeft class="mr-2 h-4 w-4" /> Back to Breeds
    </Button>
    
    <div class="grid gap-8 md:grid-cols-2">
        <div class="rounded-lg overflow-hidden border bg-muted aspect-square md:aspect-auto">
            <img src={breed.image} alt={breed.name} class="w-full h-full object-cover" />
        </div>
        
        <div class="space-y-6">
            <div>
                <h1 class="text-4xl font-bold tracking-tight">{breed.name}</h1>
                <p class="text-lg text-muted-foreground mt-2">{breed.origin}</p>
            </div>
            
            <div class="space-y-4">
                <p class="text-lg leading-relaxed">{breed.description}</p>
                
                <div class="grid grid-cols-2 gap-4 py-4 border-t border-b">
                    <div>
                        <span class="text-sm font-medium text-muted-foreground">Life Span</span>
                        <p class="font-medium">{breed.life_span} years</p>
                    </div>
                    <div>
                        <span class="text-sm font-medium text-muted-foreground">Origin</span>
                        <p class="font-medium">{breed.origin}</p>
                    </div>
                </div>

                <div>
                    <h3 class="font-semibold mb-3">Temperament</h3>
                    <div class="flex flex-wrap gap-2">
                        {#each breed.temperament.split(', ') as temp}
                            <Badge variant="secondary">{temp}</Badge>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
