import { Row, Col, Card, Button } from "react-bootstrap"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import NotFound404 from "../../pages/NotFound404"
import ItemCount from "../ItemCount"
import LinkContainer from "react-router-bootstrap/LinkContainer"
import './ItemDetail.css'

const ItemDetail = ({data}) => {

    const { addItem } = useCartContext()

    const [show, setShow] = useState(true)

    const onAdd = (qty) => {
        addItem({...data, amount:qty})
        setShow(false)
    }

    return (
     (!data) ? <NotFound404/>
    :
    <>
        <Card style={{maxHeight:'800px', maxWidth:'800px', margin:'0 auto', float:'none'}}>
            <Row className="row">
                <Col className='col-md-6'>
                    <Card.Img src={data.img} alt="x" style={{width:'100%', minHeight:'300px', minWidth:'300px'}} />
                </Col>
                <Col className="col-md-6">
                    <div style={{marginTop:'30px'}} >
                    <Card.Title style={{textAlign:'center', marginBottom:'25px'}} >{data.artist} - {data.album}</Card.Title>
                    <Card.Text> <strong>Artista: </strong> {data.artist} </Card.Text>
                    <Card.Text> <strong>Album: </strong> {data.album} </Card.Text>
                    <Card.Text> <strong>Año: </strong> {data.year} </Card.Text>
                    <Card.Text> <strong>Precio: </strong>${data.price} </Card.Text>
                    { 
                        show ?
                        <ItemCount onAdd={onAdd} initial={1} stock={data.stock}/>
                        :
                        <Card.Text>
                            <LinkContainer to={'/'}><Button className='item-btn' variant="primary">Seguir Comprando</Button></LinkContainer>
                            <LinkContainer to={'/cart'} style={{marginLeft:'10px'}}><Button className='item-btn' variant="primary">Terminar Compra</Button></LinkContainer>
                        </Card.Text>
                    }
                    </div>
                </Col>
            </Row>
        </Card>
    </>
    )
}
export default ItemDetail