import React from 'react';

// Первоначальный вариант когда в sw-сomp компануем все как вызов 1 функции
// const add =(a,b) => (a+b);
// const withChildFunction = (Wrapped,fn) => {
//   return (props) => {
//     return (
//       <Wrapped {...props}>
//         {fn}
//       </Wrapped>
//     )
//   }
// };

//Второй вариант когда в sw-сomp компануем все как вызов  функции, которая принимает простые props, и затем вызывает безымянную функцию ,с сложными props
// const add =(a) => (b) => (a+b);

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};
 export default withChildFunction ;
