import path from "path";
import { Component, JSX, lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
    to: string,
    path: string,
    component: (() => JSX.Element) | LazyExoticComponent<() => JSX.Element>,
    name: string
}

export const routes: Route[] = [
    { to: '/lazy/1', path: 'lazy/1', component: lazy(() => import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1' )), name: 'Lazy 1' },
    { to: '/lazy/2', path: 'lazy/2', component: lazy(() => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2' )), name: 'Lazy 2' },
    { to: '/lazy/3', path: 'lazy/3', component: lazy(() => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3' )), name: 'Lazy 3' },
];