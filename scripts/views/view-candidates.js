define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/models/model-candidate',
	'hbs!templates/template-view-candidates'
],function($, Vldt, App, Utils, Marionette, ModelCandidate, Template){
	'use strict';

	var Viewcandidates = Marionette.ItemView.extend({
		tagName: 'div',
		className : 'app-body-content',
		template : Template,
		numberOfCalls : 0,
		events : {
			"click .candidates-list li .archive"	: "archiveUser",
			"click .candidates-list li .unarchive"	: "unarchiveUser",
			"click #archive-bulk"					: "archiveBulk"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View candidates initialized...");
			App.setSessionView('candidates');
			Utils.setBreadcrumb({"Candidates": " "});
		},

		onShow : function(){
			Utils.enableFilter();
		},
		archiveUser : function(event){
			var request = new Object();
			request.jobGuid = $(event.target).parent().parent().parent().attr("data-job");
			request.guid = $(event.target).attr("data-guid");
			request.action = "update";

			var update = new Object();
			update.id = $(event.target).attr("data-id");
			update.archived = true;
			update.seen = true;

			var candidate = new ModelCandidate(request);

				candidate.save(update, {
					headers : {
						'token' : Utils.getUser().brushfireToken
					},
					success : function(response){
						App.router.controller.candidates();
					}
				});
		},
		unarchiveUser : function(event){
			var request = new Object();
			request.jobGuid = $(event.target).attr("data-job");
			request.guid = $(event.target).attr("data-guid");
			request.action = "update";

			var update = new Object();
			update.id = $(event.target).attr("data-id");
			update.archived = false;
			update.seen = true;

			var candidate = new ModelCandidate(request);

				candidate.save(update, {
					headers : {
						'token' : Utils.getUser().brushfireToken
					},
					success : function(response){
						App.router.controller.candidates();
					}
				});
		},
		archiveBulk : function(){
			this.numberOfCalls = $(".candidates-list input[type='checkbox']:checked").length;
			this.bulkUpdate();
		},
		bulkUpdate : function(){
			if(this.numberOfCalls > 0){

				var element = $(".candidates-list input[type='checkbox']:checked:eq("+(this.numberOfCalls-1)+")");
				var jobGuid = $(element).closest(".candidates-section").attr("data-job");
				var id =  $(element).parent().parent().find(".archive").attr("data-id");
				var guid =  $(element).parent().parent().find(".archive").attr("data-guid");

				var request = new Object();
					request.jobGuid = jobGuid;
					request.guid = guid;
					request.action = "update";

				var update = new Object();
					update.id = id;	
					update.archived = true;
					update.seen = true;

				var candidate = new ModelCandidate(request);
				var that = this;

					candidate.save(update, {
						headers : {
							'token' : Utils.getUser().brushfireToken
						},
						success : function(response){
							that.numberOfCalls--;
							that.bulkUpdate();
						}
					});
			}else{
				App.router.controller.candidates();
			}
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.candidates = this.model;
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return Viewcandidates;
	
});