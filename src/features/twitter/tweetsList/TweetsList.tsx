import React, {FC, ReactElement, useMemo} from 'react';
import {Tweet} from 'models/Tweet';
import {TweetMessage} from '../tweetMessage/TweetMessage';
import './tweetsList.sass';

type props = {
  tweets: Tweet[]
  onDelete: (tweetId: string) => void
}

export const TweetsList: FC<props> = ({tweets, onDelete: handleDelete}): ReactElement => {
    const tweetsElements = useMemo(() => {
      return [...tweets].sort((t1: Tweet, t2: Tweet) => t2.createdAt - t1.createdAt)
        .map((tweet) => <TweetMessage key={tweet.id} tweet={tweet} onDelete={handleDelete} />)
    }, [handleDelete, tweets])
    
    return (
      <div className='list-container'>
        {tweetsElements }
      </div>
    )
}


