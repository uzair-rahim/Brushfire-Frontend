define([
	'backbone'
	],
	function(Backbone){
		var Business = Backbone.Model.extend({
			url : '',
			defaults : {
				id			 : null,
				name		 : null,
				emailaddress : null,
				street		 : null,
				city		 : null,
				state		 : null,
				zip			 : null,
				country		 : null,
				phone		 : null
			},
			initialize : function(){
				console.log('Business model initialzie...')
			}

		});

		return Business;
	}
);