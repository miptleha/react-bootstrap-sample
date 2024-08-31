import { Carousel } from "react-bootstrap";
import hill from '../hill.jpg';

export default function Slider() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <div style={{maxHeight: "70vh", display: "flex"}}>
                    <img src={hill} className="w-100 d-block align-self-center" alt="First slide" />
                </div>
                <Carousel.Caption>
                    <h3>Travel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{maxHeight: "70vh", display: "flex"}}>
                    <img src={hill} className="w-100 d-block align-self-center" alt="Second slide" />
                </div>
                <Carousel.Caption>
                    <h3>Explore</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{maxHeight: "70vh", display: "flex"}}>
                    <img src={hill} className="w-100 d-block align-self-center" alt="Third slide" />
                </div>
                <Carousel.Caption>
                    <h3>Relax</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}