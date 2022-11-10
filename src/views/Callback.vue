<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import HomeView from './HomeView.vue';

const router = useRouter();
const route = useRoute();


const params = new URLSearchParams(route.hash.slice(1))
const token = params.get('access_token')!
console.log(token)
localStorage.setItem('spotifyToken', token)

router.push({
    name: 'home',
})
</script>

<template>
    <p></p>
</template>