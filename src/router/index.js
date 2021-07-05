import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Data from "../views/Data.vue";
import UserList from "../views/UserList.vue";
import DataBinding from "../views/DataBinding.vue";
import vending from "../views/vending.vue";
import DataBindingHTML from "../views/DataBindingHTML.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import restaurant from "../views/restaurant.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/data",
    name: "Data",
    component: Data,
  },
  {
    path: "/userlist",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding,
  },
  {
    path: "/vending",
    name: "Vending",
    component: vending,
  },
  {
    path: "/DataBindingHTML",
    name: "DataBindingHTML",
    component: DataBindingHTML,
  },
  {
    path: "/DataBindingInputText",
    name: "DataBindingInputText",
    component: DataBindingInputText,
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: restaurant,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
