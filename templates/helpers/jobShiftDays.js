define([
	'Handlebars'
],
	function (Handlebars){
		function jobShiftDays(context){

			if(context.length !== 0){

				var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
				var shiftDays = [];
				var retval = "";

				if(context.mon){ shiftDays.push(0); }
				if(context.tue){ shiftDays.push(1); }
				if(context.wed){ shiftDays.push(2); }
				if(context.thu){ shiftDays.push(3); }
				if(context.fri){ shiftDays.push(4); }
				if(context.sat){ shiftDays.push(5); }
				if(context.sun){ shiftDays.push(6); }

				for(i = 0; i < shiftDays.length; i++){
					retval += days[shiftDays[i]] + " ";
				}

				return retval + ": ";
			}

		}
	
	Handlebars.registerHelper('jobShiftDays', jobShiftDays);
	return jobShiftDays;
});	