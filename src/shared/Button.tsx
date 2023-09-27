import React, { FC, ReactElement } from 'react';

type ButtonProps = {lable: string, disabled?: boolean, onClick: () => void};

export const Button: FC<ButtonProps> = ({lable, disabled = false, onClick}): ReactElement => {

    return (
      <button className='primery-button' disabled={disabled} onClick={onClick}>{lable}</button>
    )
}
