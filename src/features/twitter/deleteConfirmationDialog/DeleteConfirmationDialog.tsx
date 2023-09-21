import { FC, ReactElement } from "react";
import { DialogBackdrop, DialogContainer } from "../../../styles/components";
import './deleteConfirmationDialog.sass';
import { useRecoilState } from "recoil";
import { deleteConfirmDialogState, tweetState } from "../atoms/tweetAtom";
import { Tweet } from "../../../models/Tweet";

const DeleteConfirmationDialog: FC = (): ReactElement => {
    const [tweetIdToDelete, setDeleteConfirmDialog] = useRecoilState(deleteConfirmDialogState);
    const [, setTweets] = useRecoilState(tweetState);
    
    const handeleCancelClick = () => {
        setDeleteConfirmDialog('');
    }

    const handeleConfirmClick = () => {
        setTweets((tweets: Tweet[]) => {
            return [...tweets.filter(t => t.id !== tweetIdToDelete)]
        }); 
        setDeleteConfirmDialog('');
    }
    return (
        <DialogBackdrop>
            <DialogContainer>
                <div className="error-dialog">
                    <h2>Delete Tweet?</h2>
                    <div>This can't be undone and it will be removed
                        from your profile, the timeline of any accounts 
                        that follow you, and from Twitter seach results.
                    </div>    
                    <button className="confirm-delete-button"
                        onClick={handeleConfirmClick}>Delete</button>
                    <button className="cancel-delete-button"
                        onClick={handeleCancelClick}>Cancel</button>
                </div>
            </DialogContainer>
        </DialogBackdrop>
    );
}

export default DeleteConfirmationDialog;