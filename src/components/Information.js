import React from 'react'
import '../css/Information.css'
import { withRouter } from 'react-router-dom'
import { ReactComponent as BackComponent } from '../img/back.svg'

const Information = props => {
    const { history } = props
    return (
        <div className="info-primero animated fadeInDown">
            <div className="info-segundo animated fadeInDown" style={{backgroundColor: information[props.secc].back_color2}}>
                <div className="info-tercero animated slideInDown" style={{backgroundColor: information[props.secc].back_color}}>
                    {/* <img src={fondo1} alt="fd-1" width="200px" style={{ color:'white'}}/> */}
                    {/* <MySvgComponent width="200px" /> */}
                    <div className="container info-m">
                        <BackComponent style={{ margin: '8px 0px 28px 0px' }} width='22px' onClick={() => history.goBack()} />
                        <h5 style={{ color: "#C8D2DB", margin: '0px' }}>{information[props.secc].sub}</h5>
                        <h2 style={{ color: '#fff' }}>{information[props.secc].titulo}</h2>
                        <p style={{ color: '#fff' }}>{information[props.secc].info}</p>
                    </div>
                </div>
                <div className="container info-m">
                    <h5 style={{ margin: '8px 0px' }}>{information[props.secc].sub2}</h5>
                </div>
            </div>
            <div className="info-bott">
                <div className="container info-m">
                    <p className="lead">{information[props.secc].descript}</p>
                </div>
                <div className="info-bottoms">
                    <button className="btn btn-primary info-btn">Text</button>
                    <button className="btn btn-secondary info-btn">Text</button>
                </div>
            </div>
        </div>
    )
}

const information = {
    '0': {
        sub: "Home",
        titulo: "Segurity Home",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com.",
        back_color:"#2C600C",
        back_color2:"#8FE060"
    },
    '1': {
        sub: "Localizacion",
        titulo: "Geolocalizacion",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com.",
        back_color:"#A91225",
        back_color2:"#F2AEAE"
    },
    '2': {
        sub: "Datos",
        titulo: "Proteccion de datos",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com.",
        back_color:"#613C8B",
        back_color2:"#F1A3FF"
    },
    '3': {
        sub: "Conexion",
        titulo: "Conexion segura",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com.",
        back_color:"#BF9004",
        back_color2:"#F2EC91"
    }
}


export default withRouter(Information);