define([
	'jquery',
	'jquerycookie',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-add-business'
], function($, Cookie, Vldt, App, Utils, Marionette, TemplateAddBusiness){
	'use strict';

	var ViewAddBusiness = Marionette.ItemView.extend({
		tagName : 'div',
		className : 'app-layout',
		template: TemplateAddBusiness,
		events : {
			"click #add-business"	: "addBusiness",
			"click #dont-add" 		: "dontAddBusiness"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Add Business initialized...");
		},

		dontAddBusiness : function(){
			App.router.controller.findbusiness();
		},

		addBusiness : function(){
			var that = this;

			$("input").removeClass("error");
			$("label").removeClass("bad");
			$("label[for=name]").text("Business Name");
			$("label[for=emailaddress]").text("Email Address");
			$("label[for=streetaddress]").text("Street Address");
			$("label[for=city]").text("City");
			$("label[for=state]").text("State");
			$("label[for=zip]").text("Zip");
			$("label[for=country]").text("Country");
			$("label[for=phone]").text("Phone");

			var vldtFind = vldt.validate({
				"#name" 			: "required",
				"#emailaddress"		: "email",
				"#streetaddress"	: "required",
				"#city"				: "required",
				"#state"			: "dropdown",
				"#country"			: "dropdown",
				"#zip"				: "zip",
				"#phone"			: "phone"
			});

			if(!vldtFind){
				var errors = vldt.getErrors();
				console.log(vldt.getErrors());

				for(var key in errors){
					if(errors[key] === false){
						$(key).addClass("error");
						switch(key){
							case "#name":
								$("label[for=name]").addClass("bad").text("Business Name is required");
							break;
							case "#emailaddress":
								$("label[for=emailaddress]").addClass("bad").text("Email Address is required");
							break;
							case "#streetaddress":
								$("label[for=streetaddress]").addClass("bad").text("Street Address is required");
							break;
							case "#city":
								$("label[for=city]").addClass("bad").text("City is required");
							break;
							case "#state":
								$("label[for=state]").addClass("bad").text("State is required");
							break;
							case "#zip":
								$("label[for=zip]").addClass("bad").text("Zip is required");
							break;
							case "#country":
								$("label[for=country]").addClass("bad").text("Country is required");
							break;
							case "#phone":
								$("label[for=phone]").addClass("bad").text("Phone is required");
							break;
						}
					}
				}

				return false;

			}else{
				App.router.controller.accountverification();	
			}
			
		}
		
	});

	return ViewAddBusiness;
});