import React from 'react';
import { SwapiServiceConsumer} from '../swapi-service-context';


// Первоначальный вариант когда в sw-сomp компануем все как вызов 1 функции
// const add =(a,b) => (a+b);



// const withSwapiService = (Wrapped,mapMethodsToProps) => {

//   return (props) => {

//     return (
//       <SwapiServiceConsumer>
//         { (swapiService) => {
//           const serviceProps = mapMethodsToProps(swapiService);

//           return (<Wrapped {...props} {...serviceProps}/>)
//         }}
//       </SwapiServiceConsumer>
//     );
//   };
// };

// export default withSwapiService ;


//Второй вариант когда в sw-сomp компануем все как вызов  функции, которая принимает простые props, и затем вызывает безымянную функцию ,с сложными props
// const add =(a) => (b) => (a+b);

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {

    return (
      <SwapiServiceConsumer>
        { (swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);

          return (<Wrapped {...props} {...serviceProps}/>)
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService ;
