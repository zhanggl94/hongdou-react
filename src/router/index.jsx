import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import BillType from '../pages/BillType'
import PayType from '../pages/PayType'
import NotFound from '../pages/NotFound'
import { Redirect } from 'react-router';

// 配置重定向页面到404
const redirectToNotFound = () => <Redirect to='/notfound' />

const redirectToContentNotFound = () => <Redirect to='/home/notfound' />

export const commonRoutes = [
  {
    path: '/signin',
    component: Signin,
    exact: true,
  },
  {
    path: '/signup',
    component: Signup,
    exact: true,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/notfound',
    component: NotFound,
  },
  {
    path: '*',
    component: redirectToNotFound,
  }
];

export const mainRoutes = [
  {
    path: '/home/billtype',
    component: BillType,
  },
  {
    path: '/home/paytype',
    component: PayType,
  },
  {
    path: '/home/notfound',
    component: NotFound,
  },
  {
    path: '/home/*',
    component: redirectToContentNotFound,
  }
]