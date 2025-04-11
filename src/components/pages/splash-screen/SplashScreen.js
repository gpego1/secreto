import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <div className="splash-content">
                <h1>Bem-vindo ao Sistema</h1>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            type="tel"
                            id="telefone"
                            placeholder="(00) 00000-0000"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <button type="button" className="login-button">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SplashScreen;