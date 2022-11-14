<script setup lang="ts">
import { search } from '../api/search'
import { ref } from 'vue'

search('PNL', 'artist', 2010-2021, 1)

const artists = ref([])

async function init() {
 artists.value = await search('PNL', 'artist', 2010-2021, 1)
}

init()


</script>

<template>
  <main>
    <pre> {{ artists.artists.items}}</pre>
  </main>
</template>
