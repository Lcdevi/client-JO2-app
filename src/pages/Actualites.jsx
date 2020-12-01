import React from 'react'
import homeImage from '../images/img-home.JPG'

const Actualites = () => {
    return (
        <div>
            <div className="bottom-actualite-home">
                      <h1>actualités</h1>
                      <div className="actualite-bloc">
                          <div className="actualite-image">
                              <img src={homeImage} alt=""/>
                          </div>
                          <div className="actualite-text">
                              <h2>festival de Cannes</h2>
                              <br/>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem.</p>
                          </div>
                      </div>
                      <div className="actualite-bloc">
                          <div className="actualite-image">
                              <img src={homeImage} alt=""/>
                          </div>
                          <div className="actualite-text">
                              <h2>festival de Cannes</h2>
                              <br/>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem.</p>
                          </div>
                      </div>
                      <div className="actualite-bloc">
                          <div className="actualite-image">
                              <img src={homeImage} alt=""/>
                          </div>
                          <div className="actualite-text">
                              <h2>festival de Cannes</h2>
                              <br/>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem.</p>
                          </div>
                      </div>
                  </div>
        </div>
    )
}

export default Actualites
