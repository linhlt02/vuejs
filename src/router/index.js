// import {  createRouter, createWebHistory } from "vue-router"
import Home from '../components/HelloWorld.vue'
// // import Vue from 'vue'

import About from '../components/About.vue'
// // import createRouter from "vue-router";

// // Vue.use(createRouter)


// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/about',
//         name: 'About',
//         component: About
//     }
// ]
// const router = new createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
    
// })
// export default router
import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


  

Vue.use(createRouter)

const abc = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]
    
export default new createRouter({
    history: createWebHistory('/base-directory/'),
    routes: abc 
  })