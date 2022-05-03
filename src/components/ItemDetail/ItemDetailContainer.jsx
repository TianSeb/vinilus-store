import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { vinylDb } from "../../data/db"

import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const { vinylId } = useParams()
  const [vinyl, setVinyl] = useState({})

useEffect(() => {

    (async() => {
        const vinylData = await getVinylDetail()
        if(vinylData) {
            setVinyl(vinylData)
        }
    })()

}, [vinylId])

const getVinylDetail = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(vinylDb.find( vinyl => vinyl.id == vinylId))
        }, 200);
    })
}
  return (
    <ItemDetail data={vinyl} />
  )
}
export default ItemDetailContainer