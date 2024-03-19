import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
    const approuter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
    
    return (
        <div>
             <RouterProvider router={approuter} />
        </div>
    );
}
export default Body;