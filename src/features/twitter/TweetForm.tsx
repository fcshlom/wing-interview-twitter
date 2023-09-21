import React, { ChangeEvent, FC, ReactElement, useState } from 'react'
import Button from '../../shared/Button'
import TextArea from '../../shared/TextArea';
import {useRecoilState} from "recoil";
import {isLoadingState, tweetState} from "./atoms/tweetAtom";
import { Container, UserTitle, Footer, Counter, VSeperator } from '../../styles/components';
import { Tweet } from '../../models/Tweet';
import generateId from '../../shared/utils/idGenerator';

type formProps = {
    userName: string,
}

const TwitteForm: FC<formProps> = ({userName}): ReactElement => {
    const maxTweetLength = 280;
    const [tweetText, setTweetText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    
    const [, setTweets] = useRecoilState(tweetState);
    const [, setIsLoading] = useRecoilState(isLoadingState);
    
    const handleTwittTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTweetText(e.target.value)
        setIsDisabled(e.target.value.length > maxTweetLength || e.target.value.length === 0)
    }

    const handleAddTweetClick = () => {
      setIsLoading(true)
      setTweets((tweets: Tweet[]) => {
          return [...tweets, {
              userName: userName,
              tweetText: tweetText,
              createdAt: new Date().getTime(),
              id: generateId()
          }]
      });
      setTweetText('');
      setIsDisabled(true);
      setIsLoading(false)
    };

    return (
      <Container $useFullBorders>
        <UserTitle $underline>{userName}</UserTitle>
        <TextArea onChange={handleTwittTextChange} name='tweetText' value={tweetText} placeholder='What is happening?!'/>
        <Footer>
            <Counter $isErorr={tweetText.length > maxTweetLength}>{maxTweetLength - tweetText.length}</Counter>
            <VSeperator/>
            <Button disabled={isDisabled} lable='Tweet' onClick={handleAddTweetClick}></Button>
        </Footer>
      </Container>
    )
  
}

export default TwitteForm
