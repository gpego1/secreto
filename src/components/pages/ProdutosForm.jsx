import React, { useState } from 'react';
import './styles/ProdutosForm.css';

const ProdutosForm = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        preco: '',
        categoria: '',
        estoque: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="produtos-form">
            <h2>Adicionar Produto</h2>

            <div className="form-group">
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Descrição:</label>
                <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Preço:</label>
                    <input
                        type="number"
                        name="preco"
                        value={formData.preco}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Estoque:</label>
                    <input
                        type="number"
                        name="estoque"
                        value={formData.estoque}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Categoria:</label>
                <select
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione...</option>
                    <option value="eletronicos">Eletrônicos</option>
                    <option value="vestuario">Vestuário</option>
                    <option value="alimentos">Alimentos</option>
                    <option value="moveis">Móveis</option>
                </select>
            </div>

            <div className="form-actions">
                <button type="button" onClick={onCancel} className="cancel-button">
                    Cancelar
                </button>
                <button type="submit" className="submit-button">
                    Adicionar
                </button>
            </div>
        </form>
    );
};

export default ProdutosForm;