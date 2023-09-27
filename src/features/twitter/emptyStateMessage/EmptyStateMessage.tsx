import { FC, ReactElement } from 'react'
import {Button} from 'shared/Button';
import './emptyStateMessage.sass'

type Props = {
    handleFocus: () => void
}

export const EmptyStateMessage: FC<Props> = ({handleFocus}): ReactElement => {
    const handleSetFocusClick = () => {
        handleFocus();
    }

    return (
        <div className='empty-state-container'>
            <div className='container'>
                <div className='title'>Welcome to Twitter!</div>
                <div className='message'>This is the best place to see what's
                happening in your world. Find some people and topics to follow now.</div>
                <Button lable={'Tweet something!'} onClick={handleSetFocusClick} ></Button>
            </div>
        </div>
    )
}

