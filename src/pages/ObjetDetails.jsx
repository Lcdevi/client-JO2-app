import React, { Component } from 'react';
import "../styles/objectDetails.css"

class ObjetDetails extends Component {

    state = {
        item: this.props
    }

    render() {


        // console.log(this.state.item.location.state.item)
        console.log(this.state)

        return (
            <div className="object-details-container">
                <div className="details-img-div"><img src={this.state.item.location.state.item.imageDetails} alt=""/></div>
                <div className="details-img-div"><img src={this.state.item.location.state.item.imageDetails} alt=""/></div>
                <div className="details-img-div"><img src={this.state.item.location.state.item.imageDetails} alt=""/></div>
                <div className="details-img-div"><img src={this.state.item.location.state.item.imageDetails} alt=""/></div>
                <div className="details-img-div"><img src={this.state.item.location.state.item.imageDetails} alt=""/></div>
                <div className="details-img-div">infos {this.state.item.location.state.item.name}</div>
            </div>
        )
    }
}

export default ObjetDetails;