import { Outlet } from "react-router-dom";
// import './App.css';
import "./Components/Cabecalho";
import Cabecalho from "./Components/Cabecalho";

function App() {
  return (
    <>
      <Cabecalho teste="Teste" />
      <Outlet />
    </>
  );
}

export default App;
