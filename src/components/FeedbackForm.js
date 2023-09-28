import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { setFeedback } from '../redux/actions/contactAction';
import Swal from 'sweetalert2';

const FeedbackForm = () => {
const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFeedback(formData));
    Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {

          Swal.fire({
            icon: 'success',
            title: 'Feedback submitted successfully..',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    console.log('Form submitted:', formData);
   
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5 myfeedbackForm">
      <h2 className="mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
