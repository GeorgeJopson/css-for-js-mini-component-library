/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

const ProgressBar = ({value, size}) => {
  const boundedValue = Math.min(Math.max(value,0),100);
  return (
    <ProgressWrapper
      role={"progressbar"}
      aria-valuenow={boundedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      $size={size}
    >
      <InternalProgressIndicator $value={boundedValue}/>
    </ProgressWrapper>
  );
};

const DEFAULT_WIDTH = 370;

const SIZE_CONSTANTS = {
  "small":{
    width: DEFAULT_WIDTH,
    height: 8,
    padding: 0,
    radius: 4
  },
  "medium":{
    width: DEFAULT_WIDTH,
    height: 12,
    padding: 0,
    radius: 4
  },
  "large":{
    width: DEFAULT_WIDTH,
    height: 24,
    padding: 4,
    radius: 8
  }

}

const ProgressWrapper = styled('div')`
    width: ${({$size})=>SIZE_CONSTANTS[$size].width}px;
    height: ${({$size})=>SIZE_CONSTANTS[$size].height}px;
    padding: ${({$size})=>SIZE_CONSTANTS[$size].padding}px;
    border-radius: ${({$size})=>SIZE_CONSTANTS[$size].radius}px;

    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`

function calcEndBorderRadius(value) {
  return Math.max((value - 98)/2 * 4, 0);
}

const InternalProgressIndicator = styled('div')`
    width: ${({$value}) => $value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 
            4px 
            ${({$value}) => calcEndBorderRadius($value)}px 
            ${({$value}) => calcEndBorderRadius($value)}px 
            4px;
`

export default ProgressBar;
