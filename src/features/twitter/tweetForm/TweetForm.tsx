import React, { ChangeEvent, FC, ReactElement, useState } from 'react'
import {Button} from 'shared/Button'
import {TextArea} from 'shared/TextArea';
import {FocusFlag, Tweet} from 'models/Tweet';
import {generateId} from 'shared/utils/idGenerator';
import './tweetForm.sass';

type props = {
  userName: string,
  handleSubmit: (tweet: Tweet) => void
  focus: FocusFlag
}

export const TwitteForm: FC<props> = ({userName, handleSubmit, focus}): ReactElement => {
  const maxTweetLength = 280;
  const [tweetText, setTweetText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
        
  const handleTwittTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(e.target.value)
    setIsDisabled(e.target.value.length > maxTweetLength || e.target.value.length === 0)
  }

  const handleAddTweetClick = () => {
    handleSubmit( {
        userName: userName,
        tweetText: tweetText,
        createdAt: new Date().getTime(),
        id: generateId()
    });
    setTweetText('');
    setIsDisabled(true);
  };

  return (
    <div className='container full-container'>
      <div className={`user-title underline ${!userName ? 'error': ''}`}>{userName || 'Missing User Name!!'}</div>
      <TextArea onChange={handleTwittTextChange} name='tweetText' focus={focus} 
        value={tweetText} placeholder='What is happening?!'/>
      <div className='footer'>
          <span className={`counter  ${(tweetText.length > maxTweetLength) ? 'error' : ''}`}>
            {maxTweetLength - tweetText.length}</span>
          <span className='vSeperator'/>
          <Button disabled={isDisabled || !userName} lable='Tweet' onClick={handleAddTweetClick}></Button>
      </div>
    </div>
  )  
}
