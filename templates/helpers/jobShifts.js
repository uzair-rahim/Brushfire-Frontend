define([
	'Handlebars'
],
	function (Handlebars){
		function jobShifts(context){

			
			
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


				return "<div style='line-height:16px; float:left; clear:both; font-size: 12px;'><span style='font-weight:bold;'>M - F:</span> " + shiftStartHour + ":" + shiftStartMin + " " + startDayPart + " - " + shiftEndHour + ":" + shiftEndMin + " " + endDayPart+"</div>";
			}

		}
	
	Handlebars.registerHelper('jobShifts', jobShifts);
	return jobShifts;
});	