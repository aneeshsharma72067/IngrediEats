<template>
  <main class="w-4/5 max-w-6xl mx-auto my-3 flex flex-col gap-10">
    <Navbar />
    <!-- <transition name="loader">
      <div v-show="!isLoaded"
        class="absolute duration-300 flex bg-opacity-30 backdrop-blur-md items-center justify-center top-0 left-0 w-full h-full bg-zinc-700 z-10">
        <span class="text-4xl font-bold text-white">Loading....</span>
      </div>
    </transition> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Navbar from "./components/Navbar.vue";

const isLoaded = ref(false)
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 1000)
})

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.loader-enter-active,
.loader-leave-to {
  transition: all 0.3s ease;
}

.loader-leave-active {
  opacity: 0;
}
</style>