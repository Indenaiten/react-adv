import { NavLink, Outlet } from "react-router";

export const LazyLayout = () => {
    return (
        <>
            <h1>Lazy Layout</h1>

            {/* Aquí irán las rutas hijas */}

            <ul>
                <li>
                    <NavLink to="1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                </li>
            </ul>

            <Outlet />
        </>
    )
}

export default LazyLayout;