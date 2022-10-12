import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import '../../styles/ItemList.css'
import { gFetch } from '../../helpers/gFetch'
import { useParams } from 'react-router-dom'

const ItemList = () => {
    const [productos, setProductos ] = useState([])
    const { idCategoria } = useParams()

    
    useEffect(()=>{
        if (idCategoria) {
            gFetch()
            .then( resSgte => setProductos(resSgte.filter(producto => producto.categoria === idCategoria)))
            .catch( err => console.log(err))
        }

        else {
            gFetch()
            .then( resSgte => setProductos(resSgte))
            .catch( err => console.log(err))
        }
      
}, [idCategoria])



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

export default ItemList