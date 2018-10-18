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
      namePrice:'',
      quantity: 0, 
      cart:[], 
      total: 0
    }
  }


grabItem = (e) => {
  this.setState({[e.target.name]: e.target.value});
  
}

submitButton = (e) => {
  e.preventDefault()
  const namePrice = this.state.namePrice
  const quantity = this.state.quantity
  const items = this.state.inventory
  let filtered = items.filter (item => item.name === namePrice)
  let newItem =  {
    product: {
      id: filtered[0].id,
      name: filtered[0].name,
      priceInCents: filtered[0].priceInCents
    },
    quantity: quantity
  }
  let cart = this.state.cart 
  this.setState({cart:[...cart, newItem]})
  
let total = this.state.total

let amountAddedToCart = (((newItem.product.priceInCents)/100).toFixed(2)*this.state.quantity)
this.setState({total: (total+amountAddedToCart)})

}


  render() {
    
    console.log(this.state.cart)

    return (
      <div className="App">
          <Header />
          <CartItems cartItems={this.state.cart}/>
          <AddItem inventory={this.state.inventory} grabItem={this.grabItem} submitButton={this.submitButton} total={this.state.total}/>
          <Footer copyrightYear={this.state.copyrightYear}/>
      </div>
    )
  }
}

export default App;


