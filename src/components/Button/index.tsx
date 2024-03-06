import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './button.css';

function Button(
  props: Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'className'
  >
) {
  return (
    <button {...props} className="button button--primary">
      {props.children}
    </button>
  );
}

export default Button;
