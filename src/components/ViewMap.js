// src/App.js
import React, { useState, useEffect } from 'react';
import MapDialog from './MapDialog';
import axios from 'axios';
import { useSelector } from "react-redux";

function ViewMap() {
  const [showMapDialog, setShowMapDialog] = useState(true);
  const lat = useSelector((state) => state.latitude);
  const lon = useSelector((state) => state.longitude);
  const [users, setUsers] = useState([]);

  const handleCloseMapDialog = () => setShowMapDialog(false);
  const handleShowMapDialog = () => setShowMapDialog(true);
  
 

  const handleFetchUsers= async()=>{
    console.log("button clicked");
    try {
      const response = await axios.get(`https://p1glxc42a8.execute-api.us-east-1.amazonaws.com/dev/api/nearest-users?latitude=${lat}&longitude=${lon}&maxDistance=4000`);
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="App">
      <header className="App-header mt-2">
      <button className="fetch-user-button" onClick={handleFetchUsers}>
            Fetch Users
          </button>
      <div>
       <p> Latitude : {lat}</p>
       <p> Longitude : {lon}</p>
         
        </div>
       
        {/* <button className="btn btn-primary" onClick={handleShowMapDialog}>
          Open Map
        </button> */}
      </header>
      <main>
        <MapDialog show={showMapDialog} handleClose={handleCloseMapDialog}/>
      </main>
      {users?.map((item)=>{
         return (
          <>
         <div>{item.username}</div>
         <div>{item.distance}</div>
         </>
         )
      })}
    </div>
  );
}

export default ViewMap;
