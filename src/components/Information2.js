import React from 'react';
import '../css/Information2.css'
import { withRouter } from 'react-router-dom'
import { ReactComponent as BackComponent } from '../img/back.svg'

const Information2 = props => {
    const { history } = props
    return (
        <div className="infoTwo-primero" >
            <div className="infoTwo-cont-primero container">
                <BackComponent style={{ margin: '8px 0px 28px 0px' }} width='22px' onClick={() => history.goBack()} />
                <h1>Security World</h1>
                <p>Note that the development build is not optimized. <br />To create a production build, use npm run build.</p>
                <div className="infoTwo-bottoms">
                    <button className="btn btn-primary">start</button>
                    <button className="btn btn-danger">end</button>
                </div>
                <img src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png" width="150px" style={{ marginTop:"16px"}}/>
            </div>
            <div className="infoTwo-segundo animated fadeInUp">
                <div className="infoTwo-cont-segundo container">
                    <h2>Data <small style={{ color: "#fff" }}>Information</small></h2>
                </div>
                <div className="infoTwo-tercero container animated slideInUp">
                    <h2 style={{textAlign:"center"}}>Data <small>Sections</small></h2>
                    <p>Note that the development build is not optimized. To create a production build, use npm run build.      </p>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Information2)