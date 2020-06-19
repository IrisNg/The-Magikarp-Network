import Scheduler from './components/Scheduler.vue'
import Todo from './components/Todo.vue'
import Sitemap from './components/Sitemap.vue'

export const routes = [
    {path: '/scheduler', component: Scheduler, props: true},
    {path: '/todo', component: Todo, props: true},
    {path: '/sitemap', component: Sitemap},
    {path: '*', redirect: '/scheduler'},
]