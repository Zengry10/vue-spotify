<script setup lang="ts">
import { ref } from 'vue'
import { saveShow } from '../api/saveShow'

const artists = ref([])

async function init() {
 const res = await saveShow('3NH8t45zOTqzlZgBvZRjvB')
 artists.value = res.data
}

init()

</script>

<template>
    <div>
           <pre> {{ artists.artists.follower }}</pre>
    </div>
</template>