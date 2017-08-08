var express = require('express')
var bodyParser = require('body-parser')
var recastai = require('recastai').default


var connect = new recastai.connect('9560a810af3ae3a49e0a3fc64f6d430b')

var app = express()

/* Server setup */
app.set('port', 5000)
app.use(bodyParser.json())
app.post('/', function(req, res) {
  connect.handleMessage(req, res, onMessage)
})

function onMessage (message) {
  // Get the content of the message
  var content = message.content

  // Get the type of the message (text, picture,...)
  var type = message.type

  // Add a reply, and send it
  message.addReply([{ type: 'text', content: 'Hello, world' }])
  message.reply()
}
app.listen(5000);