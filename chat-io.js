const io = require('socket.io')()

io.on('connection', (socket) => {
	console.log('Conectado');
})

io.listen(60000)