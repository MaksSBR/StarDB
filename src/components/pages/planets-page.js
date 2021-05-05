import React,{Component} from 'react';

import {PlanetList,PlanetDetails} from '../sw-components';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null,
  };

  onItSelected = (id) => {
    this.setState ({
      selectedItem: id,
    });
  };

  render (){
    const planetList = (
      <PlanetList
        onItemSelected= {this.onItSelected} />
    );
    const planetDetails = (
      <PlanetDetails
        itemId={this.state.selectedItem} />
    );

    return (
      <ErrorBoundry>
        <h3>Planets</h3>
        <Row
          left={planetList}
          right={planetDetails}/>
      </ErrorBoundry>
    );
  };
};
