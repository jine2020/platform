import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import DashBoard from './components/DashBoard'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/dashboard', component: DashBoard },
]

const router = new VueRouter({
    routes
})

export default router