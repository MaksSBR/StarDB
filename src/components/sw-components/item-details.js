import React from 'react';

import ItemDetails,{ Record } from '../item-details';
import {
  withDetails,
  withSwapiService,
  withChildFunction,
  compose,
 } from '../hoc-helpers';


const renderlabelPersons =  ()=> {
  return ([
    <Record  field='gender' label='Gender'/>,
    <Record  field='birthYear' label='Birth Year'/>,
    <Record  field='eyeColor' label='Eye Color'/>
  ])
};
const renderlabelPlanets =  ()=> {
  return (
   [
      <Record  field='population' label='Population'/>,
      <Record  field='rotationPeriod' label='Rotation Period'/>,
      <Record  field='diameter' label='Diameter'/>,
   ]
  )
};
const renderlabelStarships =  ()=> {
  return (
    [
    <Record  field='model' label='Model'/>,
    <Record  field='manufacturer' label='Manufacturer'/>,
    <Record  field='costInCredits' label='Cost'/>,
    <Record  field='length' label='Length'/>,
    <Record  field='crew' label='Crew'/>,
    <Record  field='passengers' label='Passengers'/>,
    <Record  field='cargoCapacity' label='Cargo Capacity'/>,
    ]
  )
};

const mapMethodsToPropsPerson = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};
const mapMethodsToPropsPlanet = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};
const mapMethodsToPropsStarship = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};


const PersonDetails = compose(
  withSwapiService(mapMethodsToPropsPerson),
  withDetails,
  withChildFunction (renderlabelPersons)
)(ItemDetails);

const PlanetDetails = compose(
  withSwapiService (mapMethodsToPropsPlanet),
  withDetails,
  withChildFunction (renderlabelPlanets)
)(ItemDetails);

const StarshipDetails = compose (
  withSwapiService (mapMethodsToPropsStarship),
  withDetails,
  withChildFunction (renderlabelStarships),
)(ItemDetails)

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
