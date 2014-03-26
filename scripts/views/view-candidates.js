define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-candidates'
],function($, Vldt, App, Utils, Marionette, TemplateViewcandidates){
	'use strict';

	var Viewcandidates = Marionette.ItemView.extend({
		tagName: 'div',
		className : 'app-body-content',
		template : TemplateViewcandidates,
		
		events : {
			
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

		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return Viewcandidates;
	
});