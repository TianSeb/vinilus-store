import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { vinylDb } from "../../data/db"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const { vinylId } = useParams()
  const [vinyl, setVinyl] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    (async() => {
        const vinylData = await getVinylDetail()
        if(vinylData) {
            setVinyl(vinylData)
            setLoading(false)
        }
    })()
  }, [vinylId])

  const getVinylDetail = () => {
      return new Promise((resolve) => {
      setTimeout(() => {
      resolve(vinylDb.find( vinyl => vinyl.id == vinylId))
          }, 2000);
      })
  }
  return loading ? <h2 style={{textAlign:'center', marginTop:'15%'}}>Cargando Item...</h2> : <ItemDetail data={vinyl} />
}
export default ItemDetailContainer