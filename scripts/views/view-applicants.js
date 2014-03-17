define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-applicants'
],function($, Vldt, App, Utils, Marionette, TemplateViewApplicants){
	'use strict';

	var ViewApplicants = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewApplicants,
		events : {
			
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Applicants initialized...");
			App.setSessionView('applicants');
			Utils.setBreadcrumb({"Applicants": " "});
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return ViewApplicants;
	
});