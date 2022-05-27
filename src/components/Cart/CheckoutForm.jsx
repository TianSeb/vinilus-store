import { Button, Form, Card, Alert } from 'react-bootstrap'

const CheckoutForm = ({setForm, form, orderPlaced, error}) => {
    return (
        <Card style={{width:'400px'}}>
        <Card.Body>
            <h2 className='text-center mb-4'> Orden de Compra</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="@email" 
                    onChange={(e)=> setForm({...form, email: e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmEmail">
                <Form.Label>Confirmar email</Form.Label>
                <Form.Control type="email" placeholder="@email" 
                    onChange={(e)=> setForm({...form, emailConfirmation: e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Nombre y Apellido" onChange={(e)=> setForm({...form, name:
                    e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTelephone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Teléfono" onChange={(e)=> setForm({...form, phone: e.target.value})}
                    required />
            </Form.Group>
            <Button className='w-100' type="submit" onClick={orderPlaced}>
                Confirmar
            </Button>
        </Form>
        </Card.Body>
        </Card>
    )
}

export default CheckoutForm