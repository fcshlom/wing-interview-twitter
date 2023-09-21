import { FC, ReactElement } from "react"
import { Container } from "../../../styles/components";
import Button from "../../../shared/Button";
import { useRecoilState } from "recoil";
import { inputFocusState } from "../atoms/tweetAtom";
import './emptyStateMessage.sass'

const EmptyStateMessage: FC = (): ReactElement => {
    const [,setInputFocus] = useRecoilState(inputFocusState);

    const handleSetFocusClick = () => {
        setInputFocus(true);
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Container className="container">
                <div className="title">Welcome to Twitter!</div>
                <div className="message">This is the best place to see what's
                happening in your world. Find some people and topics to follow now.</div>
                <Button lable={"Tweet something!"} onClick={handleSetFocusClick} ></Button>
            </Container>
        </div>
    )
}

export default EmptyStateMessage;