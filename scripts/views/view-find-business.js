define([
	'jquery',
	'jquerycookie',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-find-business'
], function($, Cookie, Vldt, App, Utils, Marionette, TemplateViewBusiness){
	'use strict';

	var ViewFindBusiness = Marionette.ItemView.extend({
		tagName : 'div',
		className : 'app-layout',
		template: TemplateViewBusiness,
		events : {
			"click #find" 				: "findBusiness",
			"click #add-business" 		: "addBusiness",
			"click .already-claimed"	: "alreadyClaimed",
			"click #modal-claimed"		: "hideModal",
			"click .claimedSignin"		: "signin"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Find Business initialized...");
		},
		findBusiness : function(){
			console.log("Find business...");

			$("input").removeClass("error");
			$("label").removeClass("bad");
			$("label[for=name]").text("Business Name");
			$("label[for=address]").text("Business Address");

			var vldtFind = vldt.validate({
				"#name" 	: "required",
				"#address"	: "required"
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
							case "#address":
								$("label[for=address]").addClass("bad").text("Business Address is required");
							break;
						}
					}
				}

				return false;

			}else{
				$(".search-result").css("display", "block");
				$(".search-result p span.name").text($("#name").val());
				$(".search-result p span.address").text($("#address").val());

				$("#add-business").css("display", "block");
			}
			
		},

		addBusiness : function(){
			App.router.controller.addbusiness();
		},

		alreadyClaimed : function(){
			$("#modal-claimed").addClass("show");
		},

		hideModal : function(event){
			if(!$(event.target).closest("a").length){
				$("#modal-claimed").removeClass("show");
			}
			
		},

		signin : function(){
			App.router.controller.index();
		}
		
	});

	return ViewFindBusiness;
});