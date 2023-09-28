import React, { useState } from 'react';
import {TwitteForm} from 'features/twitter/tweetForm/TweetForm';
import {TweetsList} from 'features/twitter/tweetsList/TweetsList';
import {EmptyStateMessage} from 'features/twitter/emptyStateMessage/EmptyStateMessage';
import {DeleteConfirmationDialog} from 'features/twitter/deleteConfirmationDialog/DeleteConfirmationDialog';
import {FocusFlag, Tweet} from 'models/Tweet';
import './home.sass'

export function Home() {
    const [userName, setUserName] = useState('');
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [focus, setFocus] = useState<FocusFlag>({setFocus: false});
    const [tweetIdToDelete, setTweetIdToDelete] = useState<string>('');
    
    const onTweedAdd = (newTweet: Tweet) => {
        setTweets([...tweets, newTweet]);
    }
    const onTweetIdSelectedForDelete = (tweetId: string) => {
        setTweetIdToDelete(tweetId);
    }
    const handleDeleteConfirm =  (isConfirm: boolean) => {
        if (isConfirm)
            setTweets(tweets.filter(t => t.id!== tweetIdToDelete));
        setTweetIdToDelete('');
    }
    const handleSetFocus = () => {
        setFocus({setFocus: true});
    }

    return (
        <>
            {tweetIdToDelete !== '' && 
                <DeleteConfirmationDialog onConfirm={handleDeleteConfirm}/>
            }
            <label className='user-name-label'>Author Name:
                <input type='text' name='userName' autoComplete='given-name' placeholder='Enter User Name'
                className='user-input' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </label>
            <div className={'page-container'}>
                <TwitteForm onSubmit={onTweedAdd} userName={userName} focus={focus}/>
                {tweets?.length === 0 ? 
                <EmptyStateMessage onFocus={handleSetFocus} /> :
                <TweetsList tweets={tweets} onDelete={onTweetIdSelectedForDelete}/>}
            </div>
        </>
    );
}
