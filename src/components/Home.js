import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chat from '../img/Chat.svg'
import '../css/Home.css'
import Navegation from './Navegation';
import business from '../img/business.svg';
import online from '../img/online.svg';
import mesajes from '../img/mesajes.svg';
import mapa from '../img/map.svg';
import financial from '../img/financial.svg';
import data from '../img/data.svg';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className='home-error'>
                <div className="container home-container">
                    <Navegation />
                    <h2>Secure<small class="text-muted">App</small></h2>
                    <p className="m-botop">added 1 package from 6 contributors and audited 931461 packages in 21.837s</p>
                    <Link to="/info/0"><div className="home-section m-botop animated fadeInRight">
                        <div className="home-parf">
                            <h3>Segurity Home</h3>
                            <p>Waiting for update</p>
                        </div>
                        <img src={chat} alt="Imagen" width="150px" />
                    </div></Link>
                    {/* <div className="home-space"></div> */}
                    <h2 >Para ti</h2>
                    <div className="home-options animated fadeInRight">
                        <ul className="home-ul">
                            <li className="home-li">
                                <Link to="/info/1"><div className="home-section m-botop2" style={{ background: "#F20F38" }}>
                                    <div className="home-parf" >
                                        <h3>Localizar</h3>
                                        <p>Ubicacion precisa</p>
                                    </div>
                                    <img src={mapa} alt="Imagen" width="150px" />
                                </div></Link>
                            </li>
                            <li className="home-li">
                                <Link to="/info/2"><div className="home-section m-botop2" style={{ background: "#5C5CFF" }}>
                                    <div className="home-parf">
                                        <h3>Robo de datos</h3>
                                        <p>Waiting for update</p>
                                    </div>
                                    <img src={data} alt="Imagen" width="100px" />
                                </div></Link>
                            </li>
                            <li className="home-li">
                                <Link to="/info/3"><div className="home-section m-botop2" style={{ background: "#FFD517" }}>
                                    <div className="home-parf">
                                        <h3>Conexion segura</h3>
                                        <p>Waiting for update</p>
                                    </div>
                                    <img src={financial} alt="Imagen" width="150px" />
                                </div></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home-footer">
                    <Link to="/infoTwo/1"><img src={mesajes} alt="bar-nav-img" width="32px" /></Link>
                    <Link to="/infoTwo/2"><img src={online} alt="bar-nav-img" width="32px" /></Link>
                    <Link to="/infoTwo/3"><img src={business} alt="bar-nav-img" width="32px" /></Link>
                </div>
            </div>
        );
    }
}

export default Home;