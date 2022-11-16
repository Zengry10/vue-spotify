<script setup lang="ts">
import constImport from './Callback.vue'

let showDropdown = false
console.log (localStorage.getItem('spotifyToken'))
let token = localStorage.getItem('spotifyToken')
</script>


<template>
    <div class="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-black">
        <div class="flex items-center">
            <button class="rounded-full bg-black w-8 h-8 text-zinc-50 mr-3">
                <fa icon="chevron-left" class="text-xl"/> 
            </button>
            <button class="rounded-full bg-black w-8 h-8 text-zinc-50">
                <fa icon="chevron-right" class="text-xl"/> 
            </button>
        </div>

          
        <div v-if="token" class="relative">
            <button @click="showDropdown = true" class="bg-zinc-800 rounded-full py-1 px-2 flex items-center">
                <img src="../../public/img/head.png" alt="" srcset="" class="rounded-full h-6 w-6 mr-2">
                <p class="text-zinc-50 font-black text-xs mr-3">Rémi Lemoust</p>
                <fa v-if="showDropdown === false" icon="circle-chevron-down" class="text-zinc-50"/>
                <fa v-if="showDropdown === true" icon="circle-chevron-up" class="text-zinc-50"/>  
            </button>
            <div v-if="showDropdown === true" class="focus:outline-none absolute bg-zinc-800 w-full rounded mt-1">
                <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-zinc-400 hover text-zinc-500 border-b border-zinc-900 opacity-75 hover:opacity-100 border-zinc-200">Account</button>
                <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-zinc-400 hover text-zinc-500 border-b border-zinc-900 opacity-75 hover:opacity-100">Log Out</button>
            </div>
        </div>   
        <div v-else class="relative">
            <button @click="showDropdown = true" class="bg-zinc-800 rounded-full py-1 px-2 flex items-center">
    <p class="text-zinc-50 font-black text-xs p-1 align-center justify-center">Se connecter</p>
</button>
        </div>
    </div>
</template>
