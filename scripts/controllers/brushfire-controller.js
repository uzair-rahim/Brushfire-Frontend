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
		'scripts/views/view-account',
		'scripts/views/view-profile',
		'scripts/views/view-jobs',
		'scripts/views/view-network',
		'scripts/collections/collection-jobs',
		'scripts/layouts/layout-app'
	],
	function($, App, Utils, Marionette, ViewLogin, ViewRegister, ViewFindBusiness, ViewAddBusiness, ViewAccountVerification, ViewAccount, ViewProfile, ViewJobs, ViewNetwork, CollectionJobs, LayoutApp){
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
					case 'account':
						this.account();
					break;
					case 'profile':
						this.profile();
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
				App.layout.show(view);
			},

			register : function(){
				console.log('Brushfire routed to sign up...');
				var view = new ViewRegister();
				App.layout.show(view);
			},

			findBusiness : function(){
				console.log('Brushfire routed to find your business...');
				var view = new ViewFindBusiness();
				App.layout.show(view);
			},

			addBusiness : function(){
				console.log('Brushfire routed to add your business...');
				var view = new ViewAddBusiness();
				App.layout.show(view);
			},

			accountVerification : function(){
				console.log('Brushfire routed to account verification...');
				var view = new ViewAccountVerification();
				App.layout.show(view);
			},

			account : function(){
				console.log('Brushfire routed to account...');
				if(Utils.checkSession()){
					var layoutApp = new LayoutApp();
					App.layout.show(layoutApp);
					var view = new ViewAccount();
					layoutApp.appBody.show(view);
				}else{
					this.index();
				}
			},

			profile : function(){
				console.log('Brushfire routed to profile...');
				if(Utils.checkSession()){
					var layoutApp = new LayoutApp();
					App.layout.show(layoutApp);
					var view = new ViewProfile();
					layoutApp.appBody.show(view);
				}else{
					this.index();
				}
			},

			jobs : function(){
				console.log('Brushfire routed to jobs...');
				if(Utils.checkSession()){
					var layoutApp = new LayoutApp();
					App.layout.show(layoutApp);
					var that = this;
					var jobs = new CollectionJobs();
						jobs.fetch({
							success : function(collection, response){
								var view = new ViewJobs({model:response});
								layoutApp.appBody.show(view);			
							}
						});
				}else{
					this.index();
				}
			},

			network : function(){
				console.log('Brushfire routed to network...');
				if(Utils.checkSession()){
					var layoutApp = new LayoutApp();
					App.layout.show(layoutApp);
					var view = new ViewNetwork();
					layoutApp.appBody.show(view);
				}else{
					this.index();
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