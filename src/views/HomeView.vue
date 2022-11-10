<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { search } from '../api/spotify'
import { ref } from 'vue'

search('Flume', 'artist')

const artists = ref([])

async function init() {
 artists.value = await search('Flume', 'artist', 1)
}

init()

</script>

<template>
  <main>
    <pre> {{ artists }}</pre>
  </main>
</template>
