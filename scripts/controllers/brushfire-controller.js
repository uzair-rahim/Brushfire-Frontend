define([
		'jquery',
        'app',
        'utils',
		'marionette',
		'scripts/views/view-login',
		'scripts/views/view-register',
		'scripts/views/view-find-business',
		'scripts/views/view-add-business',
		'scripts/views/view-profile',
		'scripts/views/view-jobs',
		'scripts/collections/collection-jobs',
		'scripts/layouts/layout-app'
	],
	function($, App, Utils, Marionette, ViewLogin, ViewRegister, ViewFindBusiness, ViewAddBusiness, ViewProfile, ViewJobs, CollectionJobs, LayoutApp){
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
					case undefined:
						this.index();
					break;
				}
			},

			index : function(){
				console.log('Brushfire routed to index...');
				App.setSessionView('index');
				var view = new ViewLogin();
				App.body.show(view);
			},

			register : function(){
				console.log('Brushfire routed to sign up...');
				App.setSessionView('register');
				var view = new ViewRegister();
				App.body.show(view);
			},

			findbusiness : function(){
				console.log('Brushfire routed to find your business...');
				App.setSessionView('findbusiness');
				var view = new ViewFindBusiness();
				App.body.show(view);
			},

			addbusiness : function(){
				console.log('Brushfire routed to add your business...');
				App.setSessionView('addbusiness');
				var view = new ViewAddBusiness();
				App.body.show(view);
			},

			profile : function(){
				console.log('Brushfire routed to profile...');
				if(Utils.checkSession()){
					var layout = new LayoutApp();
					App.body.show(layout);

					var view = new ViewProfile();
					layout.body.show(view);

					App.setSessionView('profile');
					Utils.setBreadcrumb({"Profile": " "});
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

					App.setSessionView('jobs');						
					Utils.setBreadcrumb({"Jobs": " "});
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