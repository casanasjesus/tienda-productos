import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

const ListadoProductos = lazy(() => import("./pages/ListadoProductos"));

function App() {
  return (
    <Suspense fallback="Cargando pantalla...">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ListadoProductos />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
