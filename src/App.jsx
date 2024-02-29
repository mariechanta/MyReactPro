import React, { useState, useEffect } from 'react';
import ElevList from './ElevList';
import ElevForm from './ElevForm';

const ElevApp = () => {
  const [elever, setElever] = useState([]);

  useEffect(() => {
    // to use hook
  }, []);

  const addElev = (elev) => {
    setElever([...elever, elev]);
  };

  return (
    <div>
      <h1>Skola Eleverna närverande</h1>
      <ElevList elever={elever} />
      <ElevForm addElev={addElev} />
    </div>
  );
};

export default ElevApp;
