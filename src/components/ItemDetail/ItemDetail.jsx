import { Container, Row, Col, Card, Button } from "react-bootstrap"

const ItemDetail = ({data}) => {

return (
<>
    <Container style={{backgroundColor:"purple", marginTop: '40px'}}>
        <Row style={{margin:'30px 0', position:'absolute',transform:'translateX(30%)'}}> 
            <Col style={{backgroundColor:'',padding:'0'}} xs={12} sm={12} md={8} lg={6}>
                <Card.Img variant="top" src={data.img} style={{width: '25rem', height: '25rem', textAlign:"center"}} /> 
            </Col>
            <Col style={{backgroundColor:'',padding:'0'}} xs={12} sm={12} md={8} lg={6}>
            <Card style={{ width: '25rem', height: '25rem'}}>
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title style={{margin: '15px 0 35px 0'}}>{data.artist} - {data.album}</Card.Title>
                    <Card.Text> <strong>Artista: </strong> {data.artist} </Card.Text>
                    <Card.Text> <strong>Album: </strong> {data.album} </Card.Text>
                    <Card.Text> <strong>Año: </strong> {data.year} </Card.Text>
                    <Card.Text> <strong>Precio: </strong>${data.price} </Card.Text>
                    <Button variant="primary" style={{margin: '15px 0 10px 0'}}>Comprar</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
</>
)
}
export default ItemDetail