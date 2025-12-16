<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { breeds } from "$lib/data";
  import * as Card from "$lib/components/ui/card";
</script>

<svelte:head>
  <title>CatWorld - Home</title>
  <meta name="description" content="Discover everything about cats, breeds, and gallery." />
</svelte:head>

<section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
  <div class="flex max-w-[980px] flex-col items-start gap-2">
    <h1 class="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
      Everything you need to know <br class="hidden sm:inline" />
      about your feline friends.
    </h1>
    <p class="max-w-[700px] text-lg text-muted-foreground">
      Discover breeds, browse our gallery, and learn how to care for your cat. 
      Join our community of cat lovers today.
    </p>
  </div>
  <div class="flex gap-4">
    <Button href="/breeds">Explore Breeds</Button>
    <Button variant="outline" href="/gallery">View Gallery</Button>
  </div>
</section>

<section class="container py-8 md:py-12 lg:py-24">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 class="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Featured Breeds</h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Check out some of the most popular cat breeds.
        </p>
    </div>
    <div class="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
        {#each breeds.slice(0, 3) as breed}
             <Card.Root class="flex flex-col overflow-hidden transition-all hover:scale-105">
                 <div class="aspect-video w-full overflow-hidden">
                    <img src={breed.image} alt={breed.name} class="h-full w-full object-cover transition-all hover:scale-105" />
                 </div>
                 <Card.Header>
                     <Card.Title>{breed.name}</Card.Title>
                     <Card.Description>{breed.origin}</Card.Description>
                 </Card.Header>
                 <Card.Content class="flex-1">
                     <p class="text-sm text-muted-foreground line-clamp-3">{breed.description}</p>
                 </Card.Content>
                 <Card.Footer>
                     <Button variant="secondary" class="w-full" href="/breeds/{breed.id}">Learn More</Button>
                 </Card.Footer>
             </Card.Root>
        {/each}
    </div>
</section>