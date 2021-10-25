//importamos express
const express = require("express");

//creamos la instancia de express
const app = express();

//middleware de express para servir estaticos (imagenes, audio, etc)
app.use(express.static('public'));


//creamos un middleware que responda a nuestra peticion
// middleware -> funcion con req y res que decide que se responde
// endpoint -> cada ruta que tiene el api, pej /api/hello
// app.verbo('/path/que/cargamos' (peticion, respuesta) => {
//    res.send('respuesta');
//}))
app.get('/api/hello', (req, res) => {
    console.log('query', req.query)
    res.send(`hola ${req.query.name} 4`)
});

app.get('/api/goodbye', (req, res) => {
    res.send('adios laura');
});

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'televion phillips 32"',
            image: '/images/tvphillips.png',
            promoImage: '/images/2x1.png',
            price: 1200
        },
        {
            id: 2,
            name: 'blueray phillips"',
            image: '/images/blueray.png',
            promoImage: '/images/10percent.png',
            price: 600
        },
        {
            id: 3,
            name: 'lavadora balay"',
            image: '/images/lavadora.png',
            promoImage: '/images/none.png',
            price: 800
        }
    ];
    res.send(JSON.stringify(products))
});



//escuchamos con el servidor en el puerto 8080
app.listen(8080, console.log('listening 8080'));
