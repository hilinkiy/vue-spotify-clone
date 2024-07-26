<script setup>
import {ref, onMounted} from "vue";
import {RouterLink, RouterView} from "vue-router";
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import MenuItem from "./components/MenuItem.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

import {useSongStore} from "./store/song.js";
import {storeToRefs} from "pinia";
const useSong = useSongStore();
const {isPlaying, currentTrack} = storeToRefs(useSong);

onMounted(() => {
  isPlaying.value = false
})

const openMenu = ref(false);
</script>

<template>
  <div>
    <div class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between">
      <div class="flex items-center ml-6">
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fill-color="#FFF" :size="30" />
        </button>
        <button type="button" class="rounded-full bg-black ml-4 p-[1px] cursor-pointer">
          <ChevronRight fill-color="#FFF" :size="30" />
        </button>
      </div>
      <button @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]': 'bg-black'" class="bg-black hover:bg-[#282828] rounded-full p-2 mr-8 mt-0.5 cursor-pointer transition-colors ease-in-out">
        <span class="flex items-center">
          <img class="rounded-full" width="27" src="https://yt3.ggpht.com/e9o-24_frmNSSVvjS47rT8qCHgsHNiedqgXbzmrmpsj6H1ketcufR1B9vLXTZRa30krRksPj=s88-c-k-c0x00ffffff-no-rj-mo" alt="">
          <span class="text-white text-[14px] ml-1.5 font-semibold">
            Hilinkiy
          </span>
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fill-color="#fff" :size="25" />
          <ChevronUp v-else @click="openMenu = false" fill-color="#fff" :size="25" />
        </span>
      </button>
      <div v-if="openMenu" class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer">
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3e3d3d] border-b border-b-gray-600">Profile</li>
          <li class="px-3 py-2.5 hover:bg-[#3e3d3d]">Log out</li>
        </ul>
      </div>
    </div>
    <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
      <RouterLink to="/">
        <img width="125" src="/images/icons/spotify-logo.png" alt="">
      </RouterLink>
      <div class="my-8">

      </div>
      <ul>
        <RouterLink to="/">
          <MenuItem class="ml-[1px]" :icon-size="23" name="Home" icon-string="home" page-url="/" />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem class="ml-[1px]" :icon-size="24" name="Search" icon-string="search" page-url="/search" />
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem class="ml-[2px]" :icon-size="23" name="Library" icon-string="library" page-url="/library" />
        </RouterLink>
        <li class="py-3.5"></li>
        <MenuItem :icon-size="24" name="Create Playlist" icon-string="playlist" page-url="/playlist" />
        <MenuItem class="-ml-[1px]" :icon-size="27" name="Liked Songs" icon-string="liked" page-url="/liked" />
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #4</li>
      </ul>
    </div>
    <div class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1c1c1c] to-black">
      <div class="mt-[70px]"></div>
      <RouterView />
      <div class="mb-[100px]"></div>
    </div>
  </div>
  <MusicPlayer v-if="currentTrack" />
</template>