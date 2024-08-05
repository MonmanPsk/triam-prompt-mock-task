import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Task from './pages/Task';
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/*",
        element: <Navigate to="/" />,
    },
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/practice",
        element: <Practice />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/task",
        element: <Task />,
        errorElement: <ErrorPage />,
    },
]);

export default router;
