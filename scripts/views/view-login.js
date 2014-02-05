define([
	'jquery',
	'jquerycookie',
	'vldt',
	'app',
	'utils',
	'marionette',
	'scripts/models/model-login',
	'hbs!templates/template-view-login'
], function($, Cookie, Vldt, App, Utils, Marionette, ModelLogin, TemplateViewLogin){
	'use strict';

	var ViewLogin = Marionette.ItemView.extend({
		tagName : 'div',
		className : 'app-layout',
		template: TemplateViewLogin,
		events : {
			"click #login"		: "login",
			"click #signup"		: "register",
			"click #signinHS"	: "signinHS",
			"click #cancelHS"	: "cancelHS"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Login initialized...");
			App.setSessionView('index');
		},
		login : function(){
			console.log("Login...");
			
			$("input").removeClass("error");
			$("label").removeClass("bad");
			$("label[for=emailaddress]").text("Email Address");
			$("label[for=password]").text("Password");

			var vldtLogin = vldt.validate({
				"#emailaddress" : "email",
				"#password"		: "alphanumeric"
			});

			if(!vldtLogin){
				
				var errors = vldt.getErrors();
				console.log(vldt.getErrors());

				for(var key in errors){
					if(errors[key] === false){
						$(key).addClass("error");
						switch(key){
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
				var modellogin = new ModelLogin();

				modellogin.save(
					{
						emailaddress : $("#emailaddress").val(),
						password	 : $("#password").val()
					},
					{
						success : function(response){
							var errorCode = response.get("errorCode");
							switch(errorCode){
								case -4:
									Utils.showToast({
										message: "Unknown error occured",
										type: "bad"
									});
									break;
								case -3:
									Utils.showToast({
										message: "Invalid Email Address or Password",
										type: "bad"
									});
									break;
								case -2:
									Utils.showToast({
										message: "Invalid Email Address or Password",
										type: "bad"
									});
									break;
								case -1:
									break;
								case 0:
									that.createSession(response);
									App.router.controller.profile();
									break;
								default:
									break;				
							}

						},
						error : function(){
							console.log("Unable to connect to server...");
							Utils.showToast({
								message: "Unable to connect to server",
								type: "bad"
							});

						}
					}
				);
			}
		},
		register : function(){
			App.router.controller.register();
		},
		signinHS : function(){
			$("#modal-hotschedules").addClass("show");
		},
		cancelHS : function(){
			$("#modal-hotschedules").removeClass("show");	
		},
		createSession : function(response) {
			var authsession = {
				firstname : response.attributes.firstname,
				lastname : response.attributes.lastname,
				guid : response.attributes.guid
			}
			Utils.createSession(authsession);
		},
		serializeData : function(){
			var jsonObject = new Object();
				jsonObject.language = App.Language;
			return jsonObject;
		}
	});

	return ViewLogin;
});