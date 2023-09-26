import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.css';

import Swal from 'sweetalert2';
import { setRole } from '../redux/actions/contactAction';
import { useDispatch } from "react-redux";


const Login = ({ onLogin }) => {

    const [name, setName] = useState('Sai');
    const [email, setEmail] = useState('sai@gmail.com');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
 
    const dispatch = useDispatch();
    const [roles, setRoles] = useState([
        {
            'roleName': 'Admin'
        },
        {
            'roleName': 'Guest'
        }
    ]);

    const navigate = useNavigate();


 

    useEffect(() => {
        dispatch(setRole('Admin'));
        navigate('/')
    }, [])

    const handleSelectChange = (event) => {
        // setSelectedValue(event.target.value);
        // setUserRole(event.target.value);
        dispatch(setRole(event.target.value));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate name and email
        let isValid = true;

        if (name.trim() === '') {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (isValid) {
            // Perform form submission logic
            if (name !== '' && email === 'sai@gmail.com') {
                // return <Navbar visible={ navVisible } show={ setNavVisible } />
                Swal.fire({
                    timer: 1500,
                    showConfirmButton: false,
                    willOpen: () => {
                      Swal.showLoading();
                    },
                    willClose: () => {
            
                      Swal.fire({
                        icon: 'success',
                        title: 'Successfully logged in!',
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    },
                  });
                onLogin(name);
                navigate('/contact');
            } else {
                Swal.fire({
                    timer: 1500,
                    showConfirmButton: false,
                    willOpen: () => {
                      Swal.showLoading();
                    },
                    willClose: () => {
                      Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Incorrect email or password.',
                        showConfirmButton: true,
                      });
                    },
                  });
            }
        }
    };

    const isValidEmail = (email) => {
        // Basic email validation regex pattern
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    return (
        <div className='login-container'>
            <h1 className='align-text-center'>LOGIN FORM</h1>
            <form className="myLoginForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${nameError ? 'is-invalid' : ''}`}
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <div className="invalid-feedback">{nameError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <label>Select Role</label>
                <select name="roles" id="roles" onChange={handleSelectChange}>
                    {roles.map((item) => {
                        return <option key={item.roleName} value={item.roleName}>{item.roleName}</option>
                    })}
                </select>
                <div className='align-text-center'>
                    <button type="submit" className="login-button">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Login;