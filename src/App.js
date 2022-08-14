import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

import Footer from './components/Footer';

function App() {
  return (

    <div >

      <section className='header'>
        <Header />
      </section>


      <section className='cards'>
        <Card style={{ width: "15rem", height: "23rem" }}>
          <Card.Img variant="top" src="https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg"
          />
          <Card.Body>
            <Card.Title>Curiosos</Card.Title>
            <Card.Text>
              Los gatos son sumamente curiosos, les encanta explorar y subir a los computadores a pisar las teclas. 
            </Card.Text>
            <Button variant="outline-secondary">Adoptar</Button>
          </Card.Body>
        </Card>


        <Card style={{ width: "15rem", height: "23rem" }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQle4Zf2PWLi6ldvM1bTKd47hL-Zi2kC1K6C_-PZcwfMtchtkesbYNA1sU6HQQG1ETBk&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Amistosos</Card.Title>
            <Card.Text>
              Cuando desean hacerse los lindos, son encantadores. Hasta parecen inofensivos.
            </Card.Text>
            <Button variant="outline-secondary">Adoptar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem", height: "23rem" }}>
          <Card.Img variant="top" src="https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2015/06/notagatito.jpg"
          />
          <Card.Body>
            <Card.Title>Lamiones</Card.Title>
            <Card.Text>
              Todo lo quieren lamer y oler, nada se salva, ni siquiera la compra de supermercado.
            </Card.Text>
            <Button variant="outline-secondary">Adoptar</Button>
          </Card.Body>
        </Card>
      </section>

      <section className='footer'>
        <Footer />
      </section>

    </div>


  );
}
export default App;