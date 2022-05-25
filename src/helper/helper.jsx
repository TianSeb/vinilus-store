import { collection ,getDoc, getDocs, doc, getFirestore, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
    const itemByYear = query(vinilos,where('year','>=',catIdConvert),where('year','<=',(catIdConvert + 9)))

    try {
        const snapshot = isNaN(catIdConvert) ? await getDocs(vinilos) : await getDocs(itemByYear)
        const itemList = snapshot.docs.map( d => ({'id': d.id, ...d.data()}))

        setLoading(false)
        setState(itemList)
        
    } catch(e) {
        console.log(e)
    }
}

export const useNavigateHook = (path) => {
    return useNavigate(path)
}
