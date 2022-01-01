const { io } = require('../index');
//mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
     });
     client.on('mensaje', (payload)=>{
        console.log('mensajeee', payload.nombre);
        io.emit('mensaje', {admin: 'Nuevo mensaje del administrador.sx'});
     });
     client.on('emitirmensaje', (payload)=>{
     // io.emit('nuevoMensaje',  'Hello Peter');//emite a todos
     client.broadcast.emit('nuevoMensaje', payload); //emite a todos, menos al que envia el mensaje
   });
  });