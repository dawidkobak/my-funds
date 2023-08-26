import { createRouter, createWebHistory } from 'vue-router'
import InvestmentsWalletsView from '../views/InvestmentsWalletsView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import StockCharts from '../views/StockCharts.vue'
import TransactionsView from '../views/TransactionsView.vue'
import AuthorizationView from '../views/AuthorizationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/auth',
      component: AuthorizationView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: InvestmentsWalletsView
    },
    {
      path: '/transactions',
      component: TransactionsView
    },
    {
      path: '/charts',
      component: StockCharts
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
