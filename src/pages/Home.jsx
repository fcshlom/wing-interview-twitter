import React from 'react'
import TwitteForm from '../components/TweetForm'
import TweetsList from '../components/TweetsList';
import EmptyStateMessage from '../components/EmptyStateMessage'

import { PageContainer } from '../styles/components';

export default function Home() {
    const userName = 'Shlomi Masuri'
    const [tweets, setTweets] = React.useState([]);
    const [focus, setFocus] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const addTweet = (tweet) => {
        setLoading(true);
        const addedTweet = { userName, tweetText: tweet, createdAt: new Date() };
        setTweets([...tweets, addedTweet]);
        setLoading(false);
    }
    const setFocusClick = () => {
        setFocus(true);
        setTimeout(() => setFocus(false), 0);
    };
    return (
        <PageContainer>
            <TwitteForm addTweet={addTweet} userName={userName} setFocus={focus}></TwitteForm>
            {tweets?.length === 0 ? <EmptyStateMessage setFocus={setFocusClick} /> : null}
            <TweetsList tweets={tweets} loading={loading}></TweetsList>
        </PageContainer>
    )

}
