import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Menu from "../pages/Menu/Menu";
import Message from "../pages/Message/Message";
import Video from "../pages/Video/Video";
import More from "../pages/More/More";
import FruitsOption from "../pages/Home/fruitsOption/fruitsOption";
import Orange from "../pages/Dashboard/Orange/Orange";
import Avocado from "../pages/Dashboard/Avocado/Avocado";
import Avocado2 from "../pages/Dashboard/Avocado/Avocado2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Default route for "/"
        element: <Navigate to="/fruits" replace={true} />, // Redirect to "/fruits"
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path: "/vegetables",
        element: <More />,
      },
    ],
  },
  {
    path: "fruits",
    element: <FruitsOption />,
    children: [
      {
        index: true,
        element: <Orange />
      },
      {
        path: "orange",
        element: <Orange />,
      },
      {
        path: "avocado",
        element: <Avocado />,
      },
      {
        path: "avocado2",
        element: <Avocado2 />,
      },
      
    ],
  },
]);

export default router;
