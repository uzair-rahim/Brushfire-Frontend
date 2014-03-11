define([
	'Handlebars'
],
	function (Handlebars){
		function dateConverter(context){

			var date = new Date(context);
			var	retval = date.getDay()+"/"+date.getDate()+"/"+date.getFullYear();
			
			return retval;
		}
	
	Handlebars.registerHelper('dateConverter', dateConverter);
	return dateConverter;
});	