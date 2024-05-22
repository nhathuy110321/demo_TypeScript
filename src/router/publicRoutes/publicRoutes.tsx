import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import Home from '../../pages/Home/Home';

const publicRoutes = [
  {
    path: '/',
    element: Home,
    layout: DefaultLayout,
  },
];

export default publicRoutes;
