import React from "react";
// import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import * as IoIcons from 'react-icons/io';
import { Link } from "react-router-dom";
import { deleteContact } from "../redux/actions/contactAction";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  // Use de-structuring to simlify the code
  const { name, phone, email, id } = contact;

  return (
    <tr>
      <td>
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>

      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons" style={{marginRight:'10px'}}><IoIcons.IoMdCreate /></span>
        </Link>

        <Link to={""}>
          <span
            className="material-icons  text-danger"
            onClick={() => dispatch(deleteContact(id))}
          >
            <IoIcons.IoIosRemoveCircleOutline />
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Contact;