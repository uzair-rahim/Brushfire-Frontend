define([
	'jquery',
	'jquerycookie',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/collections/collection-businesses',
	'hbs!templates/template-view-find-business'
], function($, Cookie, Vldt, App, Utils, Marionette, CollectionBusinesses, TemplateViewBusiness){
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
			"click .claimedSignin"		: "signin",
			"click .claim"				: "claimBusiness",
			"click #skip"				: "skip"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Find Business initialized...");
			Utils.deleteSearchTerms();
		},
		onRender : function(){
			var search = Utils.getSearchTerms();
			$("#name").val(search.name);
			$("#address").val(search.address);
			$(".search-result p span.name").text(search.name);
			$(".search-result p span.address").text(search.address);
		},
		findBusiness : function(){

			var that = this;
			Utils.deleteSearchTerms()

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

				var businessName = $("#name").val();
				var businessAddress = $("#address").val();

				Utils.setSearchTerms({name: businessName, address:businessAddress});

				var businesses = new CollectionBusinesses({name : businessName, address : businessAddress});

				businesses.fetch({
					success : function(response){
						that.model = response.models[0].attributes.businesses;
						that.render();
					},
					error : function(){

					}
				});

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
		},
		claimBusiness : function(){
			App.router.controller.accountverification();
		},
		skip : function(){
			App.router.controller.profile();
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.businesses = this.model;
			return jsonObject;
		}
		
	});

	return ViewFindBusiness;
});