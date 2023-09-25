import React from "react";
// import Avatar from "react-avatar";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { deleteContact } from "../redux/actions/contactAction";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  // Use de-structuring to simlify the code
  const { name, phone, email, id } = contact;

  return (
    <tr>
      <td>
        <div className="custom-control custum-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
            readOnly={true}
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>

      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons" style={{marginRight:'10px'}}>edit</span>
        </Link>

        <Link to={""}>
          <span
            className="material-icons  text-danger"
            onClick={() => dispatch(deleteContact(id))}
          >
            remove
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Contact;