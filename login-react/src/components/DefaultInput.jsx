import React from 'react';
import './SeuArquivoDeEstilos.css'; // Importe o arquivo onde está o .defaultButton

export default function Input({ children, type = 'Input', ...rest }) {
  return (
    <button className="defaultInput" type={type} {...rest}>
      {children}
    </button>
  );
}