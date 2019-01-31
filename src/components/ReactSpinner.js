import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import
//import ClipLoader from 'react-spinners/ClipLoader';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class ReactSpinner extends React.Component {
  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#123abc'}
          loading={this.props.loading}
        />
      </div> 
    )
  }
}

export default ReactSpinner;