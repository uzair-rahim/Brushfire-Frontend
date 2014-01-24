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
				"click #nav-menu li a"	: "changeView",
				"click #nav-extras"		: "showMoreOptions", 
				"click #logout"			: "logout"
			},
			onShow : function(){
				console.log("Layout Application onShow...");
				$(document).click(function(event){
					var target = $(event.target).is("#nav-extras");
					if(!target){
						$("#nav-extras-dropdown").css("display", "none");
					}
				});
			},
			changeView : function(event){
				var menuItem = $(event.target).data("menu");
				console.log("Change view to "+menuItem+"...");

				switch(menuItem){
					case "profile":
						var view = new ViewProfile();
						this.body.show(view);
						App.setSessionView('profile');
						Utils.setBreadcrumb({"Profile" : " "});
					break;
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
			showMoreOptions : function(){
				$("#nav-extras-dropdown").css("display", "block");
			},
			logout : function(){
				App.router.controller.logout();
			}
		});

		return LayoutApp;
	}
);