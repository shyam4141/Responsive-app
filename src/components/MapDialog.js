// src/components/MapDialog.js
import React, {useEffect, useRef} from 'react';
import Map from './Map';
import './map.css';

function MapDialog({ show, handleClose }) {

    const modalRef = useRef(null);

    // useEffect(() => {
    //     // Add a click event listener to the document body
    //     const handleOutsideClick = (event) => {
    //       if (modalRef.current && !modalRef.current.contains(event.target)) {
    //         handleClose();
    //       }
    //     };
    
    //     if (show) {
    //       document.body.addEventListener('click', handleOutsideClick);
    //     }
    
    //     return () => {
    //       // Remove the click event listener when the component unmounts
    //       document.body.removeEventListener('click', handleOutsideClick);
    //     };
    //   }, [show, handleClose]);



  return (
    <div
      className={`modal fade custom-dialog ${show ? 'show' : ''}`}
      style={{ display: show ? 'block' : 'none' }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-lg" ref={modalRef} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Google Map</h5>
            <button
              type="button"
              className="close map_close_btn"
              onClick={handleClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Map center={{ lat: 40.7484, lng: -73.9857 }}
              height="300px"
              zoom={15}/>
          </div>
          {/* Add other modal components or buttons as needed */}
        </div>
      </div>
    </div>
  );
}

export default MapDialog;
