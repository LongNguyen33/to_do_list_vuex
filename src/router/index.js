import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'

Vue.use(Router)

const constantRoutes = [
    {path: '/about', component: About},
]
const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
const router = createRouter()

export default router