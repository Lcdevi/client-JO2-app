import React, { Component } from 'react'

class ItemCart extends Component {

    state = {
        items: this.props.items,
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>ITEM CART</h1>
                {this.state.items.map((item, index) => {
                     if(item.shape === "grand_bol") {
                        return (
                            <div key={index}>
                                <h4>nom : {item.name}</h4>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default ItemCart;