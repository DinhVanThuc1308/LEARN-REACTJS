import { Link, Outlet, useRedirect } from "react-router-dom";

function Layout() {
    // const navigation = useNavigate();
    const redirect = useRedirect();

    function handleClick() {
        redirect("/home")
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button onClick={handleClick}>hello</button>
                    </li>
                    <li>
                        <Link to="./about">About</Link>
                    </li>
                </ul>
            </nav>
            <h1>My App</h1>

            <Outlet />
        </div>
    );

}
export default Layout