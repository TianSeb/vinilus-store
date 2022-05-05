import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import { vinylDb }  from '../../data/db'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const { catId } = useParams('')
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => 
    {
    setLoading(true)
    const getRecordDb = new Promise((res) => {
        setTimeout(() => {
            const catIdConvert = parseInt(catId) 

            isNaN(catIdConvert) ?
                res(vinylDb)
                : res(vinylDb.filter( vinyl => vinyl.year >= catIdConvert && vinyl.year <= (catIdConvert + 9)))
            },2000)
        })

    getRecordDb.then( (result) => {
            setRecords(result)
        })
        .finally(() => setLoading(false))
    }
        ,[catId])

return loading ? (<h2>Cargando Items...</h2>) : (<ItemList items={records}/>)   
}
export default ItemListContainer