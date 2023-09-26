import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";

import {
  selectAllcontact,
  clearAllcontact,
  deleteAllContact,
} from "../redux/actions/contactAction";

const Contacts = () => {
  const dispatch = useDispatch();
  const [selectAll, setselectAll] = useState(false);
  const contacts = useSelector((state) => state.contacts);
  // This state reprent hole data
  const allContacts = useSelector(
    (state) => state.contacts
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllcontact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllcontact());
    }
  }, [selectAll]);

  return (
    <div className="mt-3 table-responsive">
      {allContacts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContact())}
        >
          Delete all
        </button>
      ) : null}
      <table className="table table-shadow">
        <thead className="bg-danger text-white ">
          <tr>
            <th className="col-2">Name</th>
            <th className="col-4">Phone</th>
            <th className="col-2">E-mail</th>
            <th className="col-3">Actions</th>
          </tr>
        </thead>
        <tbody>
        <>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </>
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;

//useSelector:- we access the data

// HOF:- function bhitre r gote function ginta ki data ne c ru return kar si
// jin variabke re data store he che se to map fonction use kali