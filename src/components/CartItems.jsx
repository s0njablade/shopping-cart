import React, { Component } from 'react';
import CartItem from './CartItem'

class CartItems extends Component {

    render() {
        // const inventory = []
        // for (let i = 0; i < this.props.cartItems.length;i++){
        //     inventory.push(<CartItem key= {i}item={this.props.cartItems[i]}/>)
        // }

        return (
            <div>
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    {this.props.cartItems.map(item => <CartItem 
                    name={item.product.name} 
                    price={((item.product.priceInCents)/100).toFixed(2)}
                    quantity={item.quantity} 
                    />)}
                </div>
            </div>
            </div>
            
        )
    }
}

export default CartItems;


