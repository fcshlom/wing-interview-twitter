import React, { FC, ReactElement } from 'react'
import { Tweet } from '../models/Tweet'
import { Div, Date, Container, UserTitle } from '../styles/components'
import moment from 'moment'

type TweetMessageProps ={
    tweet: Tweet,
}

const TweetMessage: FC<TweetMessageProps> = ({tweet}): ReactElement => {
    console.log(tweet.createdAt)
    return (
      <Container>
        <UserTitle>{tweet.userName}</UserTitle>
           <Div>{tweet.tweetText}</Div>
           <Date>{moment(tweet.createdAt).format('h:mm A · MMM DD, YYYY')}</Date> 
        </Container>
    )
  
}

export default TweetMessage
