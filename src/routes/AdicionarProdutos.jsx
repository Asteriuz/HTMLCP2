import React from 'react';
import { ListaProdutos } from '../Components/ListaProdutos';
import { useNavigate } from 'react-router-dom';
import styles from './Forms.css';

export default function AdicionarProdutos() {

    document.title = "Adicionar Produtos";

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoProduto = {
            id: ListaProdutos.length + 1,
            nome: event.target.nome.value,
            preco: event.target.preco.value
        };
        ListaProdutos.push(novoProduto);
        navigate("/produtos");
    };



    return (
        <>
            <h2>Adicionar Produtos</h2>
            <form id="form-task" onSubmit={handleSubmit}>
                <div className="input">
                    <input className='input-field' type="text" name="nome" id="nome" required />
                    <label className='input-label' htmlFor="nome">Nome</label>
                </div>
                <div className="input">
                    <input className='input-field' type="number" name="preco" id="preco" required />
                    <label className='input-label' htmlFor="preco">Preço</label>
                </div>
                <div className="action">
                    <button type="submit">Adicionar</button>
                </div>
            </form>
        </>
    );
}
