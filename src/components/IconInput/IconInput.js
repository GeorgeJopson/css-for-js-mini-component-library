import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper width={width}>

    <InputIcon id={icon}/><InputBar  size={size}></InputBar>
  </Wrapper>;
};

const Wrapper = styled('div')`
    width:${({ width }) => width}px;
    position: relative;
`
const InputIcon = styled(Icon)`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 24px;
    height: 24px;
    pointer-events: none;
`

const InputBar = styled('input')`
    display: inline-block;
    border: none;
    width: 100%;
    border-bottom: solid ${({ size }) => size==="large"?2:1}px;
    font-size: calc(18rem /16);
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 36px;
`

export default IconInput;
