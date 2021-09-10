import Signin from '../pages/Signin'
import Home from '../pages/Home'

const config = [
  {
    path: '/signin',
    component: Signin,
    extra: true,
  },
  {
    path: '/',
    component: Home,
    extra: true,
  }
]
export default config