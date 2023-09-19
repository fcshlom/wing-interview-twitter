import { FC, ReactElement } from "react"
import { Container } from "../styles/components";
import Button from "./Button";

type emptyStateProps = {setFocus: () => void}

const EmptyStateMessage: FC<emptyStateProps> = ({setFocus}): ReactElement => {

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Container style={{width: "300px", gap: '10px', display: 'flex', alignItems: 'center'}}>
                <div style={{fontWeight: "bold", fontSize: '30px'}}>Wellcome to Twitter!</div>
                <div style={{color: "#a8a8a8", fontSize: '14px'}}>This is the best place to see what's
                happening in your world. Find some people and topics to follow now.</div>
                <Button lable={"Tweet something!"} onClick={setFocus} ></Button>
            </Container>
        </div>
    )
}

export default EmptyStateMessage;