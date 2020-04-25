import React, { Component } from 'react';
import chat from '../img/Chat.svg'
import '../css/Home.css'
import Navegation from './Navegation';

class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container home-container">
                    <Navegation />
                    <h2>SecureApp</h2>
                    <p className="m-botop">added 1 package from 6 contributors and audited 931461 packages in 21.837s</p>
                    <div className="home-section m-botop">
                        <div className="home-parf">
                            <h3>Segurity Home</h3>
                            <p>Waiting for update</p>
                        </div>
                        <img src={chat} alt="Imagen" width="150px" />
                    </div>
                <div className="home-space"></div>

                    <h2 className="m-botop">Para ti</h2>
                    <div className="home-options">
                        <ul className="home-ul">
                            <li className="home-li">
                                <div className="home-section m-riglef" style={{ background: "red" }}>
                                    <div className="home-parf" >
                                        <h3>Segurity Home</h3>
                                        <p>Waiting for update</p>
                                    </div>
                                    <img src={'#'} alt="Imagen" width="150px" />
                                </div>
                            </li>
                            <li className="home-li">
                                <div className="home-section m-riglef" style={{ background: "aqua" }}>
                                    <div className="home-parf">
                                        <h3>Segurity Home</h3>
                                        <p>Waiting for update</p>
                                    </div>
                                    <img src={'#'} alt="Imagen" width="150px" />
                                </div>
                            </li>
                            <li className="home-li">
                                <div className="home-section m-riglef" style={{ background: "gray" }}>
                                    <div className="home-parf">
                                        <h3>Segurity Home</h3>
                                        <p>Waiting for update</p>
                                    </div>
                                    <img src={'#'} alt="Imagen" width="150px" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home-footer">
                    <h1>A</h1>
                    <h1>B</h1>
                    <h1>C</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;