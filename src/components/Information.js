import React from 'react'
import '../css/Information.css'
import { ReactComponent as MySvgComponent } from '../img/fondo1.svg'

const Information = props => {
    // console.log(MySvgCompo)
    return (
        <div className="info-primero animated fadeInDown">  
            <div className="info-segundo animated fadeInDown">
                <div className="info-tercero animated fadeInDown">
                    {/* <img src={fondo1} alt="fd-1" width="200px" style={{ color:'white'}}/> */}
                    {/* <MySvgComponent width="200px" /> */}
                </div>
                <div className="container" style={{ margin:'0px 0px 16px 0px' }}>
                    <h5 style={{ color: "#C8D2DB", margin:'0px' }}>{information[props.secc].sub}</h5>
                    <h2>{information[props.secc].titulo}</h2>
                </div>
            </div>
            <div className="container">
                <h5 style={{ margin:'8px 0px' }}>{information[props.secc].sub2}</h5>
                <p>{information[props.secc].info}</p>
                <p className="lead">{information[props.secc].descript}</p>
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
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com."
    },
    '1': {
        sub: "Home",
        titulo: "Segurity Home",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com."
    },
    '2': {
        sub: "Home",
        titulo: "Segurity Home",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com."
    },
    '3': {
        sub: "Home",
        titulo: "Segurity Home",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com."
    },
    '4': {
        sub: "Home",
        titulo: "Segurity Home",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com."
    },
    '5': {
        sub: "Home",
        titulo: "Segurity Home",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com."
    },
    '6': {
        sub: "Home",
        titulo: "Segurity Home",
        info: "Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.",
        sub2: 'information is assigned a value but never used',
        descript: "This project and everyone participating in it is governed by the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to callmeelton@gmail.com."
    }
}


export default Information;