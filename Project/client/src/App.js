import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AdminLogIn from "./pages/AdminLogIn";
import AdminProductManager from "./pages/AdminProductManager";
import AdminProductUpdate from "./pages/AdminProductUpdate";



// const Layout = () => {
//   return (
//     <div className="app">
//       <NavBar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };


// const router = createBrowserRouter([
//   {

//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/products/:id",
//         element: <Products />,
//       },
//       {
//         path: "/product/:id",
//         element: <Product />,
//       },
//       {
//         path: "/admin",
//         element: <AdminLogIn />,
//       },
//       // {

//       //   path: "/admin/manager",
//       //   element: <AdminProductManager />,
//       // },
//       // {
//       //   path: "/admin/update/:id",
//       //   element: <AdminProductUpdate />,
//       // },
//     ],
//   },
// ]);

// function App() {
//   const { admin } = useAuthContext()
//   return (
//     <>
//       <div>
//         <RouterProvider router={router} />
//       </div>
//       <div>

//         <BrowserRouter>
//           <Routes>
//             <Route path="/admin/manager" element={admin ? <AdminProductManager /> : <Navigate to="/" />} ></Route>
//             <Route path="/admin/update/:id" element={admin ? <AdminProductUpdate /> : <Navigate to="/" />} ></Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

function App() {
  const { admin } = useAuthContext()
  return (
    <>
      <BrowserRouter>

        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<AdminLogIn />}></Route>
          <Route path="/admin/manager" element={!admin ? <AdminProductManager /> : <Navigate to="/" />} ></Route>
          <Route path="/admin/update/:id" element={!admin ? <AdminProductUpdate /> : <Navigate to="/" />} ></Route>
        </Routes>


        <Footer></Footer>

      </BrowserRouter>

    </>
  );
}


export default App;
