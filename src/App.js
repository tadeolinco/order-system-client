import React, { Component } from 'react';
import { getCustomers } from './api';
import MenuLayout from './features/Menu/MenuLayout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    (async () => {
      try {
        const response = await getCustomers();
        const customers = await response.json();
        console.log(customers);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  render() {
    return <MenuLayout />;
  }
}

export default App;
