define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-jobs'
],function($, Vldt, App, Utils, Marionette, TemplateViewJobs){
	'use strict';

	var ViewJobs = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewJobs,
		events : {
			"click #createajob" : "createAJob",
			"click .jobName"	: "editAJob",
			"click #hide-card"	: "hideCard",
			"click #cancel-job"	: "hideCard"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Jobs initialized...");
			App.setSessionView('jobs');
			Utils.setBreadcrumb({"Jobs": " "});
		},
		createAJob : function(){
			this.showCard();
		},
		editAJob : function(){
			this.showCard();
			$("#jobs-table tr").removeClass("selected");
			$(event.target).parent().addClass("selected");
		},
		showCard : function(){
			$(".card-container").addClass("expanded");
			$(".table-container").addClass("collapsed");
		},
		hideCard : function(){
			$(".card-container").removeClass("expanded");
			$(".table-container").removeClass("collapsed");
			$("#jobs-table tr").removeClass("selected");
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.jobs = this.model;
				jsonObject.language = App.Language;
			return jsonObject;
		}

	});

	return ViewJobs;
	
});