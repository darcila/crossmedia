import { Carousel } from "react-bootstrap";
import imagen1 from "../assets/imagenes/imagen1.jpg";
import imagen2 from "../assets/imagenes/imagen2.jpg";
import imagen3 from "../assets/imagenes/imagen3.jpg";
import imagen4 from "../assets/imagenes/imagen4.jpg";
import imagen5 from "../assets/imagenes/imagen5.jpg";

function Galeria() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mi primer viaje</h3>
            <p>Lugar muy montañoso, raro que no habian arboles. ¿por qué seria?.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Cielo muy estrellado</h3>
            <p>Muchas estrellas al horizonte.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Aurora boreal</h3>
            <p>Un lugar muy tranquilo y se nos presenta Aurora que la recibimos con cariño.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
      
    );
  }
  
  export default Galeria;
  