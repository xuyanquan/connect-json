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

app.use(connectJson)
connect.use(connectJson)
```