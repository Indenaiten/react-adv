import { Navigate, NavLink, Route, Routes } from "react-router";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
    return (
        <>
            <h1>Lazy Layout</h1>

            {/* Aquí irán las rutas hijas */}

            <ul>
                <li>
                    <NavLink to="/lazy/layout/1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy/layout/2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy/layout/3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="1" element={ <LazyPage1 /> }/>
                <Route path="2" element={ <LazyPage2 /> }/>
                <Route path="3" element={ <LazyPage3 /> }/>
                <Route path="*" element={ <Navigate to="/lazy/layout/1" /> }/>
            </Routes>
        </>
    )
}

export default LazyLayout;