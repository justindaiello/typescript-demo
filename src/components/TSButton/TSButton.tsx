import React from 'react';

import { StyledButton } from './TSButton.styled';

// Enums have some documented issues and are generally not recommended
export enum ButtonEnumsAlt {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  DANGER = 'danger',
}

// Unions are the preferred way to write enums
export type ButtonEnums = 'primary' | 'secondary' | 'warning' | 'danger';

export type ButtonProps = {
  small?: boolean;
  variant: ButtonEnums;
  children: React.ReactNode;
  onClick: (e?: React.MouseEvent) => void;
};

const TSButton = ({
  small,
  onClick,
  children,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <StyledButton small={small} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default TSButton;
