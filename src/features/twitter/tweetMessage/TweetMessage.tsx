import React, {FC, ReactElement} from 'react'
import {Tweet} from 'models/Tweet'
import {RiDeleteBin6Line} from 'react-icons/ri';
import moment from 'moment'
import './tweetMessage.sass'

type Props ={
    tweet: Tweet,
    handleDelete: (tweetId: string) => void
}

export const TweetMessage: FC<Props> = ({tweet, handleDelete}): ReactElement => {
  const handleOnDelete = () => {
    handleDelete(tweet.id);
  };

  return (
    <div className='tweet-container'>
      <div className='user-title'>{tweet.userName}</div>
        <div className='tweet-text'>{tweet.tweetText}</div>
        <div className='flex'>
          <div className='date'>{moment(tweet.createdAt).format('h:mm A · MMM DD, YYYY')}</div> 
          <button className='delete-button' onClick={handleOnDelete}>
            <RiDeleteBin6Line/>
          </button>
        </div>
    </div>
  )
  
}


