define([
		'marionette',
		'appcontroller'
	],
	function(Marionette, AppController){
		'use strict';
	
		var AppRouter = Marionette.AppRouter.extend({
			controller : new AppController(),
			appRoutes : {
				'' 						: 'session',
				'index' 				: 'index',
				'jobs'					: 'jobs',
				'network'				: 'network',
				'applicants'			: 'applicants',
				'register'				: 'register',
				'findBusiness'			: 'findBusiness',
				'addBusiness'			: 'addBusiness',
				'accountVerification'	: 'accountVerification',
				'logout'				: 'logout'
			}

		});
		return AppRouter;
	}
);