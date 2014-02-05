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
			"click #createajob"				: "createAJob",
			"click #jobs-table tbody tr"	: "editAJob",
			"click #modal-cancel"			: "hideModal",
			"click #tableCheckBox"			: "selectAll",
			"click #add-shift"				: "addShift"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Jobs initialized...");
			App.setSessionView('jobs');
			Utils.setBreadcrumb({"Jobs": " "});
		},
		createAJob : function(){
			$("#modal-job h1").html("Create A Job");
			$("#modal-job").addClass("show");
		},
		editAJob : function(){
			$("#modal-job h1").html("Edit Job");
			$("#modal-job").addClass("show");
		},
		hideModal : function(){
			$("#modal-job").removeClass("show");
		},
		selectAll : function(){
			var checked = $("#tableCheckBox").prop("checked");
			$("#jobs-table td > input[type='checkbox']").each(function(){
				$(this).prop("checked", checked)
			});

			if(!checked){
				$("#deletejobs").prop("disabled", true);
			}else{
				$("#deletejobs").prop("disabled", false);
			}
		},
		addShift : function(){
			alert("Add shift...");
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