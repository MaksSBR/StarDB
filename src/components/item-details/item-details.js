import React from 'react';
import PropTypes from 'prop-types';

import './item-details.css'


const Record = (props) => {
  const {item,field,label}=props
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

const ItemDetails =(props) => {

  const { item,image,children: renderLabel} = props;
  const label = renderLabel();

  return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item" />

        <div className="card-body">
          <h4>{ item.name }</h4>
          <ul className="list-group list-group-flush">
            { React.Children.map ( label, (child) => {
              return React.cloneElement(child,{item});
              } ) }
          </ul>
        </div>
      </div>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.object,
  image: PropTypes.string,
  children: PropTypes.func.isRequired
};


export default ItemDetails ;
