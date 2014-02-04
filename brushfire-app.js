define([
		'jquery',
		'jquerycookie',
		'underscore',
		'modernizr',
		'utils',
		'backbone',
		'wreqr',
		'marionette',
		'Handlebars',
		'scripts/models/model-language'
	],
	function($, Cookie, _, Modernizr, Utils, Backbone, Wreqr, Marionette, Handlebars, ModelLanguage){
		'use strict';

		var App = new Marionette.Application();
			App.Language =  new Object();

		App.addInitializer(function(options){
			console.log('Brushfire add initializer...');
		});

		App.addRegions({
			body : "body"
		});

		App.on('initialize:before', function(){
			console.log('Brushfire before initialized...');
			App.getLanguagePack();
		});

		App.on('initialize:after', function(){
			console.log('Brushfire initialized...');
		});

		App.on('start', function(){
			Utils.showDropdown();
			Utils.hideDropdown();
			Utils.selectDropdown();
			console.log('Brushfire started...');
		});

		// Application AJAX event handlers

		// AJAX Start
		// The method is called when the first AJAX request begins
		$(document).ajaxStart(function(){
			console.log('ajaxStart...');
		});

		// AJAX Stop
		// The method is called when the ALL AJAX requests have completed
		$(document).ajaxStop(function(){
			console.log('ajaxStop...');
			App.hideLoadAnimation();
		});

		// AJAX Complete
		// The method is called when an AJAX request completes
		$(document).ajaxComplete(function(){
			App.hideLoadAnimation();
		});

		// AJAX Error
		// The method is called when the first AJAX requests complete with an error
		$(document).ajaxError(function(){
			console.log('ajaxError...');
			App.hideLoadAnimation();
			Utils.showToast({
				message: "Error processing request",
				type: "bad"
			});
		});

		// AJAX Send
		// The method is called before an AJAX request is sent
		$(document).ajaxSend(function(){
			console.log('ajaxSend...');
			App.showLoadAnimation();
		});

		// AJAX Success
		// The method is called after an AJAX request completes successfully
		$(document).ajaxSuccess(function(){
			console.log('ajaxSuccess...');
			App.hideLoadAnimation();
		});

		// Show load animation
		App.showLoadAnimation = function(){
			console.log("Show load animation...");
			$("#modal-loading").addClass("show");
		}

		// Hide load animation
		App.hideLoadAnimation = function(){
			console.log("Hide load animation...");
			$("#modal-loading").removeClass("show");
		}

		// Get the last viewed view
		App.getSessionView = function(){
			return $.cookie("brushfireview");
		}

		// Set the last viewed view
		App.setSessionView = function(view){
			$.cookie("brushfireview", view);
		}

		// Remove last viewed view
		App.removeSessionView = function(){
			$.removeCookie("brushfireview");
		}

		// Load Language Pack
		App.getLanguagePack = function(){
			var ln = navigator.language;
			var modelLanguage = new ModelLanguage({language : ln});
			modelLanguage.fetch({
				success : function(response){
					App.Language = response.attributes.items;
					App.startApp();
				},
				error : function(){
					console.log("Error loading language pack...");
				}
			});
		}

		App.startApp = function(){
			if(Backbone.history){
				Backbone.history.start();
			}
		}

		return App;
	}
);