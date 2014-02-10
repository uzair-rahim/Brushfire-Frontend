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
				
			},
			events : {
				"click #goback" : "backToSettings"
			},
			backToSettings : function(){
				var width = $(window).width();
				$("#app").animate( { scrollLeft: -width }, 150 );
			},
			serializeData : function(){
				var jsonObject = new Object();
					jsonObject.language = App.Language;
				return jsonObject;
			}
		});

		return LayoutAppSettings;
	}
);