import { Outlet, createBrowserRouter } from 'react-router-dom';
import Layout from "./Layout.jsx";
import PostDetails from './PostDeTails.jsx';



const router = createBrowserRouter([
    {
        path: '/',
        element:
            <Layout />,
        children: [
            {
                path: '/home',
                element: <div>Home</div>
            },
            {
                path: '/about',
                element: <div>About us </div>
            },
            {
                path: '/contact/:contactId',
                element: <PostDetails></PostDetails>
            },
        ]

    },
    {
        path: '/login',
        element: <div>login</div>
    }
]);
export default router;