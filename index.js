const { request, response } = require('express');
const express = require('express');
const { Server } = require('socket.io');
const PORT = 5050;

const app = express();
const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Controller:' : 'http://localhost:5050/controller',
            'Display:' : 'http://localhost:5050/display',
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });

//const staticController = express.static('public-controller');
//const staticDisplay = express.static('public-display');

app.use('/controller', express.static('public-controller'));
app.use('/display', express.static('public-display'));
app.use(express.json());

/*___________________________________________

1) Create an endpoint to GET a validation message to test if the endpoint is working
_____________________________________________ */
// Empezamos con poniendo una variable llamada app para despues agreagar el endopoint que en este caso es el GET
// despues tenemos que poner un "/" para luego colocar el response y el request, siguiendo con esto
// debemos hacer un arraw function para que luego pongamos el response de nuevo ya que es lo que nosotros queremos que el
// el servidor responsa agrgandole un metodo lend el cual nos va a ayudar a que podamos poner el mensaje
// siguiendo con esto despues con corchetes "{message}" tal cual asi y ponemos message ya que es un mensaje lo que queremos enviar
// para ya llegar a lo ultio que viene siendo el texto que nosotros queremos hacer que se refleje
// y si todo esta bien se supone que la consola debera mostrarnos este mensaje.

/*app.get("/", (response,request) => {
    response.lend({message} = "no quiero vivir mas");
})*/

/*___________________________________________

2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

ioServer.on('connection', (socket) => {


});

/*___________________________________________

3) Create an endpoint to POST user score and print it
_____________________________________________ */
