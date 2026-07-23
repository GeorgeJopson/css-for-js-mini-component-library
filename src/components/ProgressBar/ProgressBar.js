/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

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
      <VisuallyHidden>{value}%</VisuallyHidden>
      <InternalProgressIndicatorWrapper>
        <InternalProgressIndicator $value={boundedValue}/>
      </InternalProgressIndicatorWrapper>
    </ProgressWrapper>
  );
};

const SIZE_CONSTANTS = {
  "small":{
    height: 8,
    padding: 0,
    radius: 4
  },
  "medium":{
    height: 12,
    padding: 0,
    radius: 4
  },
  "large":{
    height: 24,
    padding: 4,
    radius: 8
  }

}

const ProgressWrapper = styled('div')`
    width: 370px;
    height: ${({$size})=>SIZE_CONSTANTS[$size].height}px;
    padding: ${({$size})=>SIZE_CONSTANTS[$size].padding}px;
    border-radius: ${({$size})=>SIZE_CONSTANTS[$size].radius}px;

    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`

const InternalProgressIndicatorWrapper = styled('div')`
    border-radius: 4px;
    height: 100%;
    // Hide any overflow from InternalProgressIndicator, when it is near full
    overflow: hidden;`

const InternalProgressIndicator = styled('div')`
    width: ${({$value}) => $value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
`

export default ProgressBar;
