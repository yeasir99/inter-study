import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/signup';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <Header theme={theme} setTheme={setTheme} />
        <div className="px-2 min-h-[85vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/dashboard" element={<h1>dashboard</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
