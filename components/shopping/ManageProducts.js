import React, {Component} from "react"
import {connect} from "react-redux"

class ManageProducts extends Component {
    render() {
        //console.log("Product list >>>", this.props.products.length);
        let output =  null;
        if (this.props.mgProducts.length > 0) {
            output = this.props.mgProducts.map((product) => {
              return (<tr key={product.id}>
                       <td>{product.id}</td><td>{product.name}</td><td>{product.price}</td>
                       <td><button className="btn btn-danger" type="button" 
                       onClick={()=>this.handleDelete(product.id)}>Delete</button>&nbsp;
                       <button className="btn btn-success" type="button" 
                       onClick={()=>this.handleEdit(product)}>Edit</button>
                     </td>  
                  </tr>)
            })
        } else {
            output = <tr><td colSpan='4'>No products available</td></tr>;
        }
        return <div>
            <h3>manage products</h3>
            <form className="well">
              <input type="text" ref="pid" placeholder="Eneter product ID"/>&nbsp;
              <input type="text" ref="pname" placeholder="Eneter product Name"/>&nbsp;
              <input type="text" ref="price" placeholder="Eneter product price"/>&nbsp;
              <button className="btn btn-primary" type="button" onClick={this.handleAdd}>Add</button>&nbsp;
              <button className="btn btn-secondary" type="button" onClick={this.handleUpdate}>Update</button>
            </form>
            <table className="table table-bordered">
                <thead>
                  <tr>
                  <th>ID</th><th>Name</th><th>Price</th><th>Action</th>
                 </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>
         </div>
    }
    handleAdd = () => {
       let newProduct = {id: this.refs.pid.value , name:this.refs.pname.value, price:this.refs.price.value}
       this.props.addProduct(newProduct);
    }

    handleDelete = (id) => {
       this.props.deleteProduct(id)
    }

    handleEdit = (product) => {
        this.refs.pid.value = product.id;
        this.refs.pname.value = product.name;
        this.refs.price.value = product.price;
    }

    handleUpdate = () => {
        let updatedPrd = {
            id: this.refs.pid.value, name: this.refs.pname.value, price: this.refs.price.value 
        } 

        this.props.updateProduct(updatedPrd);

    }
}

function mapStateToProps(state){
    return {"mgProducts": state.productReducer};
}

function mapDispacthToProps(dispatch){
    return {
        addProduct: (newproduct) => {
            dispatch({type: "ADD_PRODUCT", payload: newproduct})
        },
        deleteProduct: (id) => {
          dispatch({type: "DELETE_PRODUCT", payload: id})
        },

        updateProduct: (updatedProduct) => {
            dispatch({type: "UPDATE_PRODUCT", payload: updatedProduct})
        }
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(ManageProducts)