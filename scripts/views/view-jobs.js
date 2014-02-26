define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/models/model-job',
	'scripts/models/model-job-types',
	'hbs!templates/template-view-jobs'
],function($, Vldt, App, Utils, Marionette, ModelJob, ModelJobTypes, TemplateViewJobs){
	'use strict';

	var ViewJobs = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewJobs,
		mode : "create",
		events : {
			"click #createajob" : "createAJob",
			"click .jobName"	: "editAJob",
			"click #hide-card"	: "hideCard",
			"click #cancel-job"	: "hideCard",
			"click #save-job"	: "saveJob"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Jobs initialized...");
			App.setSessionView('jobs');
			Utils.setBreadcrumb({"Jobs": " "});
		},
		onShow : function(){
			$(".card-shift .btn-group.toggle button").click(function(){
				if($(this).hasClass("active")){
					$(this).removeClass("active");
				}else{
					$(this).addClass("active");
				}
			});


			var modelJobTypes = new ModelJobTypes();
			var that = this;
				modelJobTypes.fetch({
				success : function(response){
					console.log(response.attributes[0].guid);
					that.jobtypeguid = response.attributes[0].guid
				},
				error : function(){
					console.log("There was an error trying to fetch the job types");
				}
			});

		},
		createAJob : function(){

			$("#jobs-table tr").removeClass("selected");

			// Card Header
			$(".card-header h2").text("New Job");

			// Pills
			$(".card-container-header .pills li:eq(1)").hide();

			// Position
			$("#job-position").text($("#job-position").next().find("li:eq(0) a").text());
			$("#job-position").next().find("li").removeClass("current");
			$("#job-position").next().find("li:eq(0)").addClass("current");

			// Wage
			$("#job-wage").val("");

			// Wage Frequency
			$("#wage-frequency").text($("#wage-frequency").next().find("li:eq(0) a").text());
			$("#wage-frequency").next().find("li").removeClass("current");
			$("#wage-frequency").next().find("li:eq(0)").addClass("current");

			// Shift Days
			$(".card-shift .btn-group.toggle button").removeClass("active");

			//Shift Time
			$(".shift-time").val("");

			this.mode = "create";

			this.showCard();
		},
		editAJob : function(){
			var index = $(event.target).parent().index();

			$("#jobs-table tr").removeClass("selected");
			$(event.target).parent().addClass("selected");

			var jobInfo = this.model[index];
			//console.log(jobInfo);

			// Card Header
			$(".card-header h2").text(jobInfo.jobName);

			// Pills
			$(".card-container-header .pills li:eq(1)").show();

			// Wage
			$("#job-wage").val(jobInfo.wage+".00");

			// Shift Days
			$(".card-shift .btn-group.toggle button").removeClass("active");

			// Shift Time
			if(jobInfo.shifts.length > 0){

				if(jobInfo.shifts[0].mon){
					$(".card-shift .btn-group.toggle button:eq(0)").addClass("active");
				}
				if(jobInfo.shifts[0].tue){
					$(".card-shift .btn-group.toggle button:eq(1)").addClass("active");
				}
				if(jobInfo.shifts[0].wed){
					$(".card-shift .btn-group.toggle button:eq(2)").addClass("active");
				}
				if(jobInfo.shifts[0].thu){
					$(".card-shift .btn-group.toggle button:eq(3)").addClass("active");
				}
				if(jobInfo.shifts[0].fri){
					$(".card-shift .btn-group.toggle button:eq(4)").addClass("active");
				}
				if(jobInfo.shifts[0].sat){
					$(".card-shift .btn-group.toggle button:eq(5)").addClass("active");
				}
				if(jobInfo.shifts[0].sun){
					$(".card-shift .btn-group.toggle button:eq(6)").addClass("active");
				}


				var startDayPart = "AM";
				var shiftStartHour = jobInfo.shifts[0].startHour;
					if(shiftStartHour > 12){
						shiftStartHour = shiftStartHour - 12;
						startDayPart = "PM"
					}
				var shiftStartMin = jobInfo.shifts[0].startMin;
					if(shiftStartMin < 10){
						shiftStartMin = "0"+shiftStartMin;
					}
				var endDayPart = "AM";
				var shiftEndHour = jobInfo.shifts[0].endHour;
					if(shiftEndHour > 12){
						shiftEndHour = shiftEndHour - 12;
						endDayPart = "PM"
					}
				var shiftEndMin = jobInfo.shifts[0].endMin;
					if(shiftEndMin < 10){
						shiftEndMin = "0"+shiftEndMin;
					}

				$(".shift-time").val(shiftStartHour + ":" + shiftStartMin + " " + startDayPart + " - " + shiftEndHour + ":" + shiftEndMin + " " + endDayPart);	

			}else{
				$(".shift-time").val("");
			}

			this.mode = "update";

			this.showCard();
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
		saveJob : function(){

			var job = new Object();
				job.ownerGuid = Utils.getUser().employerIds[0];
				job.userGuid = Utils.getGUID();
				job.jobName = $("#job-position").text();
				job.typeGuid = this.jobtypeguid;
				job.description = "default description text";
				job.wage = $("#job-wage").val();
				job.wageType = $("#wage-frequency").text().toUpperCase();
				job.shifts = [{startHour : 7, startMin : 30, endHour : 14, endMin : 0, mon : true, tue : true, wed : false, thu : false, fri : false, sat : false, sun : false}]

				//console.log(job);

				var that = this;

				var modelJob = new ModelJob();
				
					modelJob.save(job,{
						success : function(){
							App.router.controller.jobs();
							console.log("Job successfully saved");
						},
						error : function(){
							console.log("There was an error trying to save the job");
						}
					});
				

			if(this.mode === "create"){

			}

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