define([
	'jquery',
	'app',
	'utils',
	'marionette',
	'scripts/views/view-jobs',
	'scripts/views/view-network',
	'scripts/collections/collection-jobs',
	'hbs!templates/template-layout-app-content'
	],
	function($, App, Utils, Marionette, ViewJobs, ViewNetwork, CollectionJobs, TemplateLayoutAppContent){
		'use strict';

		var LayoutAppContent = Marionette.Layout.extend({
			tagName : 'div',
			className : 'app-content-body',
			template : TemplateLayoutAppContent,
			regions : {
				appFilter	: "#app-filter", 
				appHeader 	: "#app-header",
				appBody 	: "#app-body"
			},
			events : {
				"click #nav-menu li a"		: "changeView",
				"click #filter"				: "showHideFilter",
				"click #filter-clear-all"	: "clearAllFilter",
				"click #auto-apply"			: "autoApplyFilter",
				"click #rating-filter li" 	: "ratingFilter",
				"click #cancel-filter"		: "cancelFilter",
				"click #search-filter"		: "searchFilter",
				"click #settings"			: "settings",
				"click #logout"				: "logout"
			},
			changeView : function(event){
				var menuItem = $(event.target).data("menu");
				console.log("Change view to "+menuItem+"...");

				switch(menuItem){
					case "jobs":
						App.router.controller.jobs();
					break;
					case "network":
						App.router.controller.network();
					break;
					case "candidates":
						App.router.controller.candidates();
					break;
				}
			},
			showHideFilter : function(){
				if($("#app-filter").hasClass("show")){
					$("#app-filter").removeClass("show");
				}else{
					$("#app-filter").addClass("show");
				}
			},
			clearAllFilter : function(){
				$(".filter-section .checkbox-group input").each(function(){
					$(this).prop("checked", false);
				});
			},
			autoApplyFilter : function(event){
				if($(event.target).prop("checked")){
					$("#button-group").hide();
				}else{
					$("#button-group").show();
				}
			},
			ratingFilter : function(event){
				var stars = $(event.target).index();
			},
			cancelFilter : function(){
				this.showHideFilter();
			},
			searchFilter : function(){

				if($(".checkbox-group li input[type='checkbox']:checked").length > 0){
					$(document).find(".candidates-list-container .candidates-section").hide();
					$(".checkbox-group li input[type='checkbox']:checked").each(function(){	
						var id = $(this).attr("id");
						$(document).find(".candidates-list-container .candidates-section[data-jobtype='"+id+"']").show();
					});
				}else{
					$(document).find(".candidates-list-container .candidates-section").show();
				}

				if($("#archived-candidates:checked").length > 0){
					$("#archived-candidates-section").show();
				}

				this.showHideFilter();
			},
			settings : function(){
				Utils.showSettings();
			},
			logout : function(){
				App.router.controller.logout();
			},
			serializeData : function(){
				var jsonObject = new Object();
					jsonObject.language = App.Language;
					if(typeof this.model !== "undefined"){
						jsonObject.jobTypes = this.model.jobTypes;
						jsonObject.jobs = this.model.jobs;
					}					
				return jsonObject;
			}
		});

		return LayoutAppContent;
	}
);