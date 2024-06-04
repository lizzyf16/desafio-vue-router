import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/productos",
    name: "productos",
    component: () => import("../views/ProductosView.vue"),
    props: (route) => {
      return {
        nombre: "Desayunos",
        descripcion: "Contamos con desayunos nutritivos y deliciosos.",
        precio: 2000,
        cantidad: "Para dos personas",
      }
      // {
      //   nombre: "Almuerzos",
      //   descripcion: "Contamos con Almuerzos nutritivos y deliciosos.",
      //   precio: 4500,
      //   cantidad: "Para una persona",
      // },
    }
  },
  {
    path: '/contactos',
    name: 'contactos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
