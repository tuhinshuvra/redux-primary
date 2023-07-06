import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import App from '../App';
import WrongRoute from '../page/WrongRoute';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>
    },
    {
        path: "/login",
        element: <Login></Login>
    },

    {
        path: "*",
        element: <WrongRoute></WrongRoute>
    },
]);

export default routes;