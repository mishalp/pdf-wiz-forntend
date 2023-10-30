import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root/Root';
import Home from './pages/home/Home';
import EditPDF from './pages/editPDF/EditPDF';

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
                    element: <EditPDF />
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}
