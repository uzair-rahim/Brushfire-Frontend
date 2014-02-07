define([
	'backbone'
	],
	function(Backbone){
		var User = Backbone.Model.extend({
			url : '/brushfire/spring/register/register',
			defaults : {
				firstname	: null,
				lastname 	: null,
				emailaddress: null,
				password 	: null
			},
			initialize : function(){
				console.log('User model initialize...')
			}

		});

		return User;
	}
);