
// Array de productos
 const products = [
    { id: '1', name: 'Mate Imperial Blanco', price: 100, stock: 10, categoria: 'Mates', foto:'img1'},
    { id: '2', name: 'Termo Stanley Blanco', price: 200, stock: 10, categoria: 'Termos', foto:'img2'  },
    { id: '3', name: 'Mate Imperial Negro', price: 320, stock: 10, categoria: 'Mates', foto:'img3'  },
    { id: '4', name: 'Termo Stanley Negro', price: 340, stock: 10, categoria: 'Termos', foto:'img4'  },
    { id: '5', name: 'Mate Clasico Negro', price: 120, stock: 10, categoria: 'Mates', foto:'img5'  },
    { id: '6', name: 'Termo Clasico Gris', price: 140, stock: 10, categoria: 'Termos', foto:'img6'  },
    { id: '7', name: 'Mate Ceramica', price: 150, stock: 10, categoria: 'Mates', foto:'img7'  },
    { id: '8', name: 'Stanley Vacumm', price: 170, stock: 10, categoria: 'Termos', foto:'img8'  }
 ]

export const gFetch = () => {
    return new Promise (( res, rej ) => {
        res(products)
    })
}