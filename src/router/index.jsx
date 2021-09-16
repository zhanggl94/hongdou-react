import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { Redirect } from 'react-router';

// 配置重定向页面到404
const redirectToNotFound = () => <Redirect to='/notfound' />

export const routes = [
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