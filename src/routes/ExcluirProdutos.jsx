import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../Components/ListaProdutos';
import styles from './Remove.module.css';

export default function ExcluirProdutos() {

  document.title = "Excluir Produtos";

  const { id } = useParams();

  const navigate = useNavigate();

  const produtoRecuperadoPorId = ListaProdutos.filter(item => item.id == id)[0];

  const handleDelete = () => {
    ListaProdutos.splice(ListaProdutos.indexOf(produtoRecuperadoPorId), 1);
    alert("Produto excluído com sucesso!");
    navigate("/produtos");
  };


  return (
    <div>
      <div>
        <h1>Excluir Produtos</h1>
        <div>
          <h2>Você tem certeza que deseja excluir o produto abaixo?</h2>
          <p>Nome do Produto : {produtoRecuperadoPorId.nome}</p>
          <p>Preço do Produto : {produtoRecuperadoPorId.preco}</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleDelete}>EXCLUIR</button>
          <button onClick={() => navigate("/produtos")}>CANCELAR</button>
        </div>
      </div>
    </div>
  );
}
