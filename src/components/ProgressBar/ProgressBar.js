/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({value, size}) => {
  return <Progress value={value} size={size}/>;
};

const Progress = ({value, size}) => {
  return (
    <ProgressWrapper role={"progressbar"} aria-valuenow={value} value={value} size={size}>
      <InternalProgressBar value={value}/>
    </ProgressWrapper>
  );
}

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
    width: ${({size})=>SIZE_CONSTANTS[size].width}px;
    height: ${({size})=>SIZE_CONSTANTS[size].height}px;
    padding: ${({size})=>SIZE_CONSTANTS[size].padding}px;
    border-radius: ${({size})=>SIZE_CONSTANTS[size].radius}px;

    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`

function calcEndBorderRadius(value) {
  return Math.max((value - 98) * 4, 0);
}

const InternalProgressBar = styled('div')`
    width: ${({value}) => value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px ${({value}) => calcEndBorderRadius(value)}px ${({value}) => calcEndBorderRadius(value)}px 4px;
`

export default ProgressBar;
