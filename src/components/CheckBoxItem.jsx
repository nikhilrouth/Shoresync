import React from 'react';
import './CheckBoxItem.css'; // Import the CSS file

const CheckboxItem = ({ name, checked, onChange }) => {
  return (
    <div className="checkbox-item">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange(name)}
        />
        {name}
      </label>
    </div>
  );
};

export default CheckboxItem;
