import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';

// BLOCO DE ROTAS

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditarProdutos from "./routes/EditarProdutos.jsx";
import Home from "./routes/Home.jsx";
import Produtos from "./routes/Produtos.jsx";
import ExcluirProdutos from "./routes/ExcluirProdutos.jsx";
import AdicionarProdutos from "./routes/AdicionarProdutos.jsx";
import Error404 from "./routes/Error404.jsx";

// Criando o objeto de rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/editar/produtos/:id", element: <EditarProdutos /> },
      { path: "/excluir/produtos/:id", element: <ExcluirProdutos /> },
      { path: "/adicionar/produtos", element: <AdicionarProdutos /> },
    ],
  },
]);

// BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
