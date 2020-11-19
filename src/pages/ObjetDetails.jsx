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
                <div className="details-infos-div">
                    <div className="title-price-wrapper">
                        <div className="title-price">
                            <h1>{this.state.item.location.state.item.name}</h1>
                            <h2>référence: {this.state.item.location.state.item.reference}</h2>
                        </div>
                        <div className="price">
                            {this.state.item.location.state.item.price} €
                        </div>
                    </div>
                    <div>
                        <div className="caracteristique">
                            <h3>caractéristiques</h3>
                        </div>
                        <p><span>diamètre</span> {this.state.item.location.state.item.diameter} </p>
                        <p><span>hauteur</span> {this.state.item.location.state.item.height} </p>
                        <p><span>matière</span> {this.state.item.location.state.item.matter} </p>
                    </div>
                    <button>CONTACTEZ NOUS</button>
                </div>
            </div>
        )
    }
}

export default ObjetDetails;