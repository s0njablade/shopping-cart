import React, { Component } from 'react';

class AddItem extends Component {

    render() {
        const productList = this.props.inventory.map(
            product => {
                return (<option key={product.id} price={product.priceInCents} >{product.name} </option>)
            }
        )

        return (
            <div className="collection-item container">
                <div>
                    <h2>Grand Total</h2>
                    <p>$ {this.props.total}</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h2>Products</h2>
                        <select name="namePrice" onChange={this.props.grabItem} >{productList}</select>
                    </div>
                    <div className="col-4">
                        <h2>Quantity</h2>
                        <input name="quantity" onChange={this.props.grabItem} type="number"></input>
                    </div>

                </div>
                    <button onClick={this.props.submitButton} type= "button" className="btn btn-primary">Submit</button>
            </div>
        )
    }
}

export default AddItem;


