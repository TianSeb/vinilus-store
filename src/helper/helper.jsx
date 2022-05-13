import { vinylDb } from '../data/db.js'

export const getRecordDb = async (catId, setState,setLoading) => {

    const getDb = (catId) => {
        return new Promise((res) => {
            setTimeout(() => {
                const catIdConvert = parseInt(catId) 
    
                isNaN(catIdConvert) ?
                    res(vinylDb)
                    : res(vinylDb.filter( vinyl => vinyl.year >= catIdConvert && vinyl.year <= (catIdConvert + 9)))
                },100)
            })
    } 

    try {
        const resp = await getDb(catId)
        setState(resp)
        setLoading(false)
    } catch (e) {
        console.log(e)
    }
}

export const getProductsById = async (vinylId) => {

    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(vinylDb.find( vinyl => vinyl.id == vinylId))
        }, 100);
    })
}
