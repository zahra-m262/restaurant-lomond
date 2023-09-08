import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import NotFound from "./components/NotFound.jsx";
import { store } from "./store/index.js";

import "./main.scss";
import { ToastContainer } from "react-toastify";
import Menu from "./components/Menu.jsx";
import Gallery from "./components/Gallery.jsx";
import MainLayout from "./components/layout/MainLayOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/cart",
    element: <Menu />,
  },
  {
    path: "/gallery",
    element: (
      <MainLayout>
        <Gallery />,
      </MainLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ToastContainer />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
