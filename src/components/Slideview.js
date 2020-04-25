import React, { Component } from 'react';
import Slider from 'react-slick'
import '../css/Slideview.css';
import page1 from "../img/page1.svg"
import page2 from "../img/page2.svg"
import page3 from "../img/page3.svg"
import page1img from '../img/page1-img.svg'
import page2img from '../img/page2-img.svg'
import page3img from '../img/page3-img.svg'
import { Link } from 'react-router-dom';


class SlideView extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="slide-container">
                        <div className="slide-page container">
                            <div className="slide-cont-img">
                                <img src={page1} alt="Img 1" width="400px" />
                                <img src={page1img} className="slide-center-img" alt="Img 1.0" width="300px"/>
                            </div>
                            <div>
                                <p className="lead slide-text">
                                    Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide-page container">
                            <div className="slide-cont-img">
                                <img src={page2} alt="Img 1" width="430px" />
                                <img src={page2img} className="slide-center-img" alt="Img 1.0" width="300px"/>
                            </div>
                            <div>
                                <p className="lead slide-text">
                                    Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide-page container">
                            <div className="slide-cont-img">
                                <img src={page3} alt="Img 1" width="430px" />
                                <img src={page3img} className="slide-center-img" alt="Img 1.0" width="300px"/>
                            </div>
                            <div>
                                <p className="lead slide-text">
                                    Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia
                                </p>
                            </div>
                            <Link to="/"> <button className="btn btn-primary btn-lg btn-block">Empezar</button></Link>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SlideView;