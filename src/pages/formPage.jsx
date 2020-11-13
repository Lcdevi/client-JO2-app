import React, { Component } from 'react'

class formPage extends Component {

    state = {
        categories: this.props.categories,
    }

    render() {

        console.log(this.state)
        return (
            <div>
                <h1>forme</h1>
            </div>
        )
    }
}

export default formPage