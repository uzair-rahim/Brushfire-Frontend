define([
	'backbone',
	'utils',
	'scripts/models/model-employer-profile'
	],
	function(Backbone, Utils, EmployerProfile){
	'use strict';

	var EmployerProfiles = Backbone.Collection.extend({
		model : EmployerProfile,
		urlRoot : '/brushfire/spring/employer',
		initialize : function(options){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			this.guid = options.guid;
		},
		url : function(){
			var url = this.urlRoot + "/?guid="+this.guid;
			return url;
		}
	});

	return EmployerProfiles;

	}
);