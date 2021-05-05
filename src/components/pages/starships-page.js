import React from 'react';

import { withRouter } from 'react-router-dom';
import {StarshipList} from '../sw-components';
import ErrorBoundry from '../error-boundry';

const StarspipsPage = ( {history} )=>{
  return (
    <ErrorBoundry>
      <h3>Starships</h3>
      <StarshipList
        // если абсолютный путь
        // onItemSelected= {(itemId) => {
        //   const newPath = `/starships/${itemId}`;
        //   history.push ( newPath );
        // }}
        // если относительный путь но в <Link> в параметре to должен быть путь со /   на конце
        onItemSelected= {(itemId) => {
          const newPath = `${itemId}`;
          history.push ( newPath );
        }}
       />
    </ErrorBoundry>
  );
}

export default withRouter(StarspipsPage);


// import React,{Component} from 'react';

// import {StarshipList,  StarshipDetails,
// } from '../sw-components';

// import ErrorBoundry from '../error-boundry';
// import Row from '../row';

// import './pages.css';

// export default class StarspipsPage extends Component {

//   state = {
//     selectedItem: null,
//   };

//   onItSelected = (id) => {
//     this.setState ({
//       selectedItem: id,
//     });
//   };

//   render (){
//     const starshipList = (
//       <StarshipList
//         onItemSelected= {this.onItSelected} />
//     );
//     const starshipDetails = (
//       <StarshipDetails
//         itemId={this.state.selectedItem} />
//     );

//     return (
//       <ErrorBoundry>
//         <Row
//           left={starshipList}
//           right={starshipDetails}/>
//       </ErrorBoundry>
//     );
//   };
// };
