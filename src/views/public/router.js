const publicRoutes = [
  {
    path: '/',
    component: () => import('./index'),
  },
  {
    path: '/product/:id',
    component: () => import('./SingleProductPage'),
  },
  {
    path: '/checkout',
    component: () => import('./Checkout'),
  },
  {
    path: '/cart',
    component: () => import('./Cart'),
  },
];

export default publicRoutes;
