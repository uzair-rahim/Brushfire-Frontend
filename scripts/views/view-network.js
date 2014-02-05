define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-network'
],function($, Vldt, App, Utils, Marionette, TemplateViewNetwork){
	'use strict';

	var ViewNetwork = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewNetwork,
		events : {
			
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Account initialized...");
			App.setSessionView('network');
			Utils.setBreadcrumb({"Network": " "});
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return ViewNetwork;
	
});