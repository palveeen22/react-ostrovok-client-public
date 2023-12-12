import { createBrowserRouter, redirect } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Products from "../Pages/Home/Products";
import Login from "../Components/Login";
import CardDetails from "../Pages/Home/Components/CardDetails";
// import Wishlist from "../Components/Wishlist";

const url = "http://localhost:3000";

const router = createBrowserRouter([
  //   {
  //     path: "/login",
  //     element: <Login url={url} />,
  //     loader: () => {
  //       if (localStorage.access_token) {
  //         Swal.fire({
  //           title: "Ngapain cuk?????",
  //           icon: "question",
  //         });
  //         return redirect("/");
  //       }

  //       return null;
  //     },
  //   },
  {
    element: <Homepage />,
    loader: () => {
      if (!localStorage.access_token) {
        Swal.fire({
          title: "login cuk!!",
          icon: "warning",
        });
        return redirect("/login");
      }

      return null;
    },
    children: [
      {
        path: "/",
        element: <Products url={url} />,
        children: [
          {
            path: "/product/:productId",
            element: <CardDetails url={url} />,
          },
        ],
      },
    ],
  },
]);
export default router;
