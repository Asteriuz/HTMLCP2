import { ListaProdutos } from "../Components/ListaProdutos";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import  styles from "./Table.module.css";

export default function Produtos() {
  document.title = "Produtos";
  return (
    <>
      <h2>Produtos</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}>
                  <AiFillEdit />
                </Link>{" "}
                |{" "}
                <Link to={`/excluir/produtos/${produto.id}`}>
                  <AiFillDelete />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
