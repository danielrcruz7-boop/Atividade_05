import React from 'react';
import './seuEstilo.css'; // O arquivo onde está o .defaultButton

export default function Button({ children, type = 'button', ...props }) {
  return (
        <button className="defaultButton" type={type} {...props}>
      {children}
    </button>
  );
}