<template>
    <section class="w-full flex flex-col gap-10 my-5 relative min-h-[150vh]">
        <div class="radial-gradient-ellipse -top-[5rem] -left-[5rem]"></div>
        <div class="radial-gradient-circle -right-[17rem]"></div>
        <img src="/images/food-1.png" alt="not-found" class="w-[20rem] absolute -right-52 top-20" />
        <img src="/images/food-2.png" alt="not-found" class="w-[20rem] absolute -left-32 top-56" />
        <div class="w-3/5 mx-auto">
            <h1 class="text-5xl text-slate-700 leading-snug font-black text-center">
                Elevate your kitchen game with our curated recipes. Taste the
                <span class="text-primary">Extraordinary</span> today!
            </h1>
        </div>
        <div class="w-full flex flex-col  items-center gap-3 justify-center">
            <div class="w-3/5 flex gap-3 items-center">

                <input type="text"
                    class="px-5 py-3 w-full focus:shadow-[0_0_2px_3px_rgb(255,132,0)] duration-300 rounded-lg text-lg outline-none border-none text-slate-800"
                    placeholder="Enter ingredients" v-model="searchQuery" @focus="isInputFocused = true"
                    @blur="isInputFocused = false, currentIndex = 0" @keydown="ingrdientTaverse" ref="ingInput" />
                <router-link to="/"
                    class="px-5 py-3 text-white bg-primary rounded-md text-lg duration-300 hover:bg-secondary">Search</router-link>
            </div>
            <transition name="result">
                <div v-show="isInputFocused || selectedIngredients.length"
                    class="w-3/5 px-5 py-3 min-h-[2.5rem] bg-white rounded-md">
                    <span v-if="!selectedIngredients.length">No Ingredients Selected</span>
                    <div v-else class="flex flex-wrap gap-2">
                        <div v-for="ingredient in selectedIngredients" :key="ingredient"
                            @click="selectedIngredients = selectedIngredients.filter(item => item !== ingredient)"
                            class="text-white cursor-pointer bg-primary relative px-3 py-1 rounded-md">
                            <span>{{ ingredient }}</span>
                            <span class="absolute -right-2 -top-2">
                                <svgClose />
                            </span>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="result">
                <div v-show="isInputFocused || searchQuery.length" id="ingredientContainer"
                    class="w-3/5 max-h-44 overflow-y-scroll rounded-lg bg-white duration-[3s]" :ref="containerRef">
                    <div v-for="ingredient in filteredIngredients" :key="ingredient"
                        class="px-4 py-2 text-lg min-h-[2.5rem] text-slate-700 duration-300 hover:bg-neutral-300 cursor-pointer"
                        @click="!selectedIngredients.includes(ingredient) && selectedIngredients.push(ingredient), ingInput.focus()"
                        :class="(filteredIngredients.indexOf(ingredient) === currentIndex - 1) && 'bg-neutral-300'">
                        {{ ingredient }}
                    </div>
                </div>
            </transition>
        </div>
    </section>
</template>

<script setup>
import svgClose from './icons/close.vue'
import { computed, ref } from "vue";

const searchQuery = ref("");
const isInputFocused = ref(false);
const currentIndex = ref(0)
const containerRef = ref(null)
const selectedIngredients = ref([])
const ingInput = ref(null)

const ingredients = [
    "Salmon",
    "Egg",
    "Milk",
    "Chicken",
    "Rice",
    "Green Pepper",
    "Red Chilli",
    "Carrot",
];

const filteredIngredients = computed(() =>
    ingredients.filter((item) =>
        item.toLowerCase().includes(searchQuery.value.toLowerCase())
    )

);

const ingrdientTaverse = (e) => {
    const container = document.getElementById('ingredientContainer')
    if (e.key === 'ArrowDown') {
        currentIndex.value = currentIndex.value >= filteredIngredients.value.length ? filteredIngredients.value.length : currentIndex.value + 1
    }
    else if (e.key === 'ArrowUp') {
        currentIndex.value = currentIndex.value <= 0 ? 0 : currentIndex.value - 1
    }
    container.children[currentIndex.value - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
    });
}

</script>
<style scoped>
.radial-gradient-ellipse {
    position: absolute;
    width: 30rem;
    z-index: -1;
    height: 15rem;
    border-radius: 50%;
    background: radial-gradient(ellipse at center,
            rgba(255, 132, 0, 0.6) 0%,
            rgba(28, 28, 28, 0) 60%);
}

.radial-gradient-circle {
    position: absolute;
    width: 30rem;
    z-index: -1;
    height: 30rem;
    border-radius: 50%;
    background: radial-gradient(circle,
            rgba(255, 132, 0, 1) 0%,
            rgba(28, 28, 28, 0) 60%);
}

.result-enter-active,
.result-leave-active {
    transition: opacity 0.3s ease;
}

.result-enter-from,
.result-leave-to {
    opacity: 0;
}
</style>