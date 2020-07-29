import React from 'react';
import t from 'prop-types';

export default function FormField({ name, type, value, onChange, children }) {
  return (
    <div>
      <label htmlFor={name}>
        {children}
        {type !== 'textarea' ? (
          <input name={name} onChange={onChange} value={value} type={type} />
        ) : (
          <textarea name={name} onChange={onChange} value={value} />
        )}
      </label>
    </div>
  );
}

FormField.propTypes = {
  value: t.string.isRequired,
  onChange: t.func.isRequired,
  name: t.string.isRequired,
  type: t.string.isRequired,
  children: t.node.isRequired,
};
