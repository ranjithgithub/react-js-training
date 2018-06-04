import React, {Component} from "react"
import {connect} from "react-redux"

class CartItems extends Component {
    render() {
        let output =  null;
        if (this.props.cartItems.length > 0) {
            output = this.props.cartItems.map((cartItem) => {
              return (<tr key={cartItem.id}>
                    <td><button className="btn btn-danger btn-xs" onClick={() => this.props.removeItemFromCart(cartItem)}>X</button>{cartItem.name}</td><td>{cartItem.price}</td><td>{cartItem.qty}</td><td>{cartItem.price * cartItem.qty}</td>
                  </tr>)
            })
        } else {
            output = <tr><td colSpan='3'>No cart items available</td></tr>;
        }
        return <div>
            <h3>Cart items are <span className="label label-primary">{this.props.cartItems.length}</span></h3>
            <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th><th>Price</th><th>Quantity</th><th>Amount</th>
                 </tr>
                </thead>
                <tbody>
                   {output}
                   <tr>
                    <td colSpan='3'>Total Amount</td><td>{this.totalAmount()}</td>
                   </tr>
                </tbody>
            </table>
         </div>
    }

    totalAmount = () => {
        let total = 0;

        for(let e of this.props.cartItems){
            total += (e.price * e.qty)
        }

        return total;
    }  

}

function mapStateToProps(state){
    return {"cartItems": state.cartReducer};
}

function mapDispacthToProps(dispatch){
    return {
        removeItemFromCart: (cartItem) => {
            //let removedItem = {id: cartItem.id, name: cartItem.name , price: cartItem.price}
            dispatch({type: "REMOVE_FROM_CART", payload: cartItem})
        }
    }
  }


//Connecting react component CartItems with redux
export default connect(mapStateToProps, mapDispacthToProps)(CartItems)