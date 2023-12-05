<template>
    <div
        class="flex flex-col gap-5 py-4 px-5 rounded-lg border-2 border-transparent hover:border-primary cursor-pointer neuromorphism hover:scale-105 duration-300">
        <div>
            <img src="/images/recipe-fallback.png" :alt="props.recipe.recipe_image_name">
        </div>
        <div class="text-left text-slate-700 font-medium text-[1.05rem] h-14 overflow-hidden">
            {{ props.recipe.recipe_name.length > 43 ? props.recipe.recipe_name.slice(0, 43) + '...' :
                props.recipe.recipe_name
            }}
        </div>
        <div class="">
            <span class="font-semibold text-primary">Ingredients &nbsp;</span>-
            {{ ingredients.slice(0, 40) + '...' }}
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['recipe']);

const ingredients = ref("");
onMounted(() => {
    ingredients.value = props.recipe.ingredients.join(', ')
})

</script>

<style scoped>
.neuromorphism {
    border-radius: 25px;
    background: white;
    box-shadow: 10px 10px 20px #cacaca,
        -10px -10px 20px #f6f6f6;
}
</style>