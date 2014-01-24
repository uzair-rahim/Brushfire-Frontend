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
			initialzie : function(){
				console.log('User model initialzie...')
			}

		});

		return User;
	}
);