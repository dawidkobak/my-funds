import { createRouter, createWebHistory } from 'vue-router'
import InvestmentsWalletsView from '../views/InvestmentsWalletsView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import StockQuotesView from '../views/StockQuotesView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import AuthorizationView from '../views/AuthorizationView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import RegisterView from '../views/RegisterView.vue'
import SettingsView from '../views/SettingsView.vue'

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
      path: '/investments',
      name: 'investments',
      component: InvestmentsWalletsView
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
      path: '/expenses',
      component: ExpensesView
    },
    {
      path: '/stock-quotes',
      component: StockQuotesView
    },
    {
      path: '/reset-password',
      component: ResetPasswordView
    },
    {
      path: '/register',
      component: RegisterView
    },
    {
      path: '/settings',
      component: SettingsView
    }
  ]
})

export default router
