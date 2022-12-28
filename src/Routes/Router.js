import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Media from "../components/Pages/Media/Media";
import PostDetails from "../components/Pages/PostDetails/PostDetails";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/media', element: <Media></Media>
            },
            {
                path: '/details/:id', element: <PostDetails></PostDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/post/${params.id}`)
            }
        ]
    }
])

export default router;