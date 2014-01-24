define([
	'backbone',
	'scripts/models/model-user'
	],
	function(Backbone, User){
	'use strict';

	var Users = Backbone.Collection.extend({
		model : User,
		urlRoot : '/brushfire/spring/user',
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
		},
		url : function(){
			url = this.urlRoot
			return url;
		}
	});

	return Users;

	}
);