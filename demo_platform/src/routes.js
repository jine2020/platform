import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import TestCase from './components/TestCase'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/dashboard', component: DashBoard },
    { path: '/testcase', component: TestCase },

]

const router = new VueRouter({
    routes
})

export default router