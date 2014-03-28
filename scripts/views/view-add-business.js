define([
	'jquery',
	'jquerycookie',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/models/model-business',
	'hbs!templates/template-view-add-business'
], function($, Cookie, Vldt, App, Utils, Marionette, ModelBusiness, TemplateAddBusiness){
	'use strict';

	var ViewAddBusiness = Marionette.ItemView.extend({
		tagName : 'div',
		className : '',
		template: TemplateAddBusiness,
		events : {
			"click #add-business"	: "addBusiness",
			"click #dont-add" 		: "dontAddBusiness"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Add Business initialized...");
			App.setSessionView('addBusiness');
		},

		dontAddBusiness : function(){
			App.router.controller.findBusiness();
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
				"#name" 			: "alphanumeric",
				"#emailaddress"		: "email",
				"#streetaddress"	: "alphanumeric",
				"#city"				: "alphanumeric",
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

				var business 			= new Object();
					business.userGuid 	= Utils.getGUID();
					business.sourceName = $("#name").val();
					business.sourceId 	= "non-yelp-id";
					business.email 		= $("#emailaddress").val();
					business.address1	= $("#streetaddress").val();
					business.address2	= "";
					business.city 		= $("#city").val();
					business.state 		= $("#state").attr("data-dropdown");
					business.zip 		= $("#zip").val();
					business.phone 		= $("#phone").val();
					business.country 	= $("#country").attr("data-dropdown");

					var modelBusiness = new ModelBusiness();
					
					modelBusiness.save(business, {
						headers : {
							'token' : Utils.getUser().brushfireToken
						},
						success : function(){
							console.log("Business successfully saved...");
							App.router.controller.accountVerification();
						},
						error : function(){
							console.log("Error saving business...")
						}
					});
			}
			
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
		
	});

	return ViewAddBusiness;
});