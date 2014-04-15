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
		'scripts/views/view-candidates',
		'scripts/views/view-profile-info',
		'scripts/models/model-job-types',
		'scripts/collections/collection-jobs',
		'scripts/collections/collection-employer-profiles',
		'scripts/collections/collection-candidates',
		'scripts/layouts/layout-app-content',
		'scripts/layouts/layout-app-settings',
	],
	function($, App, Utils, Marionette, ViewLogin, ViewRegister, ViewFindBusiness, ViewAddBusiness, ViewAccountVerification, ViewJobs, ViewNetwork, Viewcandidates, ViewProfile, ModelJobTypes, CollectionJobs, CollectionEmployerProfiles, CollectionCandidates, LayoutAppContent, LayoutAppSettings){
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
					case 'candidates':
						this.candidates();
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

					var that = this;
					var jobs = new CollectionJobs();
					var jobTypes = new ModelJobTypes();
					var models = new Object();
					
					$.when(
						jobs.fetch({
							headers : {
								'token' : Utils.getUser().brushfireToken
							},
							success : function(collection, jobsResponse){
								models.jobs = jobsResponse;
							}
						}),
						jobTypes.fetch({
							headers : {
								'token' : Utils.getUser().brushfireToken
							},
							success : function(jobTypesResponse){
								models.jobTypes = jobTypesResponse.attributes;
							}
						})
					).then(function(){
						var view = new ViewJobs({model : models});
							layoutAppContent.appBody.show(view);
						}
					);
						
					this.settings();
					
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

			candidates : function(){
				console.log('Brushfire routed to candidates...');
				if(Utils.checkSession()){

					var that = this;
					var jobs = new CollectionJobs();
					var jobTypes = new ModelJobTypes();
					var models = new Object();
					var candidates = new Object();
					
					$.when(
						jobTypes.fetch({
							headers : {
								'token' : Utils.getUser().brushfireToken
							},
							success : function(jobTypesResponse){
								models.jobTypes = jobTypesResponse.attributes;
							}
						}),
						jobs.fetch({
							headers : {
								'token' : Utils.getUser().brushfireToken
							},
							success : function(collection, jobsResponse){
								candidates = jobsResponse;
								models.jobs = jobsResponse;
							}
						})
					).then(function(){

						var layoutAppContent = new LayoutAppContent({model : models});
							App.content.show(layoutAppContent);

						var view = new Viewcandidates({model : candidates});
							layoutAppContent.appBody.show(view);
						}
					);

					this.settings();
					
				}else{
					this.index();
				}
			},

			settings : function(){

				var employerGUIDs = Utils.getUser().employerIds;

				if(employerGUIDs.length != 0){

					var employerProfiles = new CollectionEmployerProfiles({guid : employerGUIDs[0]});
					employerProfiles.fetch({
						headers : {
							'token' : Utils.getUser().brushfireToken
						},
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

				}else{
					var layoutAppSettings = new LayoutAppSettings();
						App.settings.show(layoutAppSettings);

					var viewProfile = new ViewProfile();
						layoutAppSettings.body.show(viewProfile);
				}

				
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