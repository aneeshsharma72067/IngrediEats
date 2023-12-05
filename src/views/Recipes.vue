<template>
    <div class="flex flex-col gap-4 relative">
        <transition name="fade">
            <div v-if="isLoading" class="mx-auto mt-10 w-full text-center absolute text-4xl font-semibold">
                <div class="loader">
                    <Loader />
                </div>
            </div>
            <transition v-else>
                <div v-if="recipes.length"
                    class="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 duration-500 lg:grid-cols-4 gap-7 ">
                    <template v-for="recipe in recipes" :key="recipe.id">
                        <RecipeCard :recipe="recipe" />
                    </template>
                </div>
                <div v-else>
                    <p>No Recipes Available</p>
                </div>
            </transition>
        </transition>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';
import RecipeCard from '../components/RecipeCard.vue'
import Loader from '../components/Loader.vue';

const isLoading = ref(false)
const recipes = ref([])
const getRecipeData = async () => {
    isLoading.value = true;
    await axios.get('/api/recipes').then(
        res => {
            recipes.value = res.data.message.length > 100 ? res.data.message.slice(0, 100) : res.data.message
            isLoading.value = false;
            console.log(`Recipes Fetched : ${res.data.message.length}, Recipes Displayed : ${recipes.value.length}, `);
        }
    ).catch(err => {
        isLoading.value = false
        console.log(err);
    });
}

getRecipeData();
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