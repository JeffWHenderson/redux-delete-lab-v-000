import React, { Component } from 'react';

class Bands extends Component {
  render() {

    const bands = this.props.store.getState().bands.map((band,index) => {
      return <Band 
        band={band} key={index} id={band.id} store={this.state.store} />
    })
    return(
      <ul>
        Bands Component
      </ul>
    );
  }
};

export default Bands;
