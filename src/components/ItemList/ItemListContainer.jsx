import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import { vinylDb }  from '../../data/db'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const { year } = useParams('')
    const [records, setRecords] = useState([]);

    useEffect(() => {
    const getRecordDb = new Promise((res) => {
        setTimeout(() => {
            if(year){
                let yearConvert = parseInt(year)
                res(vinylDb.filter( vinyl => vinyl.year >= yearConvert && vinyl.year <= (yearConvert + 9))) 
            }
                res(vinylDb)
            },200)
        })

    getRecordDb.then( (result) => {
            setRecords(result)
        }).catch((err) => {
        console.log("error loading db")
        })}
        ,[year])

return (
    <div className='item-list-container'>
        <ItemList items={records}/>
    </div>

)
}
export default ItemListContainer