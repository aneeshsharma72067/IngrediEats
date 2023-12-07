<template>
    <div
        class="flex gap-10 py-4 px-5 bg-white rounded-xl duration-300 hover:scale-105 hover:shadow  border-2 border-transparent hover:border-primary neuromorphism cursor-pointer">
        <div class="px-4">
            <img src="/images/recipe-fallback.png" alt="">
        </div>
        <div class="flex flex-col gap-4 px-5 py-3">
            <h1 class="text-4xl font-bold text-slate-900 ">Pizza</h1>
            <div class="flex flex-wrap">
                <div class="text-neutral-800 text-lg cursor-pointer relative py-1 rounded-md">
                    <span class="text-primary font-bold">Ingredients - &nbsp;</span>
                    {{ parseJSON(props.recipe.Cleaned_Ingredients) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['recipe']);

const parseJSON = (stringArray) => {
    var JSONstring = stringArray.replace(/'/g, '"');
    var resultArray = JSON.parse(JSONstring)
    return resultArray
}

</script>

<style lang="css" scoped></style>