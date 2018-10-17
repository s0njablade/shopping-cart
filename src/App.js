import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CartItems from './components/CartItems'
import Footer from './components/Footer'
import AddItem from './components/AddItem'

var inventory = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      copyrightYear: 2016,
      inventory: inventory,

      
    }
  }

  render() {
    const cartItems = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
    return (
      <div className="App">
          <Header />
          <CartItems cartItems={cartItems}/>
          <AddItem inventory={this.state.inventory} />
          <Footer copyrightYear={this.state.copyrightYear}/>
      </div>
    )
  }
}

export default App;


