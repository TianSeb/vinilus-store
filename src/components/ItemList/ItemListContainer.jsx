import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getItemsFirebase } from '../../helper/helper'
import { Container } from 'react-bootstrap'
import ItemList from './ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const { catId } = useParams('')
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => 
        {
            setLoading(true)
            getItemsFirebase(catId,setRecords,setLoading)
        }
        ,[catId])

    return loading ? (<h2>Cargando Items...</h2>) : (<Container><ItemList items={records}/></Container>)   
}

export default ItemListContainer