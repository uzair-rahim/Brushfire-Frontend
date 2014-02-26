define([
    'Handlebars'
],
    function (Handlebars){
        function timeSince(context){

            var now = new Date();
            var ts = new Date(context);
            var delta = now.getTime() - ts.getTime();

            delta = delta/1000; 

            var ps, pm, ph, pd, min, hou, sec, days;

            if(delta<=59){
                ps = (delta>1) ? "s": "";
                return Math.floor(delta)+" second"+ps
            }

            if(delta>=60 && delta<=3599){
                min = Math.floor(delta/60);
                sec = Math.floor(delta-(min*60));
                pm = (min>1) ? "s": "";
                ps = (sec>1) ? "s": "";

                return min+" minute"+pm;//+" "+sec+" second"+ps;
            }

            if(delta>=3600 && delta<=86399){
                hou = Math.floor(delta/3600);
                min = Math.floor((delta-(hou*3600))/60);
                ph = (hou>1) ? "s": "";
                pm = (min>1) ? "s": "";
                return hou+" hour"+ph+" "+min+" minute"+pm;
            } 

            if(delta>=86400){
                days = Math.floor(delta/86400);
                hou =  Math.floor((delta-(days*86400))/60/60);
                pd = (days>1) ? "s": "";
                ph = (hou>1) ? "s": "";
                return days+" day"+pd+" "+hou+" hour"+ph;
            }
   
        }
    
    Handlebars.registerHelper('timeSince', timeSince);
    return timeSince;
}); 