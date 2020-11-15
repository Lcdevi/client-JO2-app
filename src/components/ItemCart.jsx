import React, { Component } from 'react'

class ItemCart extends Component {

    state = {
        items: this.props.items,
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.items.map((item, index) => (
                <div>
                    <h4>nom : {item.name}</h4>
                </div>
                ))
                }
            </div>
        )
    }
}

export default ItemCart;