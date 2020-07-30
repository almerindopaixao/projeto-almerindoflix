import React from 'react';
import t from 'prop-types';
import { Input, FormFieldWrapper, Label } from './styled';

export default function FormField({ name, type, value, onChange, children }) {
  const formId = `id_${name}`;

  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={formId}>
        <Input
          as={tag}
          id={formId}
          name={name}
          onChange={onChange}
          value={value}
          type={type}
          hasValue={hasValue}
        />
        <Label.Text>{children}</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  value: t.string,
  onChange: t.func,
  name: t.string.isRequired,
  type: t.string,
  children: t.node.isRequired,
};
