define([
	'backbone'
	],
	function(Backbone){
		var Candidate = Backbone.Model.extend({
			urlRoot : '/brushfire/services/rest/job/',
			defaults : {
				
			},
			initialize : function(options){
				console.log('Candidate model initialize...');
			},
			url : function(){
				var url = this.urlRoot;

				if(this.attributes.action === "update"){
					url += this.attributes.jobGuid+"/candidates/"+this.attributes.guid;
				}
				  
				return url;
			}

		});

		return Candidate;
	}
);