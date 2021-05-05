import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import { BrowserRouter as Router, Switch , Route ,Redirect} from 'react-router-dom';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import {
  SwapiServiceProvider,
} from '../swapi-service-context'

import Header from '../header';
import { SWRandomPlanet } from '../sw-components';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage
} from '../pages'
import {
  PlanetDetails,
  StarshipDetails} from '../sw-components';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new DummySwapiService (),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState( {
      isLoggedIn: true
    } )
  }

  onServiceChange = () => {
    this.setState ( ({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService ;
      console.log (swapiService, Service.name);
      return {
        swapiService: new Service()
      };
    });
  };

  componentDidCatch () {
    this.setState( {
      hasError:true,
    } );
  };

  render () {
    const { isLoggedIn } = this.state;

    if ( this.state.hasError ) {
      return <ErrorIndicator />
    };

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={ this.onServiceChange }/>
              <SWRandomPlanet />
              <Switch>
                <Route path='/' render= {()=> <h2>Welcome to STAR DB</h2> } exact />

                <Route path='/people/:id?' component= {PeoplePage}  />

                <Route path='/planets' component= {PlanetsPage} exact/>
                <Route  path="/planets/:id"
                        render= {({ match }) => {
                          const { id } = match.params;
                          return <PlanetDetails itemId={+id}/>
                        }} />

                <Route path='/starships' component= {StarshipsPage} exact />
                <Route  path='/starships/:id'
                        render= { ({ match }) =>{
                          const { id } = match.params;
                          return <StarshipDetails itemId={+id} />
                          }} />
                <Route
                  path= '/login'
                  render= {() => (
                    <LoginPage
                      isLoggedIn= {isLoggedIn}
                      onLogin= {this.onLogin} />
                  )} />
                <Route
                  path= '/secret'
                  render= {() => (
                    <SecretPage isLoggedIn= {isLoggedIn} />
                  )} />
                  {/* <Redirect to="/" /> */}
                  <Route render= {() =><h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};
