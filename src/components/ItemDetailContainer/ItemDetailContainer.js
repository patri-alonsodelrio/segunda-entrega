import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../helpers/gFetch'
import Item from '../Item/Item'

const ItemDetailContainer = () => {
    const [productos, setProductos ] = useState([])
    const { idProducto } = useParams()

    useEffect(()=>{
        if (idProducto) {
            gFetch()
            .then( resSgte => setProductos(resSgte.filter(producto => producto.id === idProducto)))
            .catch( err => console.log(err))
        }

        else {
            gFetch()
            .then( resSgte => setProductos(resSgte))
            .catch( err => console.log(err))
        }
}, [idProducto])

    return (
        <div className='container-wid'>
        <div className='products'>
        
        {productos.map (prod =>  <Item
                key={prod.id}
                id={prod.id}
                imagen={prod.foto}
                nombre={prod.name}
                precio={prod.price}/> )
        }
                </div>
      </div>
  )
}

export default ItemDetailContainer