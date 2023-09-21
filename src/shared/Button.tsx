import React, { FC, ReactElement } from 'react';
import { BaseButton } from '../styles/components';

type ButtonProps = {lable: string, disabled?: boolean, onClick: () => void};

const Button: FC<ButtonProps> = ({lable, disabled = false, onClick}): ReactElement => {

    return (
      <BaseButton disabled={disabled} onClick={onClick}>{lable}</BaseButton>
    )
}

export default Button
