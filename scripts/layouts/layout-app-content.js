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
			className : '',
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
			onShow : function(){
				var user = Utils.getUser();
				var employerIds = user.employerIds;
				if(employerIds === null){
					Utils.showSettings();
				}
			},
			changeView : function(event){
				var menuItem = $(event.target).data("menu");
				console.log("Change view to "+menuItem+"...");

				switch(menuItem){
					case "jobs":
						var that = this;
						var jobs = new CollectionJobs({owner:Utils.getGUID()});
							jobs.fetch({
								success : function(collection, response){
									var view = new ViewJobs({model:response});
									that.appBody.show(view);
								}
							});
					break;
					case "network":
						var that = this;
						var view = new ViewNetwork();
							this.appBody.show(view);
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