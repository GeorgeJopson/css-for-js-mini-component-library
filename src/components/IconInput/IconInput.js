import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  "large":{
    padding: "8px",
    fontSize: `${18/16}rem`,
    iconWidth: 2,
    iconSize: 24,
    paddingLeft: "36px"
  },
  "small":{
    padding: "4px",
    fontSize: `${14/16}rem`,
    iconWidth: 1,
    iconSize: 16,
    paddingLeft: "24px"
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper width={width}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <InputBar  size={size} placeholder={placeholder}></InputBar>
    <InputIcon id={icon} strokeWidth={SIZES[size].iconWidth} size={SIZES[size].iconSize} />
  </Wrapper>;
};

const Wrapper = styled('div')`
    width:${({ width }) => width}px;
    position: relative;
`

const InputBar = styled('input')`
    display: inline-block;
    border: none;
    width: 100%;
    border-bottom: solid ${({ size }) => size==="large"?2:1}px;
    font-size: calc(18rem /16);
    
    padding-top: ${({ size }) => SIZES[size].padding};
    padding-bottom: ${({ size }) => SIZES[size].padding};
    
    padding-left: ${({ size }) => SIZES[size].paddingLeft};
    font-weight: 700;
    color: ${COLORS.gray700};
    &::placeholder {
        font-weight: 400;
        color: ${COLORS.gray500};
    }

    outline-offset: 2px;
    
    &:hover{
        color: black;
    }

`
const InputIcon = styled(Icon)`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: ${({size})=>size}px;
    height: ${({size})=>size}px;
    pointer-events: none;
    color: ${COLORS.gray700};
    ${InputBar}:hover + & {
        color: black;
    }
`


export default IconInput;
