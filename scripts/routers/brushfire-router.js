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
				'findbusiness'			: 'findbusiness',
				'addbusiness'			: 'addbusiness',
				'accountverification'	: 'accountverification',
				'logout'				: 'logout'
			}

		});

		return AppRouter;

	}
);