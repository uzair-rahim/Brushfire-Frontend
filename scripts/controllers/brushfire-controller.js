define([
		'jquery',
        'app',
        'utils',
		'marionette',
		'scripts/views/view-login',
		'scripts/views/view-register',
		'scripts/views/view-find-business',
		'scripts/views/view-add-business',
		'scripts/views/view-account-verification',
		'scripts/views/view-jobs',
		'scripts/views/view-network',
		'scripts/views/view-profile-info',
		'scripts/collections/collection-jobs',
		'scripts/collections/collection-employer-profiles',
		'scripts/layouts/layout-app-content',
		'scripts/layouts/layout-app-settings',
	],
	function($, App, Utils, Marionette, ViewLogin, ViewRegister, ViewFindBusiness, ViewAddBusiness, ViewAccountVerification, ViewJobs, ViewNetwork, ViewProfile, CollectionJobs, CollectionEmployerProfiles, LayoutAppContent, LayoutAppSettings){
		'use strict';

		var AppController = Marionette.Controller.extend({

			session : function(){
				console.log('Brushfire routed to session...');

				switch(App.getSessionView()){
					case 'index':
						this.index();
					break;
					case 'register':
						this.register();
					break;
					case 'findBusiness':
						this.findBusiness();
					break;
					case 'addBusiness':
						this.addBusiness();
					break;
					case 'accountVerification':
						this.accountVerification();
					break;
					case 'jobs':
						this.jobs();
					break;
					case 'network':
						this.network();
					break;
					case undefined:
						this.index();
					break;
				}
			},

			index : function(){
				console.log('Brushfire routed to index...');
				var view = new ViewLogin();
				App.content.show(view);
			},

			register : function(){
				console.log('Brushfire routed to sign up...');
				var view = new ViewRegister();
				App.content.show(view);
			},

			findBusiness : function(){
				console.log('Brushfire routed to find your business...');
				var view = new ViewFindBusiness();
				App.content.show(view);
			},

			addBusiness : function(){
				console.log('Brushfire routed to add your business...');
				var view = new ViewAddBusiness();
				App.content.show(view);
			},

			accountVerification : function(){
				console.log('Brushfire routed to account verification...');
				var view = new ViewAccountVerification();
				App.content.show(view);
			},

			jobs : function(){
				console.log('Brushfire routed to jobs...');
				if(Utils.checkSession()){

					var layoutAppContent = new LayoutAppContent();
					App.content.show(layoutAppContent);

					this.settings();

					var that = this;
					var jobs = new CollectionJobs();
						jobs.fetch({
							success : function(collection, response){
								var view = new ViewJobs({model:response});
								layoutAppContent.appBody.show(view);			
							}
						});
				}else{
					this.index();
				}
			},

			network : function(){
				console.log('Brushfire routed to network...');
				if(Utils.checkSession()){

					var layoutAppContent = new LayoutAppContent();
					App.content.show(layoutAppContent);
					var view = new ViewNetwork();
					layoutAppContent.appBody.show(view);

					this.settings();
					
				}else{
					this.index();
				}
			},

			settings : function(){

				var employerProfiles = new CollectionEmployerProfiles({guid : '982C2997-A95A-4625-BCAF-E6D285F162E9'});
				employerProfiles.fetch({
					success : function(response){
						var modelProfiles = response.models;
						var modelProfile = response.models[0].attributes;

						var layoutAppSettings = new LayoutAppSettings({model : modelProfiles});
						App.settings.show(layoutAppSettings);

						var viewProfile = new ViewProfile({model : modelProfile});
						layoutAppSettings.body.show(viewProfile);
					},
					error : function(){
						console.log("Error fetching employer profiles...")
					}
				});
			},

			logout : function(){
				console.log('Brushfire routed to logout...');
				Utils.deleteSession();
				App.removeSessionView();
				App.router.controller.index();
			}

		});

		return AppController;
	}
);