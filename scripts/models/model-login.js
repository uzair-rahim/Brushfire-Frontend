define([
	'backbone'
	],
	function(Backbone){
		var Login = Backbone.Model.extend({
			urlRoot : '/brushfire/services/rest/auth/login',
			defaults : {
				email 		: null,
				password 	: null
			},
			url : function(){
				var url = this.urlRoot + "/" + this.email + "/" + this.password;
				return url;
			},
			initialize : function(options){
				this.email = options.email;
				this.password = options.password;
				console.log('Login model initialize...')
			}

		});

		return Login;
	}
);