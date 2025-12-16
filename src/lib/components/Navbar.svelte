<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Cat, Github } from "lucide-svelte";
</script>

<nav class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="container flex h-14 items-center px-4">
    <div class="mr-4 flex">
      <a href="/" class="mr-6 flex items-center space-x-2">
        <Cat class="h-6 w-6" />
        <span class="hidden font-bold sm:inline-block">CatWorld</span>
      </a>
      <nav class="flex items-center space-x-6 text-sm font-medium">
        <a href="/gallery" class="transition-colors hover:text-foreground/80 text-foreground/60">Gallery</a>
        <a href="/breeds" class="transition-colors hover:text-foreground/80 text-foreground/60">Breeds</a>
        <a href="/about" class="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
      </nav>
    </div>
    <div class="flex flex-1 items-center justify-end space-x-2">
        <Button variant="ghost" size="icon" href="https://github.com/Rrewtfesg/wwwwwww" target="_blank" rel="noreferrer">
            <Github class="h-4 w-4" />
            <span class="sr-only">GitHub</span>
        </Button>
    </div>
  </div>
</nav>
