import Item from "../Item"
import './ItemList.css'

const ItemList = ({items}) => {
    return (
        <div className='wrapper'>
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
        </div>
    );
}

export default ItemList