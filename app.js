const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    //console.log(__dirname)
    res.render('index', {titulo: "mi título dinámico"})
})

app.get('/servicios', (req, res) => {
    res.render('servicios', {tituloServicios: "Título servicios"})
})

app.use((req, res, next) => {
    res.status(404).render('404',{
        titulo: "404",
        descripcion: 'Titulo de mi web'    
    })
})

app.listen(port, () => {
    console.log('Servidor a su servicio en puerto', port)
})

