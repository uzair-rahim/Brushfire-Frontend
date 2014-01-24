define([
	'jquery',
	'vldt',
	'app',
	'utils',
	'marionette',
	'hbs!templates/template-view-profile'
],function($, Vldt, App, Utils, Marionette, TemplateViewProfile){
	'use strict';

	var ViewProfile = Marionette.ItemView.extend({
		tagName: 'div',
		className : '',
		template : TemplateViewProfile,
		events : {
			"click .edit-table tr"		: "editTable",
			"click button.cancel" 		: "clearEdit",
			"click button.dropDown"		: "showMoreOptions",
			"click .dropDown-menu li a"	: "updatePPA"
		},
		initialize : function(){
			_.bindAll.apply(_, [this].concat(_.functions(this)));
			console.log("View Profile initialized...");
		},
		onShow : function(){
			$(document).click(function(event){
				var target = $(event.target).is(".dropDown");
				if(!target){
					$(".dropDown-menu").css("display", "none");
				}
			});
		},
		editTable : function(event){
			this.cancleEdit();
			$(event.currentTarget).addClass("selected");
			$(event.currentTarget).find("td:eq(1)").hide();
			$(event.currentTarget).find("td:eq(2)").show();
			$(event.currentTarget).find("td:eq(3)").html("");

		},
		cancleEdit : function(){
			$(".edit-table tr").each(function(){
				$(this).removeClass("selected");
				$(this).find("td:eq(1)").show();
				$(this).find("td:eq(2)").hide();
				$(this).find("td:eq(3)").html("Edit");
			});
		},
		clearEdit : function(event){
			event.stopPropagation();
			this.cancleEdit();
		},
		showMoreOptions : function(){
			$(".dropDown-menu").css("display", "block");
		},
		updatePPA : function(event){
			$("button#ppa").text(event.target.text);
		}
	});

	return ViewProfile;
	
});