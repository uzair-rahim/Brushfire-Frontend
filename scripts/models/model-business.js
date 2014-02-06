define([
	'backbone'
	],
	function(Backbone){
		var Business = Backbone.Model.extend({
			url : '/brushfire/services/rest/search/address/save',
			defaults : {
				userGuid	: null,
				sourceName	: null,
				sourceId 	: null,
				address1	: null,
				address2	: null,
				city		: null,
				state		: null,
				zip		 	: null,
				phone		: null,
				country		: null
			},
			initialize : function(){
				console.log('Business model initialzie...');
			}

		});

		return Business;
	}
);