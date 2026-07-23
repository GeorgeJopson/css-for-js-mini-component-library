import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectBox>
      {displayedValue}
      <PositionedIcon id="chevron-down"/>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </SelectBox>
  );
};

const PositionedIcon = styled(Icon)`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
`

const NativeSelect = styled('select')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const SelectBox = styled(`button`)`
    height: 43px;
    background-color: ${COLORS.transparentGray15};
    padding: 12px 52px 12px 16px;
    position: relative;
    width: fit-content;
    font-size: 16px;
    font-weight: 400;
    color: ${COLORS.gray700};
    border-radius: 8px;
    
    border: none;
    
    &:hover{
        color: black;
    }
`

export default Select;
