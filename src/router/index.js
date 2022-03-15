import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthorView from "../views/AuthorView.vue";
import BooksView from "../views/BooksView.vue";
import GamesView from "../views/GamesView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/author",
    name: "author",
    component: AuthorView,
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
  },
  {
    path: "/games",
    name: "games",
    component: GamesView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
