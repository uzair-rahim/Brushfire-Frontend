define([
		'marionette',
		'appcontroller'
	],
	function(Marionette, AppController){
		'use strict';
	
		var AppRouter = Marionette.AppRouter.extend({

			controller : new AppController(),

			appRoutes : {
				'' 				: 'session',
				'index' 		: 'index',
				'profile'		: 'profile',
				'jobs'			: 'jobs',
				'register'		: 'register',
				'findbusiness'	: 'findbusiness',
				'addbusiness'	: 'addbusiness',
				'logout'		: 'logout'
			}

		});

		return AppRouter;

	}
);