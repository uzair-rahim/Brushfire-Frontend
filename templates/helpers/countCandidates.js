define([
	"Handlebars"
	],
	function (Handlebars){
		function countCandidates(context){

			var count = 0;
			for(var i = 0; i < context.length; i++){
				count += context[i].candidates.length;
			}

			return count;
		}
	
	Handlebars.registerHelper('countCandidates', countCandidates);
	return countCandidates;
});	