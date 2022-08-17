import React, { useState } from 'react';

const Edit = ({ handleSave }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleSave(value)}>Save</button>
    </div>
  );
};

export default Edit;
