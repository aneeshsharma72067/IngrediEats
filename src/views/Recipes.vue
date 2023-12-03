<template>
    <div class="flex flex-col gap-4 relative">
        <transition name="fade">
            <div v-if="!recipes.length" class="mx-auto w-full text-center absolute text-4xl font-semibold">
                Loading...
            </div>
            <div v-else class="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 duration-500 lg:grid-cols-4 gap-7 ">
                <template v-for="recipe in recipes" :key="recipe.id">
                    <RecipeCard :recipe="recipe" />
                </template>
            </div>

        </transition>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue';
import RecipeCard from '../components/RecipeCard.vue'

const recipes = ref([])
onMounted(() => {
    axios.get('/api/recipes').then(
        res => {
            recipes.value = res.data.message
            console.log(recipes.value);
        }
    ).catch(err => {
        console.log(err);
    });
});
</script>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>