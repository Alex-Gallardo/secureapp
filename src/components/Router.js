import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js'
import SlideView from './Slideview'
import Perfil from './Perfil.js'
import Information from './Information'
import Information2 from './Information2'

class Router extends Component {
    // colocar los datos del clima
    state = {}

    render() {
        return (
            <BrowserRouter basename='/secureapp/'>
                <Switch>
                    <Route exact path='/slide' component={SlideView}></Route>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/perfil' component={Perfil}></Route>
                    <Route exact path='/info/:infoId' render={(props) => {
                        // console.log('Props.', props)
                        let idclima = props.location.pathname.replace('/info/', '')
                        return (
                            <Information
                                secc={idclima}
                            />
                        )
                    }}></Route>
                    <Route exact path='/infoTwo/:infoId' render={(props) => {
                        // console.log('Props.', props)
                        let id = props.location.pathname.replace('/infoTwo/', '')
                        return (
                            <Information2
                                secc={id}
                            />
                        )
                    }}></Route>
                    {/* <Route exact path='/ambientes' component={Ambientes}></Route>
                    <Route exact path="/climas" component={Climas} />
                    <Route exact path='/perfil' render={(props) => {
                        return (
                            <Perfil
                                data={'123'}
                            />
                        )
                    }}></Route>
                    <Route exact path='/climas/:climaId' render={(props) => {
                        // console.log('Props.', props)
                        let idclima = props.location.pathname.replace('/climas/', '')
                        return (
                            <InfoClima
                                clima={this.state.clima[idclima]}
                            />
                        )
                    }}></Route>
                    <Route component={Error}></Route> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router