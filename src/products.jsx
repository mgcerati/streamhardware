export const products = [
    {
        id:'1',
        name:'Monitor Dell',
        price:10000,
        stock:12,
        img: '/monitor.jpg',
        category:'Monitores'
    },
    {
        id:'2',
        name:'Teclado Razor',
        price: 3000,
        stock:20,
        img: '/teclado.jpg',
        category:'Teclados'
    },
    {
        id:'3',
        name:'Mouse Razor',
        price:1500,
        stock:100,
        img: '/mouse.jpg',
        category:'Mouse'
    },
    {
        id:'4',
        name:'Gabinete Cougar',
        price: 5000,
        stock: 30,
        img: '/gabinete.jpg',
        category:'Gabinete'
    }
];

export const traerProductos = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        
    }, 2000);
    resolve(products)
});