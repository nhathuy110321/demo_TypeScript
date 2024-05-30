import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/login';
import Register from '../../pages/Register/Register';

const publicRoutes = [
  {
    path: '/',
    element: Home,
    layout: DefaultLayout
  },
  {
    path: '/login',
    element: Login,
    layout: DefaultLayout
  },
  {
    path: '/register',
    element: Register,
    layout: DefaultLayout
  }
];

export default publicRoutes;
