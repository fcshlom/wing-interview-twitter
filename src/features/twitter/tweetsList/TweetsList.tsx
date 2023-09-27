import React, {FC, ReactElement} from 'react';
import {Tweet} from 'models/Tweet';
import {TweetMessage} from '../tweetMessage/TweetMessage';
import './tweetsList.sass';

type props = {
  tweets: Tweet[]
  handleDelete: (tweetId: string) => void
}

export const TweetsList: FC<props> = ({tweets, handleDelete}): ReactElement => {
    const tweetsElements = 
        [...tweets].sort((t1: Tweet, t2: Tweet) => t2.createdAt - t1.createdAt)
        .map((tweet) => <TweetMessage key={tweet.id} tweet={tweet} handleDelete={handleDelete} />)
    
    return (
      <div className='list-container'>
        {tweetsElements }
      </div>
    )
}


