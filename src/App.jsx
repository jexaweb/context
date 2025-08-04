import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayouts from "./layouts/Mainlayouts";
import Hoom from "./pages/Hoom";
import Abaut from "./pages/Abaut";
import Contact from "./pages/Contact";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts />,
      children: [
        {
          index: true,
          element: <Hoom />,
        },
        {
          path: "about",
          element: <Abaut />,
        },

        {
          path: "Contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
