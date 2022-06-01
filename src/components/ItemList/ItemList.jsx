import { Container } from 'react-bootstrap'
import Item from "../Item"
import './ItemList.css'

const ItemList = ({items}) => {
    return (
        <Container className='wrapper'>
            {
                items.map((item) =>
                    <Item
                        key={item.id}
                        id={item.id}
                        artist={item.artist}
                        album={item.album}
                        year={item.year}
                        img={item.img}
                    />
                )
            }
        </Container>
    );
}

export default ItemList