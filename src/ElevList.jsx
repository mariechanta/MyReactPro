import React from 'react';

const ElevList = ({ elever }) => {
  return (
    <div>
      <h2>Elever List</h2>
      <ul>
        {elever.map((elev, index) => (
          <li key={index}>{elev.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElevList;
