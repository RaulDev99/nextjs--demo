import {firestore} from '../../../firebase/admin'

export default (request, response) => {
    const { query } = request
    const { id } = query
  
    firestore
      .collection("almacen")
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data()
        const id= doc.id
        // const object={...data,id}
        response.json({
          props:{
            ...data,
            id
          }
          
        })
        console.log(`la id es la siguiente ${id}`)
      })
      .catch(() => {
        response.status(404).end()
      })
  }