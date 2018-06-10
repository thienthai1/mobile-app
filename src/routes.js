import Home from './pages/Signin';
import About from './pages/About.vue';
import Services from './pages/Services';
import Another from './pages/Another';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about/',
    component: About,
  },
  {
    path: '/services/',
    component: Services
  },
  {
    path: '/about/another/',
    component: Another
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];
