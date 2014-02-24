define([
	'backbone'
	],
	function(Backbone){
		var Job = Backbone.Model.extend({
			url : '',
			defaults : {
				name		: null,
				shifts		: null,
				createdby	: null
			},
			initialize : function(){
				console.log('Job model initialize...')
			}

		});

		return Job;
	}
);