define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-account'
],function($, Vldt, App, Utils, Marionette, TemplateViewAccount){
	'use strict';

	var ViewAccount = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewAccount,
		events : {
			
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Account initialized...");
			App.setSessionView('account');
			Utils.setBreadcrumb({"Account Settings" : " "});
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return ViewAccount;
	
});