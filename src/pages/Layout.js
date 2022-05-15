import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <ul className="navbar-nav">
                    <li className="nav-item me-auto mb-2 mb-lg-0">
                        <Link className="nav-link text-white" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Tarea1">Convertidor de unidades</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Tarea2">Invitados a mi fiesta</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Tarea3">Tablas de multiplicar</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
        </>
    )
}

export default Layout