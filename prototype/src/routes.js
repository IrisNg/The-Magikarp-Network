import Home from './components/Home.vue'
import Sitemap from './components/Sitemap.vue'

export const routes = [
    {path: '/', component: Home, props: true},
    {path: '/sitemap', component: Sitemap},
    {path: '*', redirect: '/'},
]