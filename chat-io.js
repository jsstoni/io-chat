const io = require('socket.io')()

io.on('connection', (socket) => {
	socket.on('recibe', (data) => {
		console.log(data)
	})
})

io.listen(60000)