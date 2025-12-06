import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router";
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>

                    <ul>
                        <li>
                            <NavLink to={"/lazy/1"} className={ ({ isActive }) => isActive ? 'nav-active' : '' } end>Lazy 1</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/lazy/2"} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/lazy/3"} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy/1" element={<LazyPage1/>}/>
                    <Route path="lazy/2" element={<LazyPage2/>}/>
                    <Route path="lazy/3" element={<LazyPage3/>}/>
                    <Route path="/*" element={<Navigate to="/lazy/1" replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}