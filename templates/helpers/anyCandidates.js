define([
	'Handlebars'
],
	function (Handlebars){
		function anyCandidates(object, options){

			var numberOfJobs = object.length;
			var totalCandidates = 0;

			for(var i = 0; i<numberOfJobs; i++){
				totalCandidates += object[i].candidates.length;
			}

			return totalCandidates > 0 ? options.fn(this) : options.inverse(this);
		}
	
	Handlebars.registerHelper('anyCandidates', anyCandidates);
	return anyCandidates;
});	