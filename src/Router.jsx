import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root/Root';
import Home from './pages/home/Home';
import EditPDF from './pages/editPDF/EditPDF';
import { editLoader } from './pages/editPDF/loader';
import DownloadPdf from './pages/download/DownloadPdf';

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
                    path: "edit/:id",
                    element: <EditPDF />,
                    loader: editLoader,
                },
                {
                    path: "download/:id",
                    element: <DownloadPdf />
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}
