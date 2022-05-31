import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from '../../helper/helper'
import { Container } from 'react-bootstrap'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const { vinylId } = useParams()
  const [vinyl, setVinyl] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async() => {
        const vinylData = await getProductById(vinylId)
            setVinyl(vinylData)
            setLoading(false)
      })()
      
  }, [vinylId])

  return loading ? 
      <h2 style={{textAlign:'center', marginTop:'15%'}}> Cargando Item... </h2> 
      : 
      <Container style={{alignItems:'center', marginTop:'5%'}}><ItemDetail data={vinyl}/></Container>
}

export default ItemDetailContainer