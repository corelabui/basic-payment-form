import { Form, FormValues } from 'formfusion';

import Input from '../Input';
import Button from '../Button';

import logo from '/logo.svg';
import './main.css';

function Main() {
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split('T')[0];
  function onSubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <div className="container">
      <a href="https://www.corelabui.com" target="_blank" className="logo">
        <img src={logo} className="logo__img" alt="CorelabUI logo" />
      </a>
      <Form onSubmit={onSubmit} className="form">
        <Input
          id="name"
          name="name"
          type="alphabetic"
          label="Name on card"
          placeholder="Jane Doe"
          required
        />
        <Input
          id="credit-card-number"
          name="credit-card-number"
          type="credit-card-number-hyphen"
          label="Credit card number"
          placeholder="0000-0000-0000-0000"
          required
        />
        <div className="form__row">
          <div className="form__row__item">
            <Input
              id="expiration-date"
              name="expiration-date"
              type="date"
              label="Expiration date"
              placeholder="MM/YYYY"
              min={tomorrow}
              required
            />
          </div>
          <div className="form__row__item">
            <Input
              id="ccv"
              name="ccv"
              type="ccv"
              label="CCV"
              placeholder="123"
              required
            />
          </div>
        </div>
        <Button>Continue</Button>
      </Form>
    </div>
  );
}

export default Main;
