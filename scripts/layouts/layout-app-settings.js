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
				"click .close"					: "backToApp",
				"click #settings-list ul li a"	: "selectSetting"
			},
			backToApp : function(){
				var width = $(window).width();
				$("#app").animate( { scrollLeft: -width }, 150 );
			},
			selectSetting : function(event){
				$("#settings-list ul li a").removeClass("selected");
				var link = $(event.target);
					link.addClass("selected");
				
				$(".form-header .heading").text(link.text());
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