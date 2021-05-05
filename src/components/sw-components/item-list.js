import React from 'react';

import ItemList from '../item-list';
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose,
} from '../hoc-helpers';


const renderNamePerson = ( {name,gender,birthYear} )=> (<span> {name} ({gender}, {birthYear}) </span>) ;
const renderName =  ({ name }) => ( <span> {name} </span> );
const renderModelAndName = ({ name,model }) => (<span> {name} ({model}) </span>);

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData:swapiService.getAllPeople
  };
};
const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData:swapiService.getAllPlanets
  };
};
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData:swapiService.getAllStarships
  };
};

// Первоначальный вариант когда в sw-сomp компануем все как вызов 1 функции
// const add =(a,b) => (a+b);
//
// const PersonList =  withSwapiService(
//                       withData(
//                         withChildFunction(ItemList,renderNamePerson)),
//                       mapPersonMethodsToProps);
// const PlanetList =  withSwapiService(
//                       withData(
//                         withChildFunction(ItemList, renderName)),
//                       mapPlanetsMethodsToProps);

// const StarshipList = withSwapiService(
//                         withData(
//                           withChildFunction(ItemList, renderModelAndName)),
//                         mapStarshipMethodsToProps);

//Второй вариант когда в sw-сomp компануем все как вызов  функции, которая принимает простые props, и затем вызывает безымянную функцию ,с сложными props
// const add =(a) => (b) => (a+b);
//
// const PersonList =  withSwapiService (mapPersonMethodsToProps) (
//                       withData(
//                         withChildFunction (renderNamePerson) (
//                           ItemList)));
// const PlanetList =  withSwapiService(mapPlanetsMethodsToProps)(
//                       withData(
//                         withChildFunction (renderName) (
//                           ItemList)));
// const StarshipList = withSwapiService (mapStarshipMethodsToProps) (
//                         withData(
//                           withChildFunction (renderModelAndName) (
//                             ItemList)));

// Третий вариант с помощью ф-н { compose }
// const compose =(...func) => (comp) => {
//   return func.reduceRight(
//     (prefResult,fn)=>( fn(prefResult) ),comp
//   );
// };
// вызываем compose b и передаем ей в качестве  массива параметров необходимые нам фанкции{...funct} в правильном порядке и вызываем другую функцию в которую передаем наш { comp }

const PersonList = compose (
  withSwapiService (mapPersonMethodsToProps),
  withData,
  withChildFunction (renderNamePerson)
)(ItemList)

const PlanetList = compose (
  withSwapiService (mapPlanetsMethodsToProps),
  withData,
  withChildFunction (renderName)
)(ItemList)

const StarshipList = compose (
  withSwapiService (mapStarshipMethodsToProps),
  withData,
  withChildFunction (renderModelAndName)
)(ItemList)

export {
  PersonList,
  PlanetList,
  StarshipList,
};
