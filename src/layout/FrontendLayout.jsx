import { Outlet, Link } from "react-router";


function FrontendLayout() {
    return (
        <>
            <header className="bg-color">

                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>首頁</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/product'>產品</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/cart'><i className="bi bi-cart-fill"></i></Link>
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

export default FrontendLayout;