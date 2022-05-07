import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from '../../helper/helper'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const { vinylId } = useParams()
  const [vinyl, setVinyl] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    (async() => {
        const vinylData = await getProductsById(vinylId)
            setVinyl(vinylData)
            setLoading(false)
      })()
  }, [vinylId])

  return loading ? <h2 style={{textAlign:'center', marginTop:'15%'}}>Cargando Item...</h2> : <ItemDetail data={vinyl} />
}
export default ItemDetailContainer