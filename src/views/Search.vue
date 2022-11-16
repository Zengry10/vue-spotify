
<script setup lang="ts">
import { search } from '../api/search'
import { ref } from 'vue'

const artists = ref([]);
async function init() {
  artists.value = await search('Flume', 'artist', 2010-2021, 1)
}

init()

</script>

<template>
  <main class="p-16">
   <pre>{{ artists }}</pre>
  </main>
</template>
