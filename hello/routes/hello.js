
/*
 * GET home page.
 */

exports.view = function(req, res){
	var YouyuanCao = req.params.YouyuanCao;
	
	console.log('Name is ' + YouyuanCao);
    res.render('index', {
  	  'name': YouyuanCao,
  });
};
