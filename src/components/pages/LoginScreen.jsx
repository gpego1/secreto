import React from 'react';
import './styles/LoginScreen.css';

const LoginScreen = ({ onLogin }) => {
    const handleLogin = (e) => {
        e.preventDefault();

        onLogin();
    };

    return (
        <div className="login-screen">
            <div className="login-content">
                <h1>Acesse o Sistema</h1>

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            type="tel"
                            id="telefone"
                            placeholder="(00) 00000-0000"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;