<template>
    <div class="">
        <div class="w-4/5 mx-auto justify-between flex items-center">
            <h1
                class="flex-[0.8] font-gumela py-5 px-6 rounded-lg text-4xl w-4/5 font-semibold text-zinc-700 leading-normal">
                These
                recipes would be
                the most
                suited
                based on
                your
                ingredients</h1>
            <div class="bg-primary h-[5rem] flex-[0.15] rounded-lg"></div>
        </div>

        <div v-if="isLoading">
            <Loader />
        </div>
        <div v-else class="w-4/5 mx-auto py-[2rem] flex flex-col gap-6">
            <SimilarRecipeCard v-for="recipe in recipesBasedOnIngredients" :recipe="recipe" :key="recipe" />
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import SimilarRecipeCard from '../components/SimilarRecipeCard.vue';
import axios from 'axios';
import Loader from '../components/Loader.vue';


const selectedIngredients = ref([]);
const recipesBasedOnIngredients = ref([])

const isLoading = ref(false)
const route = useRoute();
onMounted(() => {
    isLoading.value = true;
    const ingredientsParams = route.params.ingredients;
    selectedIngredients.value = ingredientsParams.split('-')
    console.log(selectedIngredients.value);
    getSimilarRecipes()
});

const getSimilarRecipes = async () => {
    await axios.get(`/api/similar-recipes?ingredients=${route.params.ingredients}`).then((res) => {
        console.log(res.data.similar_recipes);
        recipesBasedOnIngredients.value = res.data.similar_recipes
    }).catch(err => {
        console.error('Error fetching recipes');
    }).finally(() => {
        isLoading.value = false
    })
};

</script>

<style lang="css" scoped></style>