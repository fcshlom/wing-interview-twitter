import { FC, ReactElement } from 'react'
import {Button} from 'shared/button/Button';
import './emptyStateMessage.sass'

type Props = {
    onFocus: () => void
}

export const EmptyStateMessage: FC<Props> = ({onFocus}): ReactElement => {
    const handleSetFocusClick = () => {
        onFocus();
    }

    return (
        <div className='empty-state-container'>
            <div className='container'>
                <div className='title'>Welcome to Twitter!</div>
                <div className='message'>This is the best place to see what's
                happening in your world. Find some people and topics to follow now.</div>
                <Button onClick={handleSetFocusClick} >Tweet something!</Button>
            </div>
        </div>
    )
}

