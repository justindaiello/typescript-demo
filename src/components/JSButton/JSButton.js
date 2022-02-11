import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './JSButton.styled';

export const ButtonEnums = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  WARNING: 'warning',
  DANGER: 'danger',
};

const JSButton = ({
  small,
  onClick,
  children,
  variant = ButtonEnums.PRIMARY,
}) => {
  return (
    <StyledButton small={small} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

JSButton.propTypes = {
  small: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(ButtonEnums)),
};

export default JSButton;
