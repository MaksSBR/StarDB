
export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async  (url) => {
      const res = await fetch( `${this._apiBase}${url}` );

      if (!res.ok){
        throw new Error (`Could not fetvh ${url} ,received ${res.status}`);
      };
      const body = await res.json();
      return body
    };

    getAllPeople = async () => {
      const res = await this.getResource (`/people/`);
      return res.results.map (this._transformPerson);
    };

    getPerson = async (id) => {
      const person = await this.getResource (`/people/${id}/`);
      return this._transformPerson(person);
    };

    getPlanetImage = async ({id}) => {
      return `${this._imageBase}/planets/${id}.jpg`
    }
    // getPlanetImage = async (id) => {
    //   return `${this._imageBase}/planets/${id}.jpg`
    // }
    //если передевать не item а item.id в компоненте item-details.js

    getPersonImage = async ({id}) => {
      return `${this._imageBase}/characters/${id}.jpg`
    }

    getStarshipImage = async ({id}) => {
      return `${this._imageBase}/starships/${id}.jpg`
    }

    getAllPlanets = async () => {
      const res = await this.getResource (`/planets/`);
      return res.results.map (this._transformPlanet);
    };

    getPlanet = async (id) => {
      const planet= await this.getResource (`/planets/${id}/`);
      return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
      const res = await this.getResource (`/Starships/`);
      return res.results.map (this._transdormStarship);
    };

    getStarship = async  (id) => {
      const starship = this.getResource (`/Starships/${id}/`);
      return this._transdormStarship(starship);
    };

    _extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
      return {
        id:this._extractId(planet),
        planetName: planet.name,
        population: planet.population,
        rotationPeriod:planet.rotation_period,
        diameter: planet.diameter
      };
    };

    _transdormStarship = (starship) => {
      return {
        id:this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
      };
    };

    _transformPerson = (person) => {
      return {
        id:this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
      };
    };
  };
