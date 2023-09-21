import React from 'react';
import TwitteForm from '../features/twitter/TweetForm';
import TweetsList from '../features/twitter/TweetsList';
import EmptyStateMessage from '../features/twitter/emptyStateMessage/EmptyStateMessage';
import { PageContainer } from '../styles/components';
import { useRecoilState } from 'recoil';
import { deleteConfirmDialogState, tweetState } from '../features/twitter/atoms/tweetAtom';
import DeleteConfirmationDialog from '../features/twitter/deleteConfirmationDialog/DeleteConfirmationDialog';

export default function Home() {
    // User's name
    const userName = 'Shlomi Masuri';

    const [tweets] = useRecoilState(tweetState);
    const [deleteConfirmDialog] = useRecoilState(deleteConfirmDialogState);

    return (
        <PageContainer>
            
            {deleteConfirmDialog !== '' && <DeleteConfirmationDialog/>}
            <TwitteForm userName={userName}/>
            {tweets?.length === 0 ? <EmptyStateMessage /> : <TweetsList />}
        </PageContainer>
    );
}
