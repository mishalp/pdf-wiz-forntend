import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root/Root';
import Home from './pages/home/Home';
import EditPDF from './pages/editPDF/EditPDF';
import { editLoader } from './pages/editPDF/loader';
import DownloadPdf from './pages/download/DownloadPdf';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signUp/SignUp';
import MyUploads from './pages/myUploads/MyUploads';
import { uploadsLoader } from './pages/myUploads/loader';

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
                },
                {
                    path: "login",
                    element: <LogIn />
                },
                {
                    path: "signup",
                    element: <SignUp />
                },
                {
                    path: "my-uploads",
                    element: <MyUploads />,
                    loader: uploadsLoader
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}
