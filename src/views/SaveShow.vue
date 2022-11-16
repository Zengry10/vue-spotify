<script setup lang="ts">
import { ref } from 'vue'
import { saveShow } from '../api/saveShow'

const artists = ref([])

async function init(){
    artists.value = await saveShow('3NH8t45zOTqzlZgBvZRjvB')
}

init()

</script>

<template>
    <div>
        <pre> {{ artists.followers['total'] }}</pre>
    </div>
</template>

