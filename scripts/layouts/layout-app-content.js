define([
	'jquery',
	'app',
	'utils',
	'marionette',
	'scripts/views/view-jobs',
	'scripts/views/view-network',
	'scripts/collections/collection-jobs',
	'hbs!templates/template-layout-app-content'
	],
	function($, App, Utils, Marionette, ViewJobs, ViewNetwork, CollectionJobs, TemplateLayoutAppContent){
		'use strict';

		var LayoutAppContent = Marionette.Layout.extend({
			tagName : 'div',
			className : 'app-content-body',
			template : TemplateLayoutAppContent,
			regions : {
				appHeader 	: "#app-header",
				appBody 	: "#app-body"
			},
			events : {
				"click #nav-menu li a"	: "changeView",
				"click #settings"		: "settings",
				"click #logout"			: "logout"
			},
			changeView : function(event){
				var menuItem = $(event.target).data("menu");
				console.log("Change view to "+menuItem+"...");

				switch(menuItem){
					case "jobs":
						App.router.controller.jobs();
					break;
					case "network":
						App.router.controller.network();
					break;
					case "applicants":
						App.router.controller.applicants();
					break;
				}
			},
			settings : function(){
				Utils.showSettings();
			},
			logout : function(){
				App.router.controller.logout();
			},
			serializeData : function(){
				var jsonObject = new Object();
					jsonObject.language = App.Language;
				return jsonObject;
			}
		});

		return LayoutAppContent;
	}
);