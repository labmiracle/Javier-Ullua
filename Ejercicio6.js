const carrito = {
    productos: [
    {
    nombre: 'papel higienico',
    unidades: 4,
    precio: 5
    },
    {
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
    }
    ],
    get precioTotal() {
        return this.productos.reduce((total, producto)=> total + producto.unidades * producto.precio, 0)
    }
    };

    console.log(carrito.precioTotal);

    carrito.productos.push({
        nombre: 'leche',
        unidades: 3,
        precio: 4
    })

    console.log(carrito.precioTotal);