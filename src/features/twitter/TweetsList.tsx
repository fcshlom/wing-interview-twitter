import React, { FC, ReactElement } from 'react';
import { Tweet } from '../../models/Tweet';
import TweetMessage from './tweetMessage/TweetMessage';
import styled from 'styled-components';
import {useRecoilState} from "recoil";
import {isLoadingState, tweetState} from "./atoms/tweetAtom";

const TweetsList: FC = (): ReactElement => {
  const [tweets] = useRecoilState(tweetState);
  const [isLoading] = useRecoilState(isLoadingState);

  const tweetsElements = 
       [...tweets].sort((t1: Tweet, t2: Tweet) => t2.createdAt - t1.createdAt)
      .map((tweet) => <TweetMessage key={tweet.id} tweet={tweet} />)
  

      return (
        <ListContainer>
          {isLoading &&  <div>Loading...</div>}
          {tweetsElements}
        </ListContainer>
    )
  
}

export default TweetsList

const ListContainer = styled.div`
  overflow-y: auto;
`
