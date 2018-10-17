import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        return (
            <div className="collection-item">
                <div className="row">
                    <div className="col-md-8">{this.props.item.product.name}</div>
                    <div className="col-md-2">{this.props.item.product.priceInCents}</div>
                    <div className="col-md-2">{this.props.item.quantity}</div>
                </div>
            </div>
        )
    }
}

export default CartItem;