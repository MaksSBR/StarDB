import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

  static defaultProps = {
      updateInterval:10000
  };

  static propTypes = {
    // Без библеотеки prop-Types
    // updateInterval: (props,propName,componentName) => {
    //   const value = props[propName];
    //   if (typeof value === 'number' && !isNaN(value)){
    //     return null;
    //   };
    //   return new TypeError (`${componentName}: ${propName} must be number`);
    // }
    updateInterval: PropTypes.number
  };

  state = {
    planet: {},
    loading: true,
    error: false,
    image: false
  };

  componentDidMount (){
    const { updateInterval } = this.props;

    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet,updateInterval);
  };

  componentWillUnmount(){
    clearInterval(this.interval);
  };

  onPlanetLoaded = (planet) => {
    this.setState ( {
      planet,
      loading: false ,
      image: this.props.getImageUrl(planet)
    } );
  };

  onError = (err)=> {
    this.setState ({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*25);

    this.setState ( {
      loading: true ,
      error: false,
    } );

      this.props.getData(id)
      .then (this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const   { planet,loading,error,image }=this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> :null;
    const content = hasData ? (
      <PlanetView planet={planet} image={image} />
    ) :null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  };
};



const PlanetView = ( props )=> {
  const   { name,population,rotationPeriod,diameter
  }=props.planet;
const { image } =props


  return (
    <React.Fragment>
        <img className="planet-image"
             src={image}
             alt="planet" />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
};
