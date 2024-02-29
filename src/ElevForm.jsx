import React, { useState } from 'react';

const ElevForm = ({ addElev }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addElev({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Add Elev</button>
    </form>
  );
};

export default ElevForm;
