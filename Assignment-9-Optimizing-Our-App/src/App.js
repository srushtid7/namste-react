import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Instamart from "./components/instamart";
import Shimmer from "./components/Shimmer";

const AppLayout = () => {
  return (
    //JSX should have only one parent. and if you dont want to use extra div you should use react.fragment. Its empty tag <></>
    <React.Fragment>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </React.Fragment>
  );
};

const Instamart = lazy(() => 
  import("./components/Instamart") //this import will return promise which takes time to resolve, thus we use suspense to buy time for lazy loading component
);
//Upon on Demand loading => upon render => suspend loading from react as the code takes time for initial load

const About = lazy(()=>import("./components/About"));


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>,
        children: [
          {
            path: "profile", // parentpath/{path}=>localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
