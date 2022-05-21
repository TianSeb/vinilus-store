import { collection ,getDoc, getDocs, doc, getFirestore } from "firebase/firestore";


export const getProductById = async (id) => {
    
    const db = getFirestore()
    const snap = await getDoc(doc(db, 'itemList', id))

        if (snap.exists()) {
            return ({'id': snap.id, ...snap.data()})
        }
        else {
            return null
        }
} 

export const getItemsFirebase = async (catId, setState,setLoading) => {

    const catIdConvert = parseInt(catId) 
    const db = getFirestore()
    const vinilos = collection(db,'itemList')

     try {
        const snapshot = await getDocs(vinilos)
        const itemList = snapshot.docs.map( d => ({'id': d.id, ...d.data()}))

        setLoading(false)
        return isNaN(catIdConvert) ?
                    setState(itemList) 
                    :  setState(itemList
                                .filter( vinyl => vinyl.year >= catIdConvert && vinyl.year <= (catIdConvert + 9)))
        
     } catch(e) {
        console.log(e)
     }
}