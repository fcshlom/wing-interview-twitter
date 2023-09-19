import React, { FC, ReactElement } from 'react'
import { Tweet } from '../models/Tweet'
import TweetMessage from './TwitteMessage'
import styled from 'styled-components'

type tweetsListProps = {tweets: Tweet[], loading: boolean}

const tweetsElements = {
  loading: <div>Loading...</div>,
  tweets: (tweets: Tweet[]) => tweets.sort((t1: Tweet, t2: Tweet) => t2.createdAt - t1.createdAt).map((tweet, index) => <TweetMessage key={index} tweet={tweet} />),
}

const TweetsList: FC<tweetsListProps> = ({tweets, loading}): ReactElement => {
      return (
        <ListContainer>
          {loading ?? tweetsElements.loading}
          {tweetsElements.tweets(tweets)}
        </ListContainer>
    )
  
}

export default TweetsList

const ListContainer = styled.div`
  overflow-y: auto;
`
