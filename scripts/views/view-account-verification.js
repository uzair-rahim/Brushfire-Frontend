define([
	'jquery',
	'jquerycookie',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-account-verification'
], function($, Cookie, Vldt, App, Utils, Marionette, TemplateAccountVerification){
	'use strict';

	var ViewAccountVerification = Marionette.ItemView.extend({
		tagName : 'div',
		className : '',
		template: TemplateAccountVerification,
		events : {
			"click #continue" : "continue",
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Account Verification initialized...");
			App.setSessionView('accountVerification');
		},

		continue : function(){
			App.router.controller.jobs();
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
		
	});

	return ViewAccountVerification;
});