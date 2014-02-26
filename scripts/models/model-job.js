define([
	'backbone'
	],
	function(Backbone){
		var Job = Backbone.Model.extend({
			urlRoot : '/brushfire/services/rest/job/',
			defaults : {
				
			},
			url : function(){
				var url = this.urlRoot;
				return url;
			},
			initialize : function(){
				console.log('Job model initialize...')
			}

		});

		return Job;
	}
);