import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Message from "../pages/Message/Message";
import Video from "../pages/Video/Video";
import More from "../pages/More/More";
import FruitsOption from "../pages/Home/fruitsOption/fruitsOption";
import Orange from "../pages/Dashboard/Orange/Orange";
import Avocado from "../pages/Dashboard/Avocado/Avocado";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // element: <MainLayoutCopy />,
    children: [
      {
        path: "/",
        element: <Home />,
        // index: true,
        // element: <FruitsOption />,
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
      // {
        // index: true,
      //   path: "/fruits",
      //   element: <FruitsOption />,
      // },
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
        // path: "orange",
        element: <Orange />,
      },
      {
        path: "orange",
        element: <Orange />,
      },
      {
        // index: true,
        path: "avocado",
        element: <Avocado />,
      },
    ],
  },
]);

export default router;
