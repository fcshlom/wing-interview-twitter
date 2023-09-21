import React, { FC, ReactElement } from 'react'
import { Tweet } from '../../../models/Tweet'
import { Div, Date, UserTitle } from '../../../styles/components'
import { RiDeleteBin6Line } from 'react-icons/ri';
import moment from 'moment'
import { useRecoilState } from 'recoil'
import { deleteConfirmDialogState } from '../atoms/tweetAtom'
import './tweetMessage.sass'

type TweetMessageProps ={
    tweet: Tweet,
}

const TweetMessage: FC<TweetMessageProps> = ({tweet}): ReactElement => {
  const [,setDeleteConfirmDialog] = useRecoilState(deleteConfirmDialogState);
    const handleDelete = () => {
      setDeleteConfirmDialog(tweet.id);
    };
    return (
      <div className='tweet-container'>
        <UserTitle>{tweet.userName}</UserTitle>
           <Div>{tweet.tweetText}</Div>
           <div className='flex'>
              <Date>{moment(tweet.createdAt).format('h:mm A · MMM DD, YYYY')}</Date> 
              <button className='delete-button' onClick={handleDelete}><RiDeleteBin6Line/></button>
           </div>
        </div>
    )
  
}

export default TweetMessage
