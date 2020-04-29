import React from 'react';
import '../css/Perfil.css'
import perfil from '../img/perfil.svg'
import back from '../img/back.svg'
import { withRouter } from 'react-router-dom'

const Perfil = props => {
    const { history } = props
    return (
        <div className="perfil-container">
            <div className="perfil-nav container">
                <img src={back} alt="back" width='24px' onClick={() => history.goBack()} />
            </div>
            <div className="perfil-info container animated slideInUp fast">
                <div className="perfil-perfil">
                    <img src={perfil} className="perfil-img animated fadeIn delay-1s" alt="perfil" width="60px" />
                    <h3>Alex Gallardo CTO</h3>
                    <p className="lead">Guatemala, city</p>
                    <div className="perfil-ins">Premiun</div>
                </div>
                <p className="perfil-text">A cookie associated with a cross-site resource at http://cloudflare.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`.</p>
                <h2>Skill</h2>
                <div className="perfil-skill">
                    <div className="perfil-min"></div>
                    <div className="perfil-min"></div>
                    <div className="perfil-min"></div>
                    <div className="perfil-min"></div>
                    <div className="perfil-min"></div>
                    <div className="perfil-min"></div>
                    <div className="perfil-min"></div>
                </div>
                <div className="perfil-budget">
                    <div className="perfil-min">Complete</div>
                    <h3>$ 9.99</h3>
                    <div className="perfil-round">
                        <p className="lead">Buy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Perfil);