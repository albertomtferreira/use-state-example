import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Ferreira');
  const [address, setAddress] = useState('London');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Alberto')}>Set Name to Alberto</button>
      <button onClick={() => setAddress('United Kingdom')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Alberto',
      address: 'United Kingdom'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Ferreira' })}>
          Set Name to Ferreira
        </button>
        <button onClick={this.setState({ address: 'London' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
