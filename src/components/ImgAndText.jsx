import { Col, Container, Row } from "react-bootstrap";
import hill from '../hill.jpg';

export default function ImgAndText() {
    return (
        <Container className="my-4">
            <Row>
                <Col md={7}>
                    <img src={hill} className="w-100 rounded" alt="Hot news" />
                </Col>
                <Col md={5}>
                    <h2>Alpine Blog</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur necessitatibus animi quaerat sequi, praesentium quis, ratione mollitia molestias at omnis, libero itaque porro autem rem tempore ipsam quo obcaecati in.
                        Maxime reiciendis recusandae distinctio. Molestiae velit ullam, iusto quam eos dolores hic eligendi, illum nostrum debitis tempora natus placeat accusantium necessitatibus voluptas minus asperiores soluta accusamus atque deleniti aliquam quidem?
                        Libero, tempora ab repudiandae, iste delectus placeat dicta beatae neque consectetur fugit minima tempore voluptatem asperiores et ex veritatis assumenda, quaerat quas at facere mollitia. Consequuntur autem aspernatur debitis beatae.</p>
                </Col>
            </Row>
        </Container>
    );
}