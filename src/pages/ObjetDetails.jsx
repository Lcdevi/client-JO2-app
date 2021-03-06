import React, { Component } from 'react';
import "../styles/objectDetails.css";
import {Link} from 'react-router-dom';


class ObjetDetails extends Component {

    state = {
        item: this.props
    }

    render() {


        // console.log(this.state.item.location.state.item)
        console.log(this.state)
        return (
            <div className="object-details-container">
                <div className="clone">
                    <div className="details-infos-div">
                        <div className="title-price-wrapper">
                            <div className="title-price">
                                <h1>{this.state.item.location.state.item.name}</h1>
                                <h3>référence: {this.state.item.location.state.item.reference}</h3>
                            </div>
                            <div className="price">
                                {this.state.item.location.state.item.price} €
                            </div>
                        </div>
                        <div>
                            <div className="caracteristique">
                                <h2>caractéristiques</h2>
                            </div>
                            <p><span>diamètre</span> {this.state.item.location.state.item.diameter} </p>
                            <p><span>hauteur</span> {this.state.item.location.state.item.height} </p>
                            <p><span>matière</span> {this.state.item.location.state.item.matter} </p>
                        </div>
                        {this.state.item.location.state.item.dispo ?
                            <Link to="/contact">
                                <button>CONTACTEZ NOUS</button>
                            </Link> 
                            : 
                            <div className="vendu">VENDU</div>
                        }
                    </div>
                    <div className="details-img-div img-details-1"><img src={this.state.item.location.state.item.image} alt="tasse en porcelaine gravée"/></div>
                    <div className="details-img-div img-details-2"><img src={this.state.item.location.state.item.imageDetails2} alt="tasse en porcelaine gravée"/></div>
                    <div className="details-img-div img-details-3"><img src={this.state.item.location.state.item.imageDetails3} alt="tasse en porcelaine gravée"/></div>
                    <div className="details-img-div img-details-4"><img src={this.state.item.location.state.item.imageDetails4} alt="tasse en porcelaine gravée"/></div>
                    <div className="details-img-div img-details-5"><img src={this.state.item.location.state.item.imageDetails5} alt="tasse en porcelaine gravée"/></div>
                </div>

                <Link to={this.state.item.history.location.state.previousPath}>
                <button>retour</button>
                </Link>
            </div>
        )
    }
}

export default ObjetDetails;