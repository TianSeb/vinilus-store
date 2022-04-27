import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { vinylDb }  from '../data/db'
import './styles/ItemListContainer.css'


const ItemListContainer = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
    const getRecordDb = new Promise((res) => {
        setTimeout(() => {
            res(vinylDb)
            },2000)
        })

    getRecordDb.then( (result) => {
        setRecords(result)
    }).catch((err) => {
        console.log("error loading db")
    })}
        ,[])

return (
    <div className='item-list-container'>
        <ItemList items={records}/>
    </div>

)
}
export default ItemListContainer