import { FC, ReactElement } from 'react';
import './deleteConfirmationDialog.sass';

type Props ={
    handleConfirm: (isConfirm: boolean) => void,
}

export const DeleteConfirmationDialog: FC<Props> = ({handleConfirm}): ReactElement => {
    const handeleCancelClick = () => handleConfirm(false)
    const handeleConfirmClick = () => handleConfirm(true)
    return (
        <div className='dialog-backdrop' onClick={handeleCancelClick}>
            <div className='dialog-container'>
                <div className='error-dialog'>
                    <h2>Delete Tweet?</h2>
                    <div>This can't be undone and it will be removed
                        from your profile, the timeline of any accounts 
                        that follow you, and from Twitter seach results.
                    </div>    
                    <button className='primery-button confirm-delete-button'
                        onClick={handeleConfirmClick}>Delete</button>
                    <button className='primery-button cancel-delete-button'
                        onClick={handeleCancelClick}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
