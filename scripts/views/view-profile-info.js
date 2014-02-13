
define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-profile-info'
],function($, Vldt, App, Utils, Marionette, TemplateViewProfileInfo){
	'use strict';

	var ViewProfileInfo = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewProfileInfo,
		events : {
			
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Profile initialized...");
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.employerProfiles = this.model;
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return ViewProfileInfo;
	
});