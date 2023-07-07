import { createRouter, createWebHistory } from 'vue-router'
import InvestmentsWalletsView from '../views/InvestmentsWalletsView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import StockCharts from '../views/StockCharts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InvestmentsWalletsView
    },
    {
      path: '/:pathMatch(.*)*',
      component: InvestmentsWalletsView
    },
    {
      path: '/expenses',
      component: ExpensesView
    },
    {
      path: '/charts',
      component: StockCharts
    }
  ]
})

export default router
