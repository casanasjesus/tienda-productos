import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const ListadoProductos = lazy(() => import("./pages/ListadoProductos"));

function App() {
  return (
    <Suspense fallback="Cargando pantalla...">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListadoProductos />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
