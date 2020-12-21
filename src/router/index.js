import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Tasks from "../views/Tasks.vue";
import NewTasks from "../views/NewTasks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/tasks/new",
    name: "NewTasks",
    component: NewTasks
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
