define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-profile'
],function($, Vldt, App, Utils, Marionette, TemplateViewProfile){
	'use strict';

	var ViewProfile = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewProfile,
		events : {
			
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Profile initialized...");
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return ViewProfile;
	
});