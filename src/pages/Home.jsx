import NavbarComponent from "../components/navbar/NavbarComponent";
import SliderComponent from "../components/slider/SliderComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import data from '../data/sample.json';
import ItemComponent from "../components/item/ItemComponent";

function Home () {
    return (
        <>
            <SliderComponent />
            <NavbarComponent />
            <Container fluid className='mt-4'>
                <Row>
                    {
                        data.film.map((item, key) => (
                            <ItemComponent key={key} item={item} />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Home;