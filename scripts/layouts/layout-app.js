define([
	'jquery',
	'app',
	'utils',
	'marionette',
	'scripts/views/view-account',
	'scripts/views/view-profile',
	'scripts/views/view-jobs',
	'scripts/views/view-network',
	'scripts/collections/collection-jobs',
	'hbs!templates/template-layout-app'
	],
	function($, App, Utils, Marionette, ViewAccount, ViewProfile, ViewJobs, ViewNetwork, CollectionJobs, TemplateLayoutApp){
		'use strict';

		var LayoutApp = Marionette.Layout.extend({
			tagName : 'div',
			className : 'app-layout',
			template : TemplateLayoutApp,
			regions : {
				header  : "#app-header",
				body	: "#app-body"
			},
			events : {
				"click #nav-menu li a"		: "changeView",
				"click #account-settings"	: "accountSettings",
				"click #profile-settings"	: "profileSettings",
				"click #logout"				: "logout"
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
									that.body.show(view);
								}
							});
					break;
					case "network":
						var that = this;
						var view = new ViewNetwork();
							this.body.show(view);
					break;
				}
			},
			accountSettings : function(){
				var view = new ViewAccount();
				this.body.show(view);
			},
			profileSettings : function(){
				var view = new ViewProfile();
				this.body.show(view);
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

		return LayoutApp;
	}
);