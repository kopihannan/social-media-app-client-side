import { createBrowserRouter } from "react-router-dom";
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
                path: '/media', element: <Media></Media>
            },
            {
                path: '/details/:id', element: <PostDetails></PostDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/post/${params.id}`)
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Registation></Registation>
            }
        ]
    }
])

export default router;