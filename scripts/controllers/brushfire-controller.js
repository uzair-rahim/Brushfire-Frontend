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
					case 'findbusiness':
						this.findbusiness();
					break;
					case 'addbusiness':
						this.addbusiness();
					break;
					case 'accountverification':
						this.accountverification();
					break;
					case 'account':
						if(Utils.checkSession()){
							this.account();
						}else{
							this.index();
						}	
					break;
					case 'profile':
						if(Utils.checkSession()){
							this.profile();
						}else{
							this.index();
						}	
					break;
					case 'jobs':
						if(Utils.checkSession()){
							this.jobs();
						}else{
							this.index();
						}	
					break;
					case 'network':
						if(Utils.checkSession()){
							this.network();
						}else{
							this.index();
						}	
					break;
					case undefined:
						this.index();
					break;
				}
			},

			index : function(){
				console.log('Brushfire routed to index...');
				var view = new ViewLogin();
				App.body.show(view);
			},

			register : function(){
				console.log('Brushfire routed to sign up...');
				var view = new ViewRegister();
				App.body.show(view);
			},

			findbusiness : function(){
				console.log('Brushfire routed to find your business...');
				var view = new ViewFindBusiness();
				App.body.show(view);
			},

			addbusiness : function(){
				console.log('Brushfire routed to add your business...');
				var view = new ViewAddBusiness();
				App.body.show(view);
			},

			accountverification : function(){
				console.log('Brushfire routed to account verification...');
				var view = new ViewAccountVerification();
				App.body.show(view);
			},

			account : function(){
				console.log('Brushfire routed to account...');
				if(Utils.checkSession()){
					var layout = new LayoutApp();
					App.body.show(layout);
					var view = new ViewAccount();
					layout.body.show(view);
				}else{
					this.index();
				}
			},

			profile : function(){
				console.log('Brushfire routed to profile...');
				if(Utils.checkSession()){
					var layout = new LayoutApp();
					App.body.show(layout);
					var view = new ViewProfile();
					layout.body.show(view);
				}else{
					this.index();
				}
			},

			jobs : function(){
				console.log('Brushfire routed to jobs...');
				if(Utils.checkSession()){
					var layout = new LayoutApp();
					App.body.show(layout);
					var that = this;
					var jobs = new CollectionJobs();
						jobs.fetch({
							success : function(collection, response){
								var view = new ViewJobs({model:response});
								layout.body.show(view);			
							}
						});
				}else{
					this.index();
				}
			},

			network : function(){
				console.log('Brushfire routed to network...');
				if(Utils.checkSession()){
					var layout = new LayoutApp();
					App.body.show(layout);
					var view = new ViewNetwork();
					layout.body.show(view);
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