# connect-json
add extra function res.json to return data

### Code

* when you use express or connect

> install middlerware
```shell
npm install connect-json-middleware
```

> use it

```shell
var app = require('express')
var connect = require('connect')

var connectJson = require('connect-json-middleware')

var server = app || connect
var port = 9999

server
	.use(connectJson)
	.use('/getjson', function (req, res) {
		res.json({status: 200})
	}).listen(port)
```

> view broswer: localhost:9999/getjson
