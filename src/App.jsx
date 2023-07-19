import Template from "./components/Layout/Template";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProductsIndex from "./components/Products/Index";
import NotFound from "./components/NotFound";
import SingleFlower from "./components/Products/SingleFlower";
import { productsLoader } from "./components/Products/Products";
import { singleProductLoader } from "./components/Products/SingleFlower";
//import Login from "./components/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Products from "./components/Products/Products";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsIndex />}>
          <Route index element={<Products />} loader={productsLoader} />
          <Route
            path=":fid"
            element={<SingleFlower />}
            loader={singleProductLoader}
          />
        </Route>
        {/*   <Route path="/login" element={<Login/>} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
