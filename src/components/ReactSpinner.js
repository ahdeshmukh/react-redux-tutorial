import React from 'react';
//import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import
//import ClipLoader from 'react-spinners/ClipLoader';
 
class ReactSpinner extends React.Component {
  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          sizeUnit={"px"}
          size={15}
          color={'#000000'}
          loading={this.props.loading}
        />
      </div> 
    )
  }
}

export default ReactSpinner;