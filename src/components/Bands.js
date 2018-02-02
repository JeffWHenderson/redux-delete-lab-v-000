import React, { Component } from 'react';

class Bands extends Component {
  render() {

    const bands = this.props.store.getState().bands.map((band,index) => {
      return <p 
        band={band} key={index} id={band.id} store={this.state.store} />
    })
    
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
