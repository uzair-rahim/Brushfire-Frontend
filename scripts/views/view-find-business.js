define([
	'jquery',
	'jquerycookie',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/models/model-business',
	'scripts/collections/collection-businesses',
	'hbs!templates/template-view-find-business'
], function($, Cookie, Vldt, App, Utils, Marionette, ModelBusiness, CollectionBusinesses, TemplateViewBusiness){
	'use strict';

	var ViewFindBusiness = Marionette.ItemView.extend({
		tagName : 'div',
		className : '',
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
			App.setSessionView('findBusiness');
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
			App.router.controller.addBusiness();
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
		claimBusiness : function(event){
			var business = $(event.target).next(".data-yelp");
			var businessObject 				= new Object();
				businessObject.userGuid 	= Utils.getGUID();
				businessObject.sourceName 	= $(business).find("input[name='name']").val();
				businessObject.sourceId 	= $(business).find("input[name='id']").val();
				businessObject.address1 	= $(business).find("input[name='address1']").val();
				businessObject.address2 	= $(business).find("input[name='address2']").val();
				businessObject.city 		= $(business).find("input[name='city']").val();
				businessObject.state 		= $(business).find("input[name='state']").val();
				businessObject.zip 			= $(business).find("input[name='zip']").val();
				businessObject.phone 		= $(business).find("input[name='phone']").val();
				businessObject.country 		= $(business).find("input[name='country']").val();
			
			var modelBusiness = new ModelBusiness();	
				modelBusiness.save(businessObject, {
					success : function(){
						console.log("Business successfully saved...");
						App.router.controller.accountVerification();
					},
					error : function(){
						console.log("Error saving business...");
					}
				});
			
		},
		skip : function(){
			App.router.controller.jobs();
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.businesses = this.model;
				jsonObject.language = App.Language;
			return jsonObject;
		}
		
	});

	return ViewFindBusiness;
});