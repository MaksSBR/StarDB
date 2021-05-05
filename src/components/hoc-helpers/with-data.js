import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

const withData = (View) => {
  return class extends Component {

    static propTypes = {
      getData: PropTypes.func,
    }

    state = {
      data: null,
      loading: true,
      error: false,
    };

    onItemLoaded = (data) => {
      this.setState ( {
        data,
        loading: false ,
      } );
    };

    onError = (err)=> {
      this.setState ({
        error: true,
        loading: false,
      });
    };

    update() {
      this.setState ( {
        loading: true ,
        error: false,
      } );

      this.props.getData()
        .then( this.onItemLoaded )
        .catch( this.onError )
    }

    componentDidMount () {
      this.update();
    };

    componentDidUpdate (prevprops) {
      if (this.props.getData !== prevprops.getData) {
        this.update();
      };
    };

    render () {

    const { data,loading,error }=this.state;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    const hasData = !(loading || error);

      return <View
        {...this.props}
        data={data}
        hasData={hasData}  />
    };
  };
};

export default withData;
