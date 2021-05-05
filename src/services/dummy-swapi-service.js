export default class DummySwapiService {

  _imageBase = 'https://starwars-visualguide.com/assets/img';

  _people = [
    {
      id: 1,
      name: 'Luke Skywalker [TEST DATA]',
      gender: 'male',
      birthYear: '19BBY',
      eyeColor: 'blue'
    },
    {
      id: 2,
      name: 'C-3PO [TEST DATA]',
      gender: 'male',
      birthYear: '112BBY',
      eyeColor: 'yellow'
    },
    {
      id: 3,
      name: 'R2-D2 [TEST DATA]',
      gender: 'n/a',
      birthYear: '33BBY',
      eyeColor: 'n/a'
    },
    {
      id: 4,
      name: 'Darth Vader [TEST DATA]',
      gender: 'male',
      birthYear: '41.9BBY',
      eyeColor: 'Yellow'
    },
    {
      id: 5,
      name: 'Leia Organa [TEST DATA]',
      gender: 'Female',
      birthYear: '19BBY',
      eyeColor: 'Brown'
    },
    {
      id: 10,
      name: 'Obi-Wan Kenobi [TEST DATA]',
      gender: 'male',
      birthYear: '57BBY',
      eyeColor: 'Blue'
    },
    {
      id: 11,
      name: 'Anakin Skywalker [TEST DATA]',
      gender: 'male',
      birthYear: '41.9BBY',
      eyeColor: 'Blue'
    },
    {
      id: 13,
      name: 'Chewbacca [TEST DATA]',
      gender: 'male',
      birthYear: '200BBY',
      eyeColor: 'Blue'
    },
    {
      id: 14,
      name: 'Han Solo [TEST DATA]',
      gender: 'male',
      birthYear: '29BBY',
      eyeColor: 'Brown'
    },
    {
      id: 20,
      name: 'Yoda [TEST DATA]',
      gender: 'male',
      birthYear: '896BBY',
      eyeColor: 'Green'
    },
    {
      id: 21,
      name: 'Palpatine [TEST DATA]',
      gender: 'male',
      birthYear: '82BBY',
      eyeColor: 'Yellow'
    },
    {
      id: 22,
      name: 'Boba Fett [TEST DATA]',
      gender: 'male',
      birthYear: '31.5BBY',
      eyeColor: 'Brown'
    },
    {
      id: 25,
      name: 'Lando Calrissian [TEST DATA]',
      gender: 'male',
      birthYear: '31BBY',
      eyeColor: 'Brown'
    },
    {
      id: 30,
      name: 'Wicket Systri Warrick [TEST DATA]',
      gender: 'male',
      birthYear: '8BBY',
      eyeColor: 'Brown'
    },
    {
      id: 32,
      name: 'Qui-Gon Jinn [TEST DATA]',
      gender: 'male',
      birthYear: '92BBY',
      eyeColor: 'Blue'
    },
    {
      id: 35,
      name: 'Padmé Amidala [TEST DATA]',
      gender: 'Female',
      birthYear: '46BBY',
      eyeColor: 'Brown'
    },
    {
      id: 36,
      name: 'Jar Jar Binks [TEST DATA]',
      gender: 'male',
      birthYear: '52BBY',
      eyeColor: 'Yellow'
    },
    {
      id: 44,
      name: 'Darth Maul [TEST DATA]',
      gender: 'male',
      birthYear: '54BBY',
      eyeColor: 'Red-Yellow'
    },
    {
      id: 51,
      name: 'Mace Windu [TEST DATA]',
      gender: 'male',
      birthYear: '72BBY',
      eyeColor: 'Brown'
    }

  ];

  _planets = [
    {
      id: 2,
      name: 'Alderaan [TEST DATA]',
      population: '2,000,000,000',
      rotationPeriod: '24 days',
      diameter: '12,500 km'
    },
    {
      id: 4,
      name: 'Hoth [TEST DATA]',
      population: 'Unknown',
      rotationPeriod: '23 days',
      diameter: '7,200 km'
    },
    {
      id: 3,
      name: 'Yavin IV [TEST DATA]',
      population: '1,000',
      rotationPeriod: '24 days',
      diameter: '10,200 km'
    },

    {
      id: 8,
      name: 'Naboo [TEST DATA]',
      population: '4,500,000,000',
      rotationPeriod: '26 days',
      diameter: '12,120 km'
    },
    {
      id: 9,
      name: 'Coruscant [TEST DATA]',
      population: '1,000,000,000,000',
      rotationPeriod: '24 days',
      diameter: '12,240 km'
    },
    {
      id: 11,
      name: 'Geonosis [TEST DATA]',
      population: '100,000,000,000',
      rotationPeriod: '30 days',
      diameter: '11,370 km'
    },
    {
      id: 14,
      name: 'Kashyyyk [TEST DATA]',
      population: '45,000,000',
      rotationPeriod: '26 days',
      diameter: '12,756 km'
    }
  ];

  _starships = [
    {
      id: 10,
      name: 'Millennium Falcon [TEST DATA]',
      model: 'YT-1300 light freighter',
      manufacturer: 'Corellian Engineering Corporation',
      costInCredits: '100,000 credits',
      length: '34.37 m',
      crew: '4',
      passengers: '6',
      cargoCapacity: '100 metric tons'
    },
    {
      id: 9,
      name: 'Death Star [TEST DATA]',
      model: 'DS-1 Orbital Battle Station',
      manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
      costInCredits: '1,000,000,000,000 credits',
      length: '120,000 m',
      crew: 'n/a',
      passengers: 'n/a',
      cargoCapacity: '1,000,000,000 metric tons'
    },
    {
      id: 12,
      name: 'X-wing [TEST DATA]',
      model: 'T-65 X-wing',
      manufacturer: 'Incom Corporation',
      costInCredits: '149,999 credits',
      length: ' 12.5 m',
      crew: '1',
      passengers: '0',
      cargoCapacity: '110kg'
    },
    {
      id: 13,
      name: 'TIE Advanced x1 [TEST DATA]',
      model: 'Twin Ion Engine Advanced x1',
      manufacturer: ' Sienar Fleet Systems',
      costInCredits: 'Unknown',
      length: '9.2 m',
      crew: '1',
      passengers: '0',
      cargoCapacity: '150kg'
    },
    {
      id: 15,
      name: 'Executor [TEST DATA]',
      model: 'Executor-class star dreadnought',
      manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
      costInCredits: '1,143,350,000 credits',
      length: '19,000 m',
      crew: '1,000',
      passengers: '38,000',
      cargoCapacity: '250,000 metric tons'
    },
    {
      id: 21,
      name: 'Slave 1 [TEST DATA]',
      model: 'Firespray-31-class patrol and attack',
      manufacturer: 'Kuat Systems Engineering',
      costInCredits: 'Unknown',
      length: '21.5 m',
      crew: '1',
      passengers: '6',
      cargoCapacity: '70 metric tons'
    },
    {
      id: 22,
      name: 'Imperial shuttle [TEST DATA]',
      model: 'Lambda-class T-4a shuttle',
      manufacturer: 'Sienar Fleet Systems',
      costInCredits: '240,000credits',
      length: '20 m',
      crew: '6',
      passengers: '20',
      cargoCapacity: '80 metric tons'
    },
    {
      id: 40,
      name: 'Naboo Royal Starship [TEST DATA]',
      model: 'J-type 327 Nubian royal starship',
      manufacturer: ' Nubia Star Drives',
      costInCredits: 'Unknown',
      length: '76 m',
      crew: '8',
      passengers: '30',
      cargoCapacity: 'Unknown'
    }
  ];

  comp = (id,arr) => {
    let idp =0;
    for(let i=0;i<arr.length;i++) {
      if ((id-1)===i) return arr[i];
      if (id===arr[i].id){
        idp =i;
        break;
      };
    };
    return arr[idp];
  };

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async (id) => {
    return this.comp(id,this._people)
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async (id) => {
    return this.comp(id,this._planets)
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async (id) => {
    return this.comp(id,this._starships)
  };

  getPersonImage = ({id}) => {
    return  `${this._imageBase}/characters/${id}.jpg`
  }
  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }
}
