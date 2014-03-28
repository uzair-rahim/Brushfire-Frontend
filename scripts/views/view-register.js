define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/views/view-find-business',
	'scripts/models/model-user',
	'hbs!templates/template-view-register'
], function($, Vldt, App, Utils, Marionette, ViewFindBusiness, ModelUser, TemplateViewRegister){
	'use strict';

	var ViewRegister = Marionette.ItemView.extend({
		tagName : 'div',
		className : '',
		template: TemplateViewRegister,
		events : {
			'click #register' 	: 'register',
			'click #cancel'   	: 'cancel',
			"click #signupHS"	: "signupHS",
			"click #cancelHS"	: "cancelHS"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Register initialized...");
			App.setSessionView('register');
		},
		register : function(){
			console.log("Register...");

			$("input").removeClass("error");
			$("label").removeClass("bad");
			$("label[for=firstname]").text("First Name");
			$("label[for=lastname]").text("Last Name");
			$("label[for=emailaddress]").text("Email Address");
			$("label[for=password]").text("Password");

			var vldtRegister = vldt.validate({
				"#firstname"	: "alpha",
				"#lastname"		: "alpha",
				"#emailaddress"	: "email",
				"#password"		: "alphanumeric"
			});

			if(!vldtRegister){

				var errors = vldt.getErrors();
				console.log(vldt.getErrors());

				for(var key in errors){
					if(errors[key] === false){
						$(key).addClass("error");
						switch(key){
							case "#firstname":
								$("label[for=firstname]").addClass("bad").text("First Name is required");
							break;
							case "#lastname":
								$("label[for=lastname]").addClass("bad").text("Last Name is required");
							break;	
							case "#emailaddress":
								$("label[for=emailaddress]").addClass("bad").text("Email Address is required");
							break;
							case "#password":
								$("label[for=password]").addClass("bad").text("Password is required");
							break;
						}
					}
				}

				return false;
			}else{
				var that = this;
				var modeluser = new ModelUser();

				
				modeluser.save({
						firstname		: $("#firstname").val(),
						lastname		: $("#lastname").val(),
						emailaddress	: $("#emailaddress").val(),
						password		: $("#password").val()
					},
					{
						headers : {
							'token' : Utils.getUser().brushfireToken
						},
						success : function(response){
							var errorCode = response.get("errorCode");
							if( errorCode === -1){
								console.log("Email Address already exists...");
								$("#emailaddress").addClass("error");
								$("label[for=emailaddress]").addClass("bad").text("Email Address already exists");
							}else{
								console.log("User successfuly registered!");
								that.createSession(response);
								App.router.controller.findBusiness();
							}

					},
						error : function(){
						console.log("Unable to connect to server...");
						Utils.showToast({
							message: "Unable to connect to server",
							type: "bad"
						});
					}
				});
				
			}
		},
		cancel : function(){
			console.log('Cancel register...');
			App.router.controller.index();
		},
		signupHS : function(){
			$("#modal-hotschedules").addClass("show");
		},
		cancelHS : function(){
			$("#modal-hotschedules").removeClass("show");	
		},
		createSession : function(response) {
			var authsession = {
				firstname : response.attributes.firstname,
				lastname : response.attributes.lastname,
				guid : response.attributes.guid,
				brushfireToken : response.attributes.brushfireToken
			}
			Utils.createSession(authsession);
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return ViewRegister;
});