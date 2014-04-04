define([
	'backbone',
	'utils',
	'scripts/models/model-candidate'
	],
	function(Backbone, Utils, Candidate){
	'use strict';

	var Candidates = Backbone.Collection.extend({
		model : Candidate,
		urlRoot : '/brushfire/services/rest/job/',
		initialize : function(options){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			this.guid = options.guid;
		},
		url : function(){
			var url = this.urlRoot + this.guid+"/candidates/all";
			return url;
		}
	});

	return Candidates;

	}
);