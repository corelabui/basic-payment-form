import { Input as FInput, InputProps } from 'formfusion';
import './input.css';

function Input(props: InputProps) {
  return (
    <FInput
      {...props}
      classes={{
        field: 'input-field',
        label: 'input-field__label',
        error: 'input-field__error',
      }}
    />
  );
}

export default Input;
