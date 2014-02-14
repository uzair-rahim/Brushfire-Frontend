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
			className : '',
			template : TemplateLayoutAppSettings,
			regions : {
				body : "#settings-body"
			},
			events : {
				"click button#closeSettings" : "backToApp",
			},
			backToApp : function(){
				var width = $(window).width();
				$("#app").animate( { scrollLeft: -width }, 150 );
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