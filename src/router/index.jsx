import Signin from '../pages/Signin'
import Home from '../pages/Home'

export const routes = [
  {
    path: '/signin',
    component: Signin,
    extra: true,
  },
  {
    path: '/',
    component: Home,
    extra: true,
  },
  {
    path: '/home',
    component: Home,
    extra: true,
  }
];