<template>
  <div class="w-full flex items-center gap-5 text-slate-800 font-medium">
    <router-link to="/" class="logo flex-[0.2] flex items-center justify-center">
      <img src="/images/logo.png" alt="not-found" class="w-32" />
    </router-link>
    <div class="flex-[0.65]">
      <ul class="flex w-2/5 text-center items-center justify-between">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/recipes">Recipes</router-link>
        </li>
        <li>
          <router-link to="/dietary">Dietary</router-link>
        </li>
      </ul>
    </div>
    <div class="flex-[0.15]">
      <router-link
        to="/login"
        class="text-white bg-primary px-5 py-3 text-base duration-300 hover:bg-secondary rounded-md"
        >Sign In</router-link
      >
    </div>
  </div>
</template>

<script setup>
</script>
