define([
	'backbone'
	],
	function(Backbone){
		var EmployerProfile = Backbone.Model.extend({
			url : '',
			defaults : {
				
			},
			initialize : function(){
				console.log('Employer Profile model initialize...');
			}

		});

		return EmployerProfile;
	}
);