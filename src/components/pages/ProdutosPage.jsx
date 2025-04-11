import React, { useState } from 'react';
import Modal from './Modal';
import ProdutosForm from './ProdutosForm';
import './styles/ProdutosPage.css';

const ProdutosPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddProduct = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (formData) => {
        console.log('Dados do formulário:', formData);
        setIsModalOpen(false);
    };

    return (
        <div className="produtos-page">
            <div className="produtos-header">
                <h1>Produtos</h1>
                <button onClick={handleAddProduct} className="add-button">
                    Adicionar
                </button>
            </div>

            <div className="produtos-table-container">
                <table className="produtos-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Estoque</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Produto Exemplo</td>
                        <td>Descrição do produto exemplo</td>
                        <td>R$ 99,99</td>
                        <td>Eletrônicos</td>
                        <td>50</td>
                        <td>
                            <button className="edit-button">Editar</button>
                            <button className="delete-button">Excluir</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ProdutosForm onSubmit={handleSubmit} onCancel={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default ProdutosPage;