import { Container } from "react-bootstrap";
import styled from "styled-components";
import hill from "../hill.jpg";

const Styles = styled.div`
    .jumbo {
        background: url(${hill}) fixed bottom no-repeat;
        background-size: cover;
        position: relative;
        z-index: -2;
    }
    .overlay {
        position: absolute;
        background: black;
        opacity: 0.7;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

export default function Jumbotron({height}) {
    return (
        <Styles>
        <Container data-bs-theme="dark" fluid className="jumbo bg-body-tertiary p-5 text-body-emphasis" style={{height}}>
            <div className="overlay"></div>
            <Container>
                <h2>Alpine blog</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sapiente consequuntur sunt, itaque aperiam minima, nobis, unde neque provident nulla ut recusandae id. Nesciunt autem quia rem dolor, voluptatum saepe.
                Officia totam eaque eveniet quibusdam reprehenderit perferendis enim nulla perspiciatis ab excepturi ex numquam, ipsam porro modi, sint, possimus nesciunt doloribus repudiandae? Error neque sed ratione eligendi, perspiciatis dicta nam.
                Alias, culpa tenetur illum nemo delectus doloribus quia ipsa eos suscipit eius ducimus quam a dolore possimus neque? Totam similique nobis blanditiis facilis maxime excepturi repellendus error beatae inventore vel.</p>
            </Container>
        </Container>
        </Styles>
    )
}