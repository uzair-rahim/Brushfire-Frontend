define([
	'backbone'
	],
	function(Backbone){
		var Language = Backbone.Model.extend({
			urlRoot : '/brushfire/services/rest/i18n/',
			language: "en",
			defaults : {
				ln : "en"
			},
			initialize : function(ln){
				console.log('Language model initialzie...');
				if(typeof ln !== "undefined"){
					this.language = ln;
				}
			},
			url : function(){
				var url = this.urlRoot + this.language;
				return url;
			}

		});

		return Language;
	}
);