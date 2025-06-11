import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "@context";
import "./App.css";

const Layout = lazy(() => import("@components/layout"));
const ProductsList = lazy(() => import("@pages/products-list"));

function App() {
  return (
    <Suspense fallback="Cargando pantalla...">
      <BrowserRouter>
        <ProductsProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ProductsList />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
