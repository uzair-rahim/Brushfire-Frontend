
define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/models/model-employer-profile',
	'hbs!templates/template-view-profile-info'
],function($, Vldt, App, Utils, Marionette, ModelEmployerProfile, TemplateViewProfileInfo){
	'use strict';

	var ViewProfileInfo = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewProfileInfo,
		events : {
			"click .editable-list li.editable a"	: "editMode",
			"click button.cancel-edit"				: "cancelEdit",
			"click button.save-changes"				: "saveChanges"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Profile initialized...");
		},
		editMode : function(){
			this.showHideFields();
			var listItem = $(event.target).parent();
			$(listItem).find("span").hide();
			$(listItem).find("div.edit-mode").show();
		},
		cancelEdit : function(){
			var cancelButton = $(event.target).parent().parent();
			$(cancelButton).find("span").show();
			$(cancelButton).find("div.edit-mode").hide();
		},
		saveChanges : function(){

			var saveButton = $(event.target);
			var newValue = $(saveButton).prev().val();		
			$(saveButton).parent().parent().find("span").text(newValue);
			this.showHideFields();

			var employer = new Object();
				employer.id = this.model.id;
				employer.name = $("#employer-name").val();
				employer.url = $("#employer-website").val();
				employer.phone = $("#employer-phone").val();
				//employer.ppa = this.model.ppa;
				//employer.storeHours = this.model.storeHours;
				//employer.preferences = this.model.preferences;
				//employer.admins = this.model.admins;
				//employer.location = this.model.location;

			var employerProfile = new ModelEmployerProfile({
				guid : this.model.guid
			});

				employerProfile.save(employer, {
					success : function(){
						console.log("Employer profile successfully saved");
					},
					error : function(){
						console.log("There was an error saving employer profile");
					}
				});
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.employerProfile = this.model;
				jsonObject.language = App.Language;
			return jsonObject;
		},
		showHideFields : function(){
			$(".editable-list li.editable div.edit-mode").hide();
			$(".editable-list li.editable span").show();
		}
	});

	return ViewProfileInfo;
	
});