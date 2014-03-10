define([
	'Handlebars'
],
	function (Handlebars){
		function jobShiftHours(context){

			if(context.length === 0){
				return "-"
			}else{

				var startDayPart = "AM";
				var shiftStartHour = context.startHour;
					if(shiftStartHour > 12){
						shiftStartHour = shiftStartHour - 12;
						startDayPart = "PM"
					}
				var shiftStartMin = context.startMin;
					if(shiftStartMin < 10){
						shiftStartMin = "0"+shiftStartMin;
					}
				var endDayPart = "AM";
				var shiftEndHour = context.endHour;
					if(shiftEndHour > 12){
						shiftEndHour = shiftEndHour - 12;
						endDayPart = "PM"
					}
				var shiftEndMin = context.endMin;
					if(shiftEndMin < 10){
						shiftEndMin = "0"+shiftEndMin;
					}

				var mon = context.mon;
				var tue = context.tue;
				var wed = context.wed;
				var thu = context.thu;
				var fri = context.fri;
				var sat = context.sat;
				var sun = context.sun;

				return  shiftStartHour + ":" + shiftStartMin + " " + startDayPart + " - " + shiftEndHour + ":" + shiftEndMin + " " + endDayPart;
			}

		}
	
	Handlebars.registerHelper('jobShiftHours', jobShiftHours);
	return jobShiftHours;
});	