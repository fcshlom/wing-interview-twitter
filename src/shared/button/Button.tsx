import React, { FC, ReactElement, ReactNode } from 'react';
import './button.sass'

type Props = {disabled?: boolean, onClick: () => void, children?: ReactNode};

export const Button: FC<Props> = ({disabled, onClick, children}): ReactElement => {
    return (
      <button className='primery-button' disabled={disabled} onClick={onClick}>
        {children}
      </button>
    )
}
