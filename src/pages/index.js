import { lazy } from "react";

const Home = lazy(() => import("./HomePage"));
const About = lazy(() => import("./About"));
const Products = lazy(() => import("./Products"));
const SingleProduct = lazy(() => import("./SingleProduct"));
const Cart = lazy(() => import("./Cart"));
const CheckOut = lazy(() => import("./CheckOut"));
const Error = lazy(() => import("./ErrorPage"));

export { Home, About, Error, Cart, Products, SingleProduct, CheckOut };