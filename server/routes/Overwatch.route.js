var express = require('express');
var request = require('request');
module.exports.publicRoutes = function(){
	var router = express.Router();
	var Array =[];

    
	return router;
}

module.exports.privateRoutes= function(){

	var router = express.Router();

    router.get('/profile/:battletagName/:battletagID', (req, res, next)=>{
        var battletagName = req.params.battletagName;
        var battletagID = req.params.battletagID;
        var request = require("request");

        request({
          uri: "https://eu.api.battle.net/d3/profile/"+battletagName+"/"+battletagID+"",
          method: "GET",
          timeout: 10000,
          followRedirect: true,
          maxRedirects: 10
        }, function(error, response, body) {
          console.log(response);
        });

    });
	return router;

}