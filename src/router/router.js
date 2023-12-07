import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Recipes from "../views/Recipes.vue";
import SimilarRecipes from "../views/SimilarRecipes.vue";
import Login from "../views/Login.vue";
import Deitary from "../views/Deitary.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
  },
  {
    path: "/recipes/:ingredients",
    name: "Similar Recipes",
    component: SimilarRecipes,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dietary",
    name: "Deitary",
    component: Deitary,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
