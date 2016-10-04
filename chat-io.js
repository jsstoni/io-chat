const express = require('express')
const app = module.exports = express()
const path = require('path')
const port = process.env.PORT || 8080

app.set("view options", {layout: false})
app.use(express.static(path.join(__dirname, 'client-view')))

app.get('/', (req, res) => {
	res.render('index.html')
})

const server = app.listen(port, () => {
	console.log('Server listening on port ' + port)
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
	socket.on('recibe', (data) => {
		socket.emit('message', data)
	})
})