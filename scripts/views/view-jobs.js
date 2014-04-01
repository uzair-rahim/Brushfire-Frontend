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
		selectedJobIndex : 0,
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
			Utils.disableFilter();

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
		getMode : function(){
			return this.mode;
		},
		setMode : function(state){
			this.mode = state;
		},
		isUpdate : function(){
			return this.getMode() == "update";
		},
		getSelectedJobIndex : function(){
			return this.selectedJobIndex;
		},
		setSelectedJobIndex : function(index){
			this.selectedJobIndex = index;
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
		addJobDescription : function(){
			$(".card-description").css("display" , "block");
			$("#add-job-description").css("display", "none");
		},
		createAJob : function(){
			console.log("Create a new job");

			$("#jobs-table tr").removeClass("selected");

			// Card Header
			$(".card-header h2").text("New Job");

			// Pills
			$(".card-container-header .pills li:eq(1)").hide();

			// Position
			$("#job-position").text($("#job-position").next().find("li:eq(0) a").text());

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

			//Description
			$("#job-description").val("");
			$(".card-description").css("display" , "none");
			$("#add-job-description").css("display", "block");

			this.setMode("create");
			this.showCard();
		},
		editAJob : function(event){
			console.log("Edit a job");

			this.setSelectedJobIndex($(event.target).parent().index());

			//Highlight Selected Job
			$("#jobs-table tr").removeClass("selected");
			$("#jobs-table tr:eq("+(this.getSelectedJobIndex()+1)+")").addClass("selected");

			//Show candidates tab
			$(".card-container-header .pills li:eq(1)").show();

			var jobInfo = this.model.jobs[this.getSelectedJobIndex()];

			//Job Name
			$(".card-header h2").text(jobInfo.jobName);

			//Job Position
			$("#job-position").text(jobInfo.jobName);
			$("#job-position").attr("data-dropdown", jobInfo.jobType.guid);

			//Job Wage
			$("#job-wage").val(jobInfo.wage);

			//Job Wage Frequency
			var jobWageType = jobInfo.wageType.toLowerCase();
			$("#wage-frequency").text(jobWageType.charAt(0).toUpperCase() + jobWageType.substring(1));

			//Job Shift
			$(".card-shift .btn-group.toggle button").removeClass("active");
			if(jobInfo.shifts.length > 0){

				if(jobInfo.shifts[0].mon){ $(".card-shift .btn-group.toggle button:eq(0)").addClass("active"); }
				if(jobInfo.shifts[0].tue){ $(".card-shift .btn-group.toggle button:eq(1)").addClass("active"); }
				if(jobInfo.shifts[0].wed){ $(".card-shift .btn-group.toggle button:eq(2)").addClass("active"); }
				if(jobInfo.shifts[0].thu){ $(".card-shift .btn-group.toggle button:eq(3)").addClass("active"); }
				if(jobInfo.shifts[0].fri){ $(".card-shift .btn-group.toggle button:eq(4)").addClass("active"); }
				if(jobInfo.shifts[0].sat){ $(".card-shift .btn-group.toggle button:eq(5)").addClass("active"); }
				if(jobInfo.shifts[0].sun){ $(".card-shift .btn-group.toggle button:eq(6)").addClass("active"); }

				var startDayPart = "AM";
				var endDayPart = "AM";
				var shiftStartHour = jobInfo.shifts[0].startHour;
				var shiftStartMin = jobInfo.shifts[0].startMin;
				var shiftEndHour = jobInfo.shifts[0].endHour;
				var shiftEndMin = jobInfo.shifts[0].endMin;
				if(shiftStartHour > 12){ shiftStartHour = shiftStartHour - 12; startDayPart = "PM"; }
				if(shiftStartMin < 10){ shiftStartMin = "0"+shiftStartMin; }
				if(shiftEndHour > 12){ shiftEndHour = shiftEndHour - 12; endDayPart = "PM"; }
				if(shiftEndMin < 10){ shiftEndMin = "0"+shiftEndMin; }
				$(".shift-time").val(shiftStartHour + ":" + shiftStartMin + " " + startDayPart + " - " + shiftEndHour + ":" + shiftEndMin + " " + endDayPart);	

			}else{
				$(".shift-time").val("");
			}

			//Job Description
			if(jobInfo.description != "" && jobInfo.description != null){
				$(".card-description").css("display" , "block");
				$("#job-description").val(jobInfo.description);
				$("#add-job-description").css("display", "none");
			}
			
			this.setMode("update");
			this.showCard();
		},
		saveJob : function(){
			console.log("Save a job");
			var requestType = "post";

			//Job Shifts
			var shiftDays = [];
			$(".card-shift .btn-group.toggle button").each(function(){
				if( $(this).hasClass("active") ){ shiftDays.push(true); }
				else{ shiftDays.push(false); }
			});

			//Job Name
			var name = $("#job-position").text();

			var job = this.model.jobs[this.getSelectedJobIndex()];

			var jobObject = new Object();
				jobObject.shifts = new Object();
				jobObject.jobType = new Object();
				jobObject.employer = new Object();
				jobObject.updatedBy = new Object();
				jobObject.createdBy = new Object();

				jobObject.id = 0;
				jobObject.jobType.id = 0;
				jobObject.employer.id = 0;
				jobObject.updatedBy.id = 0;
				jobObject.createdBy.id = 0;
				jobObject.createdBy.guid = Utils.getGUID();
				jobObject.employer.guid = Utils.getUser().employerIds[0];

				if(this.isUpdate()){
					requestType = "put"
					jobObject.id = job.id;
					jobObject.guid = job.guid;
					jobObject.jobType.id = job.jobType.id;
					jobObject.employer.id = job.employer.id;
					jobObject.employer.guid = job.employer.guid;
					jobObject.updatedBy.id = job.updatedBy.id;
					jobObject.createdBy.id = job.createdBy.id;
					jobObject.createdBy.guid = job.createdBy.guid;
				}

				jobObject.jobName = name.charAt(0).toUpperCase() + name.substring(1);
				jobObject.jobType.guid = $("#job-position").attr("data-dropdown");
				jobObject.wage = $("#job-wage").val();
				jobObject.wageType = $("#wage-frequency").text().toUpperCase();
				jobObject.description = $("#job-description").val();
				jobObject.updatedBy.guid = Utils.getGUID();
				jobObject.shifts = [{id: 0, startHour : 3, startMin : 0, endHour : 15, endMin : 0, mon : shiftDays[0], tue : shiftDays[1], wed : shiftDays[2], thu : shiftDays[3], fri : shiftDays[4], sat : shiftDays[5], sun : shiftDays[6]}];	

			console.log(jobObject);

			var that = this;
			var modelJob = new ModelJob();				
			modelJob.save(jobObject,{
				type : requestType,
				headers : {
					'token' : Utils.getUser().brushfireToken
				},
				success : function(){
					App.router.controller.jobs();
					console.log("Job successfully saved");
				},
				error : function(){
					console.log("There was an error trying to save the job");
				}
			});
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