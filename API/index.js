const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/aviones', function(req, res){
    
    const aviones = [
        {id: "1", icon: 'plane', text: "Boening"},
        {id: "2", icon: 'fighter-jet', text: "Airbus"},
        {id: "3", icon: 'plane', text: "Jet"},
        {id: "4", icon: 'fighter-jet', text: "Tupolev"},
        {id: "5", icon: 'plane', text: "Bombardier"}

    ];
    
    res.send(aviones);
})

app.post('/form', function (req, res) {

    const { inputNombre, inputEmail, inputCelular, inputEdad } = req.body

    let usuario = {
        Nombre: inputNombre,
        Email: inputEmail,
        Celular: inputCelular,
        Edad: inputEdad
    }

    res.send(usuario);
});

app.listen(3004, () => {
    console.log("El servidor se inició en el puerto 3004")
})