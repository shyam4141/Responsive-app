import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontact, updatecontact } from "../redux/actions/contactAction";

// import shortid from "shortid";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(getcontact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    // const update_contact = Object.assign(contact, {
    //   name: name,
    //   phone: phone,
    //   email: email,
    // });
    const update_contact = {
        id:id,
        name: name,
        phone: phone,
        email: email,
      };
    dispatch(updatecontact(update_contact));
   navigate('/contact');
  };

  return (
    <div className="card border-0m mt-3 shadow" style={{position:'revert'}}>
      <div className="card-header">Update a contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
          <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
          <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning mt-2" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;