import Home from '../components/HelloWorld.vue'
import About from '../components/About.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

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
// console.log("abc", abc)

const router = new VueRouter({
    routes: abc
})

export default router