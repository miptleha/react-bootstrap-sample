import Cards from "../components/Cards";
import ImgAndText from "../components/ImgAndText";
import Jumbotron from "../components/Jumbotron";
import Slider from "../components/Slider";

export default function Home() {
    return (
        <>
            <Slider />
            <Cards />
            <Jumbotron height="40vh" />
            <ImgAndText />
        </>
    )
}