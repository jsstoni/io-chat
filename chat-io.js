const io = require('socket.io')()

io.on('connection', (socket) => {
	socket.on('recibe', (data) => {
		socket.emit('message', data)
	})
})

io.listen(60000)