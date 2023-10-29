import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root/Root';
import Home from './pages/home/Home';

export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "edit",
                    element: <h1>Hello</h1> 
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}
