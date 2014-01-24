define([
	'backbone',
	'utils',
	'scripts/models/model-job'
	],
	function(Backbone, Utils, Job){
	'use strict';

	var Jobs = Backbone.Collection.extend({
		model : Job,
		urlRoot : '/brushfire/spring/job/list',
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
		},
		url : function(){
			var url = this.urlRoot + "/?ownerId="+Utils.getGUID();
			return url;
		}
	});

	return Jobs;

	}
);