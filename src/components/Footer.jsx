import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <p className="text-center text-body-secondary m-0">
                    <span>Alpine blog. </span>
                    <span><a href="https://github.com/miptleha/react-bootstrap-sample">Source code</a>. </span>
                    <span>Created by miptleha.</span>
                </p>
            </Container>
        </footer>
    )
}