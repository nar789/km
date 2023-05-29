;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			//1. enetry point
			app.listen(5530,function(){
			  console.log('kimchi Server listen on *:5530');
			});
		}


		var publicReturn = {
			route:route,
		}
		return publicReturn;
	}

})();



