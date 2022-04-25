import { useEffect, useState } from 'react'
import { vinylDb }  from '../db'
import Item from "./Item"
import './styles/ItemList.css'

const ItemList = () => {
    const [records, setRecord] = useState([]);

    useEffect(() => {
    const getRecordDb = new Promise((res,rej) => {
        setTimeout(() => {
            res(vinylDb)
        })
            },2000)

    getRecordDb.then( (result) => {
        setRecord(result)
    }).catch((err) => {
        console.log("error loading db")
    })}
        ,[])

    return (
        <div className='wrapper'>
            {
                records.map((item) =>
                    <Item
                        key={item.id}
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