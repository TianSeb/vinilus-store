import { Container } from "react-bootstrap";

const NotFound404 = () => {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '70vh'}}>
        <h1>Página no encontrada</h1>
        <p>Error 404</p>
    </Container>
  )
}
export default NotFound404