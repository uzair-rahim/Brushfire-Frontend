define([
	'backbone'
	],
	function(Backbone){
		var JobTypes = Backbone.Model.extend({
			urlRoot : '/brushfire/services/rest/jobtypes',
			defaults : {
				
			},
			url : function(){
				var url = this.urlRoot;
				return url;
			},
			initialize : function(){
				console.log('Job types model initialize...')
			}

		});

		return JobTypes;
	}
);