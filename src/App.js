import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Product';
import Reports from './pages/Reports';
import Login from './components/Login';
import ChatBot from './components/Chatbot';
import { AuthProvider } from './contexts/AuthContext';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  const promptToLogin = () => {
    setLoggedIn(false);
  };

  return (
    <AuthProvider>
    <BrowserRouter>
      {/* <Navbar /> */}
      {loggedIn ? <div>
        <Navbar userName={username} backToLogin={promptToLogin} />
      </div> : ''}
      <Routes>
        <Route exact path="/" element={<Login onLogin={handleLogin} />} />
        <Route path='/home' element={
          loggedIn ? <div>
            <Home />
          </div> : <Login />
        } />
        <Route path='/reports' element={
          loggedIn ? <div>
            <Reports />
          </div> : <Login />
        } />
        <Route path='/products' element={
          loggedIn ? <div>
            <Products />
          </div> : <Login />
        } />
         <Route path='/chatbot' element={
          loggedIn ? <div>
            <ChatBot />
          </div> : <Login />
        } />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;