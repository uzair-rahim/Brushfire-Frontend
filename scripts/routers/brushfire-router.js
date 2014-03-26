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
				'candidates'			: 'candidates',
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