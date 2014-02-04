define([
	'jquery',
	'app',
	'utils',
	'marionette',
	'scripts/views/view-profile',
	'scripts/views/view-jobs',
	'scripts/collections/collection-jobs',
	'hbs!templates/template-layout-app'
	],
	function($, App, Utils, Marionette, ViewProfile, ViewJobs, CollectionJobs, TemplateLayoutApp){
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

						App.setSessionView('jobs');
						Utils.setBreadcrumb({"Jobs": " "});
					break;
				}
			},
			profileSettings : function(){
				var view = new ViewProfile();
				this.body.show(view);
				App.setSessionView('profile');
				Utils.setBreadcrumb({"Profile" : " "});
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