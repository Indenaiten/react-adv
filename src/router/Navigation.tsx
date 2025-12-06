import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router";
import logo from '../logo.svg';
import { lazy, Suspense } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

// Lazy load the layout and pages
const LazyLayout = lazy(() => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));
const LazyPage1 = lazy(() => import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo"/>

                        <ul>
                            {/* Creare dinamicamente los enlaces de navegación */}
                            <li>
                                <NavLink to={"/lazy/layout"} className={ ({ isActive }) => isActive ? 'nav-active' : '' } end>Lazy Load</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/no-lazy"} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>No Lazy</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="lazy/layout" element={<LazyLayout />}>
                            <Route index element={<Navigate to="1" replace />} />
                            <Route path="1" element={<LazyPage1 />} />
                            <Route path="2" element={<LazyPage2 />} />
                            <Route path="3" element={<LazyPage3 />} />
                        </Route>
                        <Route path="no-lazy" element={ <NoLazy/> } />
                        <Route path="/*" element={<Navigate to={'/lazy/layout'} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}