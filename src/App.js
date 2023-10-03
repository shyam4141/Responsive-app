import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Products from './pages/Product';
import Reports from './pages/Reports';
import Login from './components/Login';
import ChatBot from './components/Chatbot';
import Swal from 'sweetalert2';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import FeedbackForm from './components/FeedbackForm';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  const promptToLogin = () => {
    Swal.fire({
      icon: 'question',
      title: 'Logging Out',
      text: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setLoggedIn(false);
          },
        });
      }
    });
  };

  return (

    <BrowserRouter>
      {/* <Navbar /> */}
      {loggedIn ? <div>
        <Navbar userName={username} backToLogin={promptToLogin} />
      </div> : ''}
      <Routes>
        <Route exact path="/" element={<Login onLogin={handleLogin} />} />
        <Route path='/contact' element={
          loggedIn ? <div>
            <Contacts />

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
        <Route path='/contacts/add' element={
          loggedIn ? <div>
            <AddContact />

          </div> : <Login />
        } />
        <Route path='/contacts/edit/:id' element={
          loggedIn ? <div>
            <EditContact />

          </div> : <Login />
        } />

        <Route path='/admin' element={
          loggedIn ? <div style={{ textAlign: 'center' }}>
            <h3 className='mt-3'>Admin page accessible only to admins</h3>
          </div> : <Login />
        } />
        <Route path='/guest' element={
          loggedIn ? <div style={{ textAlign: 'center' }}>
            <h3 className='mt-3'>Accessible to all</h3>
          </div> : <Login />
        } />
        <Route path='/chatbot' element={
          loggedIn ? <div>
            <ChatBot />
          </div> : <Login />
        } />
        <Route path='/feedback' element={
          loggedIn ? <div >
            <FeedbackForm />
          </div> : <Login />
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;