import React from 'react';
import Products from './Products/Products.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Products App!</h1>
        </header>
        <Products />
      </div>
    );
  }
}

export default App;
