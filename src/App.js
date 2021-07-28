
import { Col, Container, Form, Image, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className="App">
     <h1>welcome to delivery associates</h1>
      <header className="App-header">
        <section>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  

</Form>
</section>
<section>
      
      <Container className="cl">
  <Row>
    <Col xs={6} md={4}>
      <Image src={"https://img.freepik.com/vecteurs-libre/ordre-livraison-shopping-ligne-ordinateur-portable_1594-116.jpg?size=626&ext=jpg"} rounded width="800px" height="700px"/>
    </Col>
   
  </Row>
</Container>

</section>

</header>
    </div>
  );
}

export default App;
