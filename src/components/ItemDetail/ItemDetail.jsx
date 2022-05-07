import { Container, Row, Col, Card, Button } from "react-bootstrap"
import NotFound404 from "../../pages/NotFound404"
import './ItemDetail.css'

const ItemDetail = ({data}) => {

return (
     (!data) ? <NotFound404></NotFound404>
    :
    <Container className='item-wrapper'>
        <Row className='item-row'> 
            <Col className='item-column' xs={12} sm={12} md={8} lg={6}>
                <Card.Img className='item-img' variant="top" src={data.img}/> 
            </Col>
            <Col className='item-column' xs={12} sm={12} md={8} lg={6}>
            <Card className='item-card'>
                <Card.Body className='item-card-body'>
                    <Card.Title className='item-card-body-title'>{data.artist} - {data.album}</Card.Title>
                    <Card.Text className='item-card-body-text'> <strong>Artista: </strong> {data.artist} </Card.Text>
                    <Card.Text className='item-card-body-text'> <strong>Album: </strong> {data.album} </Card.Text>
                    <Card.Text className='item-card-body-text'> <strong>Año: </strong> {data.year} </Card.Text>
                    <Card.Text className='item-card-body-text'> <strong>Precio: </strong>${data.price} </Card.Text>
                    <Button className='item-btn' variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
)
}
export default ItemDetail