import React, { Component } from 'react';
import '../css/Navegation.css';
import perfil from '../img/perfil.svg'
import menu from '../img/menu.svg'
import { Link } from 'react-router-dom';

class Navegation extends Component {
    state = {}
    render() {
        return (
            <div className="nav-cont">
                <Link to="/perfil"><div className="nav-perfil">
                    <div className="nav-round"></div>
                    <div className="nav-round2 nav-rounded"></div>
                    <img src={perfil} className="nav-rounded" alt="perfil" width="42px" />
                </div></Link>

                <Link to="/slide"> <img src={menu} alt="perfil" width="32px" /> </Link>
            </div>
        );
    }
}

export default Navegation;