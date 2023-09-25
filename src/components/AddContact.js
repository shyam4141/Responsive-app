import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/contactAction";

// import shortid from "shortid";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const craeteContact = (e) => {
    e.preventDefault();
    const timestamp = new Date().getTime(); // Get the current timestamp in milliseconds
    const randomValue = Math.floor(Math.random() * 1000); // Generate a random number
    const uniqueId = `${timestamp}${randomValue}`;
    const new_contact = {
      id: uniqueId,
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(addContact(new_contact));
   navigate('/');
  };

  return (
    <div className="card border-0m  shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;