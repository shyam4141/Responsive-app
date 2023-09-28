import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELETE_SELECTED_CONTACTS,
    SET_ROLE,
    FEEDBACK_SUBMIT,
  } from "../../constant/types";
  
  // Action
  export const setRole = (role) => {
    return {
      type: SET_ROLE,
      payload: role,
    };
  };

  export const setFeedback = (role) => {
    return {
      type: FEEDBACK_SUBMIT,
      payload: role,
    };
  };



  export const addContact = (contact) => {
    return {
      type: CREATE_CONTACT,
      payload: contact,
    };
  };
  
  // get a contact
  export const getcontact = (id) => ({
    type: GET_CONTACT,
    payload: id,
  });
  
  // contact action
  export const updatecontact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
  });
  
  // DELETE A CONTACT
  
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
  });
  
  // SELECT ALL CONTACT
  export const selectAllcontact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
  });
  
  // CLEAR SELECTED CONTACT
  
  export const clearAllcontact = () => ({
    type: CLEAR_CONTACT,
  });
  
  // DELETE ALL SELECTED CONTACT
  export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACTS,
  });
  
  // rxa :- This is a shotcur of action