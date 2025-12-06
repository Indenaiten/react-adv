import path from "path";
import { Component, JSX, lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

interface Route {
    to: string,
    path: string,
    component: (() => JSX.Element) | LazyExoticComponent<() => JSX.Element>,
    name: string
}

export const routes: Route[] = [
    { path: '/lazy/layout/*', to: '/lazy/layout', component: lazy(() => import( /* webpackChunkName: "LazyLayoutPage" */ '../01-lazyload/layout/LazyLayout' )), name: 'Lazy Layout' },
    { path: '/no-lazy', to: '/no-lazy', component: NoLazy, name: 'No Lazy' },
];