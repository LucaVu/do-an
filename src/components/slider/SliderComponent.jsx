import Carousel from 'react-bootstrap/Carousel';
import data from '../../data/sample.json';

function SliderComponent () {
    
    return (
        <Carousel data-bs-theme="dark">
            {
                data.slider.map((item) => (
                    <Carousel.Item key={item.id}>
                        <img
                        className="d-block w-100"
                        src={item.img}
                        alt={item.title}
                        height="350px"
                        />
                        <Carousel.Caption>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default SliderComponent;