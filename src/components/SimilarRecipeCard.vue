<template>
    <div
        class="flex gap-10 py-4 px-5 bg-white rounded-xl duration-300 hover:scale-105 hover:shadow  border-2 border-transparent hover:border-primary neuromorphism cursor-pointer">
        <div class="flex-[0.3] px-4">
            <img src="/images/recipe-fallback.png" alt="">
        </div>
        <div class="flex-[0.7] flex flex-col gap-4 px-5 py-3">
            <h1 class="text-4xl font-bold text-slate-900 ">{{ props.recipe.Title }}</h1>
            <div class="flex flex-wrap">
                <div class="text-neutral-800 text-lg cursor-pointer relative py-1 rounded-md overflow-hidden">
                    <span v-if="props.recipe.Cleaned_Ingredients" class="text-primary font-bold">Ingredients - &nbsp;</span>

                    {{ (props.recipe.Cleaned_Ingredients.join(', ').length > 200 ?
                        props.recipe.Cleaned_Ingredients.join(',').slice(0, 200) + '...' :
                        props.recipe.Cleaned_Ingredients.join(', ')) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['recipe']);


</script>

<style lang="css" scoped></style>