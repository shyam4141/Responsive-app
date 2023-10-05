// src/App.js
import React, { useState } from 'react';
import MapDialog from './MapDialog';

function ViewMap() {
  const [showMapDialog, setShowMapDialog] = useState(false);

  const handleCloseMapDialog = () => setShowMapDialog(false);
  const handleShowMapDialog = () => setShowMapDialog(true);

  return (
    <div className="App">
      <header className="App-header mt-2">
        <h1>Google Maps Integration</h1>
        <button className="btn btn-primary" onClick={handleShowMapDialog}>
          Open Map
        </button>
      </header>
      <main>
        <MapDialog show={showMapDialog} handleClose={handleCloseMapDialog} />
      </main>
    </div>
  );
}

export default ViewMap;
