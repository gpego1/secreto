import React, { useState } from 'react';
import SplashScreen from './components/pages/splash-screen/SplashScreen';
import LoginScreen from './components/pages/LoginScreen';
import ProdutosPage from './components/pages/ProdutosPage';
import './App.css';

function App() {
    const [showSplash, setShowSplash] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Mostra o SplashScreen
        setShowSplash(true);


        setTimeout(() => {
            setIsLoggedIn(true);
            setShowSplash(false);
        }, 3000);
    };

    return (
        <div className="app-container">
            {!isLoggedIn && !showSplash ? (
                <LoginScreen onLogin={handleLogin} />
            ) : showSplash ? (
                <SplashScreen />
            ) : (
                <ProdutosPage />
            )}
        </div>
    );
}

export default App;