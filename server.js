var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path'),  
  exphbs = require('express-handlebars')

// To read POST data, we use the body-parser middleware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// Tell the app that the templating engine is Handlebars.
app.engine('handlebars',
  // Pass default configuration to express-handlebars module.
  exphbs({
    defaultLayout: 'main'
  }))

// Tell the app that the view engine is also Handlebars.
app.set('view engine', 'handlebars')

// Serve static files.

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname + '/public/css/'))
// redirect material-design-lite JS and CSS
app.use('/js/material.min.js', express.static(__dirname + '/node_modules/material-design-lite/dist/material.min.js'))
app.use('/css/material.min.css', express.static(__dirname + '/node_modules/material-design-lite/dist/material.min.css'))


// Use the controllers.
app.use(require('./controllers'))

// Tell Express on which port to listen.
var port = Number(process.env.PORT || 8080)
app.listen(port, function() {
  console.log('listening on port ' + port)
})
