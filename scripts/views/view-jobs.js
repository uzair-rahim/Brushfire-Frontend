define([
	'jquery',
	'jquerydatatable',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/models/model-job',
	'hbs!templates/template-view-jobs'
],function($, DataTable, Vldt, App, Utils, Marionette, ModelJob, TemplateViewJobs){
	'use strict';

	var ViewJobs = Marionette.ItemView.extend({
		tagName: 'div',
		className : 'app-body-content',
		template : TemplateViewJobs,
		mode : "create",
		selectedJobIndex : null,
		events : {
			"click #createajob" 		 : "createAJob",
			"click .jobName"			 : "editAJob",
			"click #hide-card"			 : "hideCard",
			"click #cancel-job"			 : "hideCard",
			"click #save-job"			 : "saveJob",
			"click #add-job-description" : "addJobDescription"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Jobs initialized...");
			App.setSessionView('jobs');
			Utils.setBreadcrumb({"Jobs": " "});
		},
		onShow : function(){
			//DataTables
			var jobsTable = $('#jobs-table').dataTable({
				"bPaginate": false,
				"bFilter": false,
				"bInfo": false,
				"bAutoWidth": true,
				"bScrollCollapse": true,
				"sScrollY": $(window).height() - 175,
				"sScrollX": "100%"
			});

			// Weekdays selecttion toggle
			$(".card-shift .btn-group.toggle button").click(function(){
				if($(this).hasClass("active")){
					$(this).removeClass("active");
				}else{
					$(this).addClass("active");
				}
			});

			$(window).resize(function(){
				jobsTable.fnDraw();
			});

		},
		showCard : function(){
			$(".table-container").addClass("collapsed");
			$(".card-container").addClass("expanded");
		},
		hideCard : function(){
			$(".table-container").removeClass("collapsed");
			$(".card-container").removeClass("expanded");
			$("#jobs-table tr").removeClass("selected");
		},
		createAJob : function(){
			console.log("Create a new job");

			$(".card-description").css("display" , "none");
			$("#job-description").val("");
			$("#add-job-description").css("display", "block");

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
			$(".shift-time").val("3:00 AM - 3:00 PM");

			this.mode = "create";

			this.showCard();
		},
		editAJob : function(){

			console.log("Edit a job");

			//Highlight Selected Job
			$("#jobs-table tr").removeClass("selected");
			$(event.target).parent().addClass("selected");

			//Show Applicants tab
			$(".card-container-header .pills li:eq(1)").show();

			var index = $(event.target).parent().index();
			var jobInfo = this.model.jobs[index];

			this.selectedJobIndex = index;

			//Job name in header and dropdown 
			$(".card-header h2").text(jobInfo.jobName);
			$("#job-position").text(jobInfo.jobName);
			$("#job-position").attr("data-dropdown", jobInfo.guid);

			//Job Wage
			$("#job-wage").val(jobInfo.wage+".00");

			var wageFrequency = "Hourly";

			switch(jobInfo.wageType){
				case 0:
					wageFrequency = "Hourly";
				break;
				case 1:
					wageFrequency = "Weekly";
				break;
				case 2:
					wageFrequency = "Bi-Weekly";
				break;
				case 3:
					wageFrequency = "Monthly";
				break;
				case 4:
					wageFrequency = "Annually";
				break;
			}

			//Job Wage Frequency
			$("#wage-frequency").text(wageFrequency);

			$(".card-shift .btn-group.toggle button").removeClass("active");

			//Job Shift
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

			if(jobInfo.description != "" || jobInfo.description != null){
				$(".card-description").css("display" , "block").val(jobInfo.description);
				$("#job-description").val(jobInfo.description);
				$("#add-job-description").css("display", "none");
			}

			this.mode = "update";

			//Show Job Card
			this.showCard();

		},
		saveJob : function(){

			var wageType = $("#wage-frequency").text().toUpperCase();

			switch(wageType){
				case "HOURLY":
					wageType = 0;
				break;
				case "WEEKLY":
					wageType = 1;
				break;
				case "BI-WEEKLY":
					wageType = 2;
				break;
				case "MONTHLY":
					wageType = 3;
				break;
				case "ANNUALLY":
					wageType = 4;
				break;
			}

			var shiftDays = [];

			$(".card-shift .btn-group.toggle button").each(function(){
				if($(this).hasClass("active")){
					shiftDays.push(true);
				}else{
					shiftDays.push(false);
				}
			});

			var job = new Object();

				if(this.mode === "update"){
					job.id = this.selectedJobIndex;
				}

				job.employer = new Object();
				job.employer.guid = Utils.getUser().employerIds[0];
				
				job.updatedBy = new Object();
				job.updatedBy.guid = Utils.getGUID();

				if(this.mode === "create"){
					job.createdBy = new Object();
					job.createdBy.guid = Utils.getGUID();
				}

				job.jobName = $("#job-position").text();

				job.jobType = new Object();
				job.jobType.guid = $("#job-position").attr("data-dropdown");

				job.description = $("#job-description").val();
				job.wage = $("#job-wage").val();
				job.wageType = wageType;
				job.shifts = [{startHour : 3, startMin : 0, endHour : 15, endMin : 0, mon : shiftDays[0], tue : shiftDays[1], wed : shiftDays[2], thu : shiftDays[3], fri : shiftDays[4], sat : shiftDays[5], sun : shiftDays[6]}];

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

				console.log(job);

		},
		addJobDescription : function(){
			$(".card-description").css("display" , "block");
			$("#add-job-description").css("display", "none");
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.jobs = this.model.jobs;
				jsonObject.jobTypes = this.model.jobTypes;
				jsonObject.language = App.Language;
			return jsonObject;
		}

	});

	return ViewJobs;
	
});