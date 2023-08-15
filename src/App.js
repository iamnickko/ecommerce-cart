import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RootLayout from "./UI/RootLayout";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import { loader as productLoader } from "./components/product/ProductList";
import ProductDetails, {
  loader as productDetailsLoader,
} from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import AuthPage from "./Pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: productLoader },
      { path: "about", element: <About /> },
      {
        path: "/product/:id",
        id: "product-details",
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
      { path: "cart", element: <CartPage /> },
      {path: 'auth', element: <AuthPage />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
