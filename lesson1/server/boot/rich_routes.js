module.exports = function(app) {
	var router = app.loopback.Router();
	router.get('/ping', function(req, res, next) {
		res.send('Pongarooooski');
	});
	app.use(router);
};

