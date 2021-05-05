import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const withDetails = (View) => {
  return class extends Component{

    static propTypes = {
      getImageUrl: PropTypes.func,
      getData: PropTypes.func,
      itemId: PropTypes.number,
    }

    state = {
     item: null,
     image: null,
     loading: true,
     error: false,
    }

    componentDidMount () {
      this.updateItem();
    };

    updateItem(){
      const {itemId} =this.props;
      if (!itemId) {
        return;
      ;}
      this.setState ( {
        loading: true ,
        error: false,
      } );

      this.props.getData(itemId)
        .then(  this.onItemLoaded )
        .catch(  this.onError )
    };

    onItemLoaded = (item) => {
      this.setState ({
        item: item,
        loading: false,
        image: this.props.getImageUrl(item)
      })
    };

    onError = (err)=> {
      this.setState ({
        error: true,
        loading: false,
      });
    };

    componentDidUpdate(prevprops) {
      if ( (this.props.itemId !== prevprops.itemId) ||
           (this.props.getData !== prevprops.getData) ||
           (this.props.getImageUrl !== prevprops.getImageUrl) ){
            this.updateItem();
      };
    };

    render(){
      const { item,loading,error,image } = this.state;

      const styleText = {
        fontSize: '1.2em',
        color: '#00bc8c',
      };

      if (!item) {
        return <span style= {styleText} >Select from the list</span>
      };

      if (loading) {
        return <Spinner />
      }

      if (error) {
        return <ErrorIndicator />
      }

      return <View
        {...this.props}
        item={item}
        // hasData={hasData}
        image={image} />
    };
  };
};

export default withDetails;
