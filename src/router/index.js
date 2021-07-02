import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingText from "../views/DataBindingText.vue";
import DataBindingTextArea from "../views/DataBindingTextArea.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";
import DataBindingAttribute from "../views/DataBindingAttribute.vue";
import DataBindingButton from "../views/DataBindingButton.vue";
import DataTest from "../views/DataTest.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
  // {
  //   path: "/databinding",
  //   name: "DataBinding",
  //   component: DataBinding,
  // },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: DataBindingHtml,
  },
  {
    path: "/DataTest",
    name: "DataTest",
    component: DataTest,
  },
  {
    path: "/DataBindingButton",
    name: "DataBindingButton",
    component: DataBindingButton,
  },
  {
    path: "/DataBindingAttribute",
    name: "DataBindingAttribute",
    component: DataBindingAttribute,
  },
  {
    path: "/DataBindingRadio",
    name: "DataBindingRadio",
    component: DataBindingRadio,
  },
  {
    path: "/databindingselect",
    name: "DataBindingSelect",
    component: DataBindingSelect,
  },
  {
    path: "/databindingtextarea",
    name: "DataBindingTextArea",
    component: DataBindingTextArea,
  },
  {
    path: "/DataBindingCheckbox",
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    // route level code-splitting
    // this generates a separate chunk (databinding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "databinding" */ "../views/DataBinding.vue"),
  },
  {
    path: "/databindingtext",
    name: "DataBindingText",
    // route level code-splitting
    // this generates a separate chunk (databinding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "databinding" */ "../views/DataBindingText.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;