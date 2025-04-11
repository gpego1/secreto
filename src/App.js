import React, { useState, useEffect } from 'react';
import SplashScreen from './components/pages/splash-screen/SplashScreen';
import ProdutosPage from './components/pages/ProdutosPage';
import './App.css';

function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {showSplash ? <SplashScreen /> : <ProdutosPage />}
        </div>
    );
}

export default App;