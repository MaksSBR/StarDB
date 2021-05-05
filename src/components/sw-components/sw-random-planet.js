// import React from 'react';

import RandomPlanet from '../random-planet';

import {
  withSwapiService,
} from '../hoc-helpers';

const mapMethodsToPlanet = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}
const SWRandomPlanet = withSwapiService (mapMethodsToPlanet) (
  RandomPlanet);

export {
  SWRandomPlanet
};
