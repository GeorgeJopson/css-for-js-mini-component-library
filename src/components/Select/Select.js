import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>

      <SelectBox>
        {displayedValue}
        <PositionedIcon id={"chevron-down"}/>
      </SelectBox>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
    position: relative;
    width: max-content;
`

const PositionedIcon = styled(Icon)`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
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

const SelectBox = styled(`div`)`
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};

    font-size: 1rem;

    padding: 12px 52px 12px 16px;

    border-radius: 8px;

    ${NativeSelect}:focus + & {
        outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover ~ & {
        color: black;
    }
`

export default Select;
