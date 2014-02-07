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
				'account'				: 'account',
				'profile'				: 'profile',
				'jobs'					: 'jobs',
				'network'				: 'network',
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