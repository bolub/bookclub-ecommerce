const publicRoutes = [
  {
    path: "/",
    component: () => import("./index"),
  },
  {
    path: "/:id",
    component: () => import("./index/SingleProductPage/index"),
  },
];

export default publicRoutes;
