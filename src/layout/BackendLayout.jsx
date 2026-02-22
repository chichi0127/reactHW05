import { Outlet, Link } from "react-router";


function BackendLayout() {
    return (
        <>
            <header>

                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/admin/product'>產品列表</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default BackendLayout;