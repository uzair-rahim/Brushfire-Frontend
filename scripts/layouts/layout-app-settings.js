define([
	'jquery',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-layout-app-settings'
	],
	function($, App, Utils, Marionette, TemplateLayoutAppSettings){
		'use strict';

		var LayoutAppSettings = Marionette.Layout.extend({
			tagName : 'div',
			className : 'app-settings-body',
			template : TemplateLayoutAppSettings,
			regions : {
				body : "#settings-body"
			},
			events : {
				"click button#closeSettings" : "backToApp",
			},
			backToApp : function(){
				Utils.hideSettings();
			},
			serializeData : function(){
				var jsonObject = new Object();
					jsonObject.language = App.Language;
					jsonObject.employerProfiles = this.model;
				return jsonObject;
			}
		});

		return LayoutAppSettings;
	}
);