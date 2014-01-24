define([
	'backbone'
	],
	function(Backbone){
		var Login = Backbone.Model.extend({
			url : '/brushfire/spring/authenticate/login',
			defaults : {
				emailaddress: null,
				password 	: null
			},
			initialzie : function(){
				console.log('Login model initialzie...')
			}

		});

		return Login;
	}
);