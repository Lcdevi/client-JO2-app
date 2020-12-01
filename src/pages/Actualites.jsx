import React from 'react'
import homeImage from '../images/img-home.JPG'
import "../styles/actualites.css"

const Actualites = () => {
    return (
            <div className="bottom-actualite-home">
                      <h1>actualités</h1>
                      <div className="actualite-bloc">
                          <div className="actualite-image">
                              <img src={homeImage} alt=""/>
                          </div>
                          <div className="actualite-text">
                              <h2>décembre 2020</h2>
                              <h2>festival de Cannes</h2>
                              <br/>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga quas aliquam modi, suscipit nemo. Consequuntur, quas porro? Veniam, a?</p>
                              <br/>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, sit?</p>
                              <br/>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolorem a labore ad vel ea iste porro aut temporibus, atque veritatis dolores, blanditiis repellat cumque eos? Provident voluptatibus quaerat repellat veritatis! Earum, obcaecati illo minima perspiciatis eaque a assumenda illum, explicabo vero, molestiae quia? Necessitatibus beatae pariatur doloremque laboriosam reprehenderit, fuga officia hic blanditiis alias consequatur incidunt est laborum nemo.</p>
                          </div>
                      </div>
                      {/* <div className="actualite-bloc">
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
                      </div> */}
                  </div>
    )
}

export default Actualites
