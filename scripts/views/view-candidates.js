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
			request.jobGuid = $(event.target).parent().parent().attr("data-job");
			request.candidateGuid = $(event.target).attr("data-guid");
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
			request.candidateGuid = $(event.target).attr("data-guid");
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

			var bulk = new Array();

			$(".candidates-list input[type='checkbox']:checked").each(function(){
				var jobGuid = $(this).parent().parent().parent().attr("data-job");
				var id = $(this).parent().parent().find(".archive").attr("data-id");
				var guid = $(this).parent().parent().find(".archive").attr("data-guid");

				var update = new Object();
					update.id = id;
					update.jobGuid = jobGuid;
					update.guid = guid;
					update.action = "bulkArchive";
					update.archived = true;
					update.seen = true;
				bulk.push(update)

			});

			console.log(bulk);
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