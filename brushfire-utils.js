define([
	'jquery',
	'jquerycookie',
	'backbone'
	],
	function($, Cookie, Backbone){
		var BrushfireUtils = Backbone.Model.extend({

			// STATIC VARIABLES
			APP_TITLE: 'Brushfire',

			// Show toast
			showToast : function(options){
				console.log('Show toast...');

				var defaults = {
					message 	: "An unknow error has occured",
					style		: " ",
					autohide 	: true,
					delay		: 4500
				}

				for(var key in defaults){
					if(typeof(options[key]) === "undefined"){
						options[key] = defaults[key];
					}
				}

				$("#app-toasts").append('<a class="toast '+options.type+' hide">'+options.message+'<span class="clear icon"></span></a>');
				$("#app-toasts a span").click(this.hideToast);
				setTimeout(function(){ $("#app-toasts a:last-child").removeClass("hide"); }, 100);
				if(options.autohide){
					setTimeout(this.autoHideToast, options.delay);
				}

			},

			// Auto-hide toast
			autoHideToast : function(){
				console.log('Auto-hide toast...');
				$("#app-toasts a:first-child").addClass("hide");
				setTimeout(function(){ $("#app-toasts a:first-child").remove(); },300);
			},

			// Hide toast
			hideToast : function(){
				console.log('Hide toast...')
				$(this).parent().remove();
			},

			// Disable button
			disableButton : function(options){
				console.log('Disable button...');

				var defaults = {
					element : " ",
					message : "Processing..."
				}

				for(var key in defaults){
					if(typeof(options[key]) === "undefined"){
						options[key] = defaults[key];
					}
				}

				$(options.element).removeClass("primary");
				$(options.element).addClass("wait");
				$(options.element).html('<span class="load"></span>'+options.message);
				$(options.element).attr("disabled", "disabled");
			},

			// Enable button
			enableButton : function(options){
				console.log('Enable button...');

				var defaults = {
					element : " ",
					message : "Submit"
				}

				for(var key in defaults){
					if(typeof(options[key]) === "undefined"){
						options[key] = defaults[key];
					}
				}

				$(options.element).removeAttr("disabled");
				$(options.element).removeClass("wait");
				$(options.element).addClass("primary");
				$(options.element).html(options.message);
			},

			// Create a session
			createSession : function(options){
				console.log("Create session...");

				var defaults = {
					firstname	: " ",
					lastname	: " ",
					guid 		: " "
				}

				for(var key in defaults){
					if(typeof(options[key]) === "undefined"){
						options[key] = defaults[key];
					}
				}

				$.cookie("brushfiresession", JSON.stringify(options));
			},

			// Check for a valid session
			checkSession : function(){
				console.log("Create session...");
				var brushfiresession = $.cookie("brushfiresession");
				return brushfiresession !== undefined
			},

			// Delete current session
			deleteSession : function(){
				console.log("Delete session...");
				$.removeCookie("brushfiresession");
			},

			// Get User GUID 
			getGUID : function(){
				var brushfiresession = $.cookie("brushfiresession");
				if(brushfiresession !== undefined){
					var userObject = JSON.parse($.cookie("brushfiresession"));
					return userObject.guid; 
				}else{
					return false;
				}
			},

			// Save Search Terms for Find Business screen
			setSearchTerms : function(options){
				if(!$.cookie("brushfiresearch")){
					$.cookie("brushfiresearch", JSON.stringify(options));
				}
			},

			// Get Search Terms for Find Business screen
			getSearchTerms : function(){
				if($.cookie("brushfiresearch")){
					var brushfiresearch = JSON.parse($.cookie("brushfiresearch"));
					return brushfiresearch;
				}
				return false;
			},

			// Delete Search Terms
			deleteSearchTerms : function(){
				$.removeCookie("brushfiresearch");
			},

			// Set subheader breadcrumb
			setBreadcrumb : function(options){
				console.log("Set breadcrumb...");

				$("#header-location").empty();

				var defaults = {
					"Dashboard" : " "
				}

				if(typeof(options) === "undefined"){
					for(var key in defaults){
						$("#header-location").append("<li><a>"+key+"</a></li>");
					}
				}else{
					for(var key in options){
						$("#header-location").append("<li><a>"+key+"</a></li>");
					}
				}
				
			},

			// Custom Dropdown - Show
			showDropdown : function(){
				$(document).delegate("button.dropDown", "click", function(){
					$(this).next(".dropDown-menu").css("display", "block");
				});
			},

			// Custom Dropdown - Hide
			hideDropdown : function(){
				$(document).on("click", function(event){
					if(!$(event.target).hasClass("dropDown")){
						$(".dropDown-menu").css("display", "none");	
					}
				});
			},

			// Custom Dropdown - Select
			selectDropdown : function(){
				$(document).delegate("ul.dropDown-menu:not(#nav-extras-dropdown, #notifications-dropdown) li a", "click", function(){
					var button = $(this).parent().parent().prev(".dropDown");
					var text = $(this).text();
					var value = $(this).attr("id");

					button.text(text);
					button.attr("data-dropdown", value);
				});
			}

		});

		var brushfireUtils = new BrushfireUtils();

		return brushfireUtils;
	}
);