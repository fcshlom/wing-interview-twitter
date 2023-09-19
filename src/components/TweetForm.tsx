import React, { ChangeEvent, FC, ReactElement, useState } from 'react'
import Button from './Button'
import TextArea from './TextArea';
import { Container, UserTitle, Footer, Counter, VSeperator } from '../styles/components';

type formProps = {
    userName: string,
    addTweet: (tweetText: string) => void,
    setFocus: boolean,
}

const TwitteForm: FC<formProps> = ({userName, addTweet, setFocus}): ReactElement => {
    const maxTweetLength = 280;
    const [tweetText, setTweetText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    
    
    const handleTwittTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTweetText(e.target.value)
        setIsDisabled(e.target.value.length > maxTweetLength || e.target.value.length === 0)
    }

    const handleClick = () => {
      addTweet(tweetText);
      setTweetText('');
      setIsDisabled(true);
    };

    return (
      <Container $useFullBorders>
        <UserTitle $underline>{userName}</UserTitle>
        <TextArea onChange={handleTwittTextChange} setFocus={setFocus} name='tweetText' value={tweetText} placeholder='What is happening?!'/>
        <Footer>
            <Counter $isErorr={tweetText.length > maxTweetLength}>{maxTweetLength - tweetText.length}</Counter>
            <VSeperator/>
            <Button disabled={isDisabled} lable='Tweet' onClick={handleClick}></Button>
        </Footer>
      </Container>
    )
  
}

export default TwitteForm
