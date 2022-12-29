import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registation from "../components/Login/Registation";
import Main from "../components/Main/Main";
import Media from "../components/Pages/Media/Media";
import PostDetails from "../components/Pages/PostDetails/PostDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <PrivateRoutes><Home></Home></PrivateRoutes>
            },
            {
                path: '/media', element: <PrivateRoutes><Media></Media></PrivateRoutes>
            },
            {
                path: '/details/:id', element: <PostDetails></PostDetails>,
                loader: ({params})=> fetch(`https://social-media-hazel.vercel.app/post/${params.id}`)
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Registation></Registation>
            },
            {
                path: '/about', element: <About></About>
            }
        ]
    }
])

export default router;