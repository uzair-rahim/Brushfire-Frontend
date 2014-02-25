define([
	'Handlebars'
],
	function (Handlebars){
		function jobShifts(context){
			
			if(context.length === 0){
				return "-"
			}else{
				return context.length;	
			}

		}
	
	Handlebars.registerHelper('jobShifts', jobShifts);
	return jobShifts;
});	