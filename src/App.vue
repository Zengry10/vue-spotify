<script lang="ts">
export default {
  name: 'App',
  data: function() {
    return {
      props: {
        icon: String
      },
      pages: [
        {id: 'home', name: 'Home', fa: 'home'},
        {id: 'search', name: 'Search', fa: 'search'},
        {id: 'library', name: 'Your Library', fa: 'bar_chart'},
      ],
      installs:[
      {id: 'home', name: 'Install', fa: 'inst'},
      ],
      setID: 'home',
      albums: [
        {name: 'drive'}, 
        {name: 'zhu'},
        {name: 'All New Indie'},
        {name: 'Mellow'},
        {name: 'Classic Road Trip Songs'},
        {name: 'Lana Del Ray Radio'},
      ]
    }
  }
}



import { RouterLink, RouterView } from 'vue-router'

</script>

<template class="">
  <div  class="h-screen bg-black">
    <div class="flex" style="height: 88vh;">
      
      <div class="w-56 bg-black h-full flex-none">
          <div class="p-6">
            <img src="../public/img/Spotify_Logo_White.png" class="h-10" style="filter: brightness(0) invert(1)" />
          </div>
          <div class="mx-2 mb-5">
            <button v-for="page in pages" @click="setID = page.id" :class="`w-full focus:outline-none text-sm font-semibold rounded px-3 py-2 flex items-center justify-start ${setID === page.id ? 'bg-gray-800 text-zinc-50' : 'text-zinc-500'}`">
            
              <fa icon="search" class=" mr-3"/> {{ page.name }}
            </button>
          </div>
          <div class="mx-5">
            <h1 class="mb-3 text-xs tracking-widest uppercase text-zinc-50">Playlists</h1>
            <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
              <img src="../public/img/like.png" alt="" srcset="" class="h-8 w-8 mr-3"/>
              <p class="text-sm text-white font-semibold">Create Playlist</p>
            </button>

            <button class="flex items-center justify-start opacity-75 hover:opacity-100">
              <img src="../public/img/add.PNG" alt="" srcset="" class="h-8 w-8 mr-3"/>
              <p class="text-sm text-white font-semibold">Liked Songs</p>
            </button>
            <div class="h-px w-fullbg-light my-3"></div>
          </div>
          <div class="mx-5">
            <div id="scroll" class="w-full h-10 overflow-y-scroll overflow-x-hidden">
            <p v-for="album in albums" class="text-zinc-500 hover:text-zinc-50 text-xs py-1"> {{ album.name }}</p>
            </div>
            <button v-for="install in installs" @click="setID = install.id" :class="` hover:bg-gray-800 w-full focus:outline-none text-sm font-semibold rounded px-3 py-2 flex items-center justify-start text-zinc-500 ${setID === install.id }`">
            
            <fa icon="cloud" class=" mr-3"/> {{install.name}}
          </button>
          </div>
          <div class="relative pt-4">
            <div class="w-full h-56 flex justify-end items-start  p-2 absolute opacity-0 hover:opacity-100 z-[100]">
              <div class="bg-black rounded-full h-6 w-6 pl-1">
                <fa icon="chevron-down" class=" text-zinc-50"/>
              </div>
            </div>
            <img src="../public/img/junk.png" alt="" srcset=""/>
          </div>
        </div>

      <div class="w-full h-full relative">
         
      <div class="w-full sticky top-0 p-2">
        </div>
      </div>
    </div>
   
    <div class="w-full bg-light" style="height: 12vh;"> 
    </div>
  </div>

  <RouterView />
</template>

