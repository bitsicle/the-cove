exports.index = function(req, res) {
	res.render('default', {
		title: 'The Cove'
	});
}

exports.search = function(req, res) {
	res.render('search', {
		title: 'Results'
	});
}
