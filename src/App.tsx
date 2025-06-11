import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const ProductsList = lazy(() => import("@pages/products-list"));

function App() {
  return (
    <Suspense fallback="Cargando pantalla...">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsList />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
