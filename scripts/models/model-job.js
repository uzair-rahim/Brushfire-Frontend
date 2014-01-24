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
			initialzie : function(){
				console.log('Job model initialzie...')
			}

		});

		return Job;
	}
);