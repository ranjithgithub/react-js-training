import React, {Component} from "react"
import {connect} from "react-redux"

class ProductList extends Component {
    render() {
        //console.log("Product list >>>", this.props.products.length);
        let output =  null;
        if (this.props.products.length > 0) {
            output = this.props.products.map((product) => {
              return (<tr key={product.id}>
                    <td>{product.name}</td><td>{product.price}</td>
                    <td><button className="btn btn-primary" onClick={() => this.props.addToCart(product)}>Add to cart</button>
                    </td>
                  </tr>)
            })
        } else {
            output = <tr><td colSpan='3'>No products available</td></tr>;
        }
        return <div>
            <h3>List of products</h3>
            <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th><th>Price</th><th>Action</th>
                 </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>
         </div>
    }
}

function mapStateToProps(state){
  return {"products": state.productReducer};
}

function mapDispacthToProps(dispatch){
  return {
      addToCart: (product) => {
          let orderedItem = {id: product.id, name: product.name , price: product.price, qty: 1}
          dispatch({type: "ADD_TO_CART", payload: orderedItem})
      }
  }
}

//Connecting react component productlist with redux
export default connect(mapStateToProps, mapDispacthToProps)(ProductList)
