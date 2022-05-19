import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";


export const getProductsById = async (vinylId) => {
    const db = getFirestore()
    const vinilos = collection(db,'itemList')

    try {
        const q  = query(vinilos, where('id',"===", '1'))  
        const snapshot = await getDocs(q)
        const itemDetail = snapshot.docs.map( d => ({'id': d.id, ...d.data()}))

        return itemDetail
    } catch (e) {
        console.log(e)
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


// local test functions

// export const getRecordDb = async (catId, setState,setLoading) => {

//     const getDb = (catId) => {
//         return new Promise((res) => {
//             setTimeout(() => {
//                 const catIdConvert = parseInt(catId) 
    
//                 isNaN(catIdConvert) ?
//                     res(vinylDb)
//                     : res(vinylDb.filter( vinyl => vinyl.year >= catIdConvert && vinyl.year <= (catIdConvert + 9)))
//                 },100)
//             })
//     } 

//     try {
//         const resp = await getDb(catId)
//         setState(resp)
//         setLoading(false)
//     } catch (e) {
//         console.log(e)
//     }
// }

// export const getProductsById = async (vinylId) => {

//     return new Promise((resolve) => {
//     setTimeout(() => {
//     resolve(vinylDb.find( vinyl => vinyl.id == vinylId))
//         }, 100);
//     })
// }