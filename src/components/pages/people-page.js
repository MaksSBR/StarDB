import React from 'react';
import { withRouter } from 'react-router-dom';

import {PersonList,PersonDetails} from '../sw-components';

import ErrorBoundry from '../error-boundry';
import Row from '../row';


const PeoplePage =({ match, history }) => {

  const { id } = match.params;
  const personList = (
    <PersonList
      onItemSelected= {(itemID)=>{
        history.push(`${itemID}`)
      }} />
  );
  const personDetails = (
    <PersonDetails
      itemId={+id} />
  );
  return (
    <ErrorBoundry>
      <h3>People</h3>
      <Row
        left={personList}
        right={personDetails}/>
    </ErrorBoundry>
  );
};

export default withRouter(PeoplePage);
