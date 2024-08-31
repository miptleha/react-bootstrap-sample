import Jumbotron from "../components/Jumbotron";
import styled from "styled-components";

const Styles = styled.div`
    .jumbo {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
    }
`

export default function About() {
    return (
        <Styles>
            <Jumbotron />
        </Styles>
    )
}