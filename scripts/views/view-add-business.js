define([
	'jquery',
	'jquerycookie',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-add-business'
], function($, Cookie, Vldt, App, Utils, Marionette, TemplateAddBusiness){
	'use strict';

	var ViewAddBusiness = Marionette.ItemView.extend({
		tagName : 'div',
		className : 'app-layout',
		template: TemplateAddBusiness,
		events : {
			"click #dont-add" : "dontAddBusiness",
			"click #add-business" : "addBusiness"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Add Business initialized...");
		},

		dontAddBusiness : function(){
			App.router.controller.findbusiness();
		},

		addBusiness : function(){
			App.router.controller.accountverification();
		}
		
	});

	return ViewAddBusiness;
});