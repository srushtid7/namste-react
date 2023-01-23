import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    //JSX should have only one parent. and if you dont want to use extra div you should use react.fragment. Its empty tag <></>
    <React.Fragment>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
      
    ]
  },

  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
