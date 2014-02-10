define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-settings'
],function($, Vldt, App, Utils, Marionette, TemplateViewSettings){
	'use strict';

	var ViewSettings = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewSettings,
		events : {
			
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Settings initialized...");
			App.setSessionView('account');
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return ViewSettings;
	
});