import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router";
import logo from '../logo.svg';
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo"/>

                        <ul>
                            {/* Creare dinamicamente los enlaces de navegación */}
                            { 
                                routes.map( ({ to, name }) => (
                                    <li key={ to }>
                                        <NavLink to={ to } className={ ({ isActive }) => isActive ? 'nav-active' : '' } end>{ name }</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {/* Crear dinámicamente las rutas */}
                        {
                            routes.map( ({ to, path, component: Component }) => (
                                <Route  key={ to } path={ path } element={ <Component/> }/>
                            ))
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}