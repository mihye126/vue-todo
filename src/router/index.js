import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoIndexView from '../views/ToDoIndexView.vue'
import ToDoListView from '../views/ToDoListView.vue'
import ToDoCreateView from '../views/ToDoCreateView.vue'
import ToDoViewView from '../views/ToDoViewView.vue'

// 전역 수준(모든 .vue files)에서 VueRouter를 사용하기 위해 선언
// .vue 파일 안에서 this.$router로 접근 가능
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDoIndex',
    component: ToDoIndexView
  },
  {
    path: '/todolist',
    name: 'ToDolist',
    component: ToDoListView
  },
  {
    path: '/todocreate',
    name: 'todocreate',
    component: ToDoCreateView
  },
  {
    path: '/todoview/:no',
    name: 'todoview',
    component: ToDoViewView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
