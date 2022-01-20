import * as React from 'react';

import Button, { ButtonEnums } from '../TSButton';
import { StyledRadioButtonGroup } from './RadioButtonGroup.styled';

export type RadioGroupProps = {
  options: Array<Options>;
  preselectedOption: string;
  handleChange: (e?: React.ChangeEvent) => void;
};

export type Options = {
  label: string;
  value: string;
};

const RadioButtonGroup = ({ options, preselectedOption }: RadioGroupProps) => {
  const [selected, setSelected] = React.useState(preselectedOption);

  return (
    <StyledRadioButtonGroup>
      {options.map((option: Options) => (
        <Button
          small
          key={option.value}
          variant={
            option.value === selected
              ? ButtonEnums.PRIMARY
              : ButtonEnums.SECONDARY
          }
          onClick={() => setSelected(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </StyledRadioButtonGroup>
  );
};

export default RadioButtonGroup;
