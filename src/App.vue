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
      setID: 'home',

      installs:[
      {id: 'home', name: 'Install', fa: 'inst'},
      ],
      
      albums: [
        {name: 'drive'}, 
        {name: 'zhu'},
        {name: 'All New Indie'},
        {name: 'Mellow'},
        {name: 'Classic Road Trip Songs'},
        {name: 'Lana Del Ray Radio'},
      ],
      showDropdown : false,

      recents: [
        {src: '../public/img/album10.png', title: 'Daily Mix 2', artist: 'By Spotify'},
        {src: '../public/img/album2.png', title: 'Daily Mix 3', artist: 'Billie Eilish'},
        {src: '../public/img/album3.png', title: 'Billie Eilish Radio', artist: 'Cold Case Files'},
        {src: '../public/img/album4.png', title: 'Cold Case Files', artist: 'PodcastOne'},
        {src: '../public/img/album5.png', title: 'Life Is Good Radio', artist: 'By Spotify'},
        {src: '../public/img/album1.png', title: 'Life Is Good Radio', artist: 'By Spotify'},
      ],
      customs: [
        {src: '../public/img/album2.png', title: 'Daily Mix 2', artist: 'By Spotify'},
        {src: '../public/img/album6.png', title: 'Daily Mix 3', artist: 'By Spotify'},
        {src: '../public/img/album7.png', title: 'Billie Eilish Radio', artist: 'Billie Eilish'},
        {src: '../public/img/album8.png', title: 'Cold Case Files', artist: 'PodcastOne'},
        {src: '../public/img/album9.png', title: 'Life Is Good Radio', artist: 'By Spotify'},
        {src: '../public/img/album10.png', title: 'Life Is Good Radio', artist: 'By Spotify'},

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
            <div class="h-px w-full bg-gray-800 my-3"></div>
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

      <div id="scroll" class="w-full h-full relative overflow-y-scroll">
         
        <div class="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-black">
          <div class="flex items-center">
            <button class="rounded-full bg-black w-8 h-8 text-zinc-50 mr-3">
              <fa icon="chevron-left" class="text-xl"/> 
            </button>
            <button class="rounded-full bg-black w-8 h-8 text-zinc-50">
              <fa icon="chevron-right" class="text-xl"/> 
            </button>
          </div>
          <div class="relative">
            <button @click="showDropdown = true" class="bg-zinc-800 rounded-full py-1 px-2 flex items-center">
              <img src="../public/img/head.png" alt="" srcset="" class="rounded-full h-6 w-6 mr-2">
              <p class="text-zinc-50 font-black text-xs mr-3">Rémi Lemoust</p>
              <fa v-if="showDropdown === false" icon="circle-chevron-down" class="text-zinc-50"/>
              <fa v-if="showDropdown === true" icon="circle-chevron-up" class="text-zinc-50"/>  
            </button>
            <div v-if="showDropdown === true" class="focus:outline-none absolute bg-zinc-800 w-full rounded mt-1">
              <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-zinc-400 hover text-zinc-500 border-b border-zinc-900 opacity-75 hover:opacity-100 border-zinc-200">Account</button>
              <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-zinc-400 hover text-zinc-500 border-b border-zinc-900 opacity-75 hover:opacity-100">Log Out</button>
            </div>
          </div>
        </div>
        <!-- partie centrale -->
        <div class="p-6 py-10">
        <div class=" flex items-center justify-between">
          <h1 class="pl-2 text-2xl font-semibold text-zinc-50 tracking wider hover:underline">Recently Played</h1>
          <h2 class="pr-8 pt-4 text-xs text-zinc-500 uppercase tracking-wider hover:underline mb-3">See All</h2>
        </div>  
          <div class="w-full flex flex-wrap">    
            <div v-for="recent in recents" class="p-2 w-48 ">
              <div class="bg-zinc-800 w-full h-auto p-5 rounded-lg shadow-md opacity-70 hover:opacity-100 transition-all">
                <img :src="`${ recent.src }`" alt="" srcset="" class="h-auto w-full shadow mb-2">
                <h1 class="text-sm font-semibold text-zinc-50 tracking wide"> {{ recent.title }} </h1>
                <h2 class="text-xs text-zinc-500 tracking-wide pb-5"> {{ recent.artist }} </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 py-3">
        <div class="pl-2">
          <h1 class="pl-2 text-2xl font-semibold text-zinc-50 tracking wider hover:underline">Made for Stephanie</h1>
          <h2 class="text-sm text-zinc-500 ">Get better recommendations the more you listen.</h2>
        </div>  
          <div class="w-full flex flex-wrap">    
            <div v-for="custom in customs" class="p-2 w-48 ">
              <div class="bg-zinc-800 w-full h-auto p-5 rounded-lg shadow-md opacity-70 hover:opacity-100 transition-all">
                <img :src="`${ custom.src }`" alt="" srcset="" class="h-auto w-full shadow mb-2">
                <h1 class="text-sm font-semibold text-zinc-50 tracking wide"> {{ custom.title }} </h1>
                <h2 class="text-xs text-zinc-500 tracking-wide pb-5"> {{ custom.artist }} </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
   
    <div class="w-full bg-gray-900" style="height: 12vh;"> 
    </div>
  </div>

  <RouterView />
</template>

