
module.exports = function (req, res, next) {
	res.json = function (obj) {
		res.setHeader('Content-Type', 'application/json; charset=utf-8')
		res.end(JSON.stringify(obj), 'utf8')
	}
	next()
}
