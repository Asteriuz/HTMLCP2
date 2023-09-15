import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Recuperando o ID com o HOOK useParams()
  const { id } = useParams();

  const navigate = useNavigate();

  // const produtoRecuperadoPorId = ListaProdutos.filter((produto)=>{
  //   if(produto.id == parseInt(id)){
  //           return produto;
  //       }
  //     });

  const produtoRecuperadoPorId = ListaProdutos.filter(item => item.id == id)[0];

  const [produto, setProduto] = useState(produtoRecuperadoPorId);

  const handleChangeProduto = (event) => {
    const novoProduto = { ...produto, [event.target.name]: event.target.value };
    setProduto(novoProduto);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ListaProdutos.splice(ListaProdutos.indexOf(produtoRecuperadoPorId), 1, produto);
    navigate("/produtos");
  };

  return (
    <>
      <h1>EditarProdutos</h1>
      <div>
        <form id="form-task" onSubmit={handleSubmit}>
          <div>
            <input type="hidden" name="id" />
          </div>
          <div className="input">
            <input className='input-field' type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChangeProduto} required />
            <label className='input-label' htmlFor="idNome">Nome</label>
          </div>
          <div className="input">
            <input className='input-field' type="number" name="preco" id="idPreco" value={produto.preco} onChange={handleChangeProduto} required />
            <label className='input-label' htmlFor="idPreco">Preço</label>
          </div>
          <div className="action">
            <button type="submit">EDITAR</button>
          </div>
        </form>
      </div>
    </>


  );
}
