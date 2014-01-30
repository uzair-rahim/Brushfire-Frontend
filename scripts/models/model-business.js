define([
	'backbone'
	],
	function(Backbone){
		var Business = Backbone.Model.extend({
			url : '',
			defaults : {
				id		: null,
				name	: null,
				address : null
			},
			initialzie : function(){
				console.log('Business model initialzie...')
			}

		});

		return Business;
	}
);