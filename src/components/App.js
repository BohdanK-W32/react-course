import React from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import SignUpForm from './SignUpForm/SignUpForm';

const App = () => (
  <div>
    <Counter init={1} />
    <Dropdown isOpen={false} />
    <SignUpForm />
  </div>
);

export default App;
