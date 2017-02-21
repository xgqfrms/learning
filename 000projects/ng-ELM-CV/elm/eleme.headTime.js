var elemeHeadTime = angular.module('elemeHeadTime', [])

elemeHeadTime.service('elemeHeadTime',function($rootScope,$http) {
	
	// 添加tab页
	this.getData = function(){
		var monthNames = ["01", "02", "03", "04", "05", "06",
		                  "07", "08", "09", "10", "11", "12"
		              ];
	      var dayNames = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
	
	      var newDate = new Date();
	      newDate.setDate(newDate.getDate());
	      $rootScope.data = newDate.getFullYear() + '/' + monthNames[newDate.getMonth()] + '/' + newDate.getDate() + '， ' + dayNames[newDate.getDay()];
	      
	}
	
	this.getTime = function(options){

	    var defaults = {
	      offset: '+0',
	      type: 'analog'
	    };
	    var _this = this;
	    var opts = jQuery.extend(defaults, options);

	    setInterval( function() {
	    	var hour = calcTime(opts.offset).getHours();
	    	var min = calcTime(opts.offset).getMinutes();
	    	var second = calcTime(opts.offset).getSeconds();
	    	if(hour < 10){
	    		hour = "0" + hour;
	    	}
	    	if(min < 10){
	    		min = "0" + min;
	    	}
	    	if(second < 10){
	    		second = "0" + second;
	    	}
	    	$rootScope.hours = hour;
	    	$rootScope.mins = min;
	    	$rootScope.seconds = second;
//	    	rootScope.$evalAsync();
	    	$rootScope.$apply();
	      /*var seconds = calcTime(opts.offset).getSeconds();
	      if(opts.type=='analog')
	      {
	        var sdegree = seconds * 6;
	        var srotate = "rotate(" + sdegree + "deg)";
	        jQuery(_this).find(".sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
	      }
	      else
	      {
	        jQuery(_this).find(".sec").html(seconds);
	      }*/
	    }, 10 );

	    /*setInterval( function() {
	     var hours = calcTime(opts.offset).getHours();
	      var mins = calcTime(opts.offset).getMinutes();
	      if(opts.type=='analog')
	      {
	        var hdegree = hours * 30 + (mins / 2);
	        var hrotate = "rotate(" + hdegree + "deg)";
	        jQuery(_this).find(".hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
	      }
	      else
	      {
	        jQuery(_this).find(".hour").html(hours);
	      }
	      var meridiem = hours<12?'AM':'PM';
	      jQuery(_this).find('.meridiem').html(meridiem);
	    }, 1000 );*/

	    /* setInterval( function() {
        var mins = calcTime(opts.offset).getMinutes();
	      if(opts.type=='analog')
	      {
	        var mdegree = mins * 6;
	        var mrotate = "rotate(" + mdegree + "deg)";        
	        jQuery(_this).find(".min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});                
	      }
	      else
	      {
	        jQuery(_this).find(".min").html(mins);
	      }
	    }, 1000 );*/
	}
	
	calcTime = function(offset) {

		  // create Date object for current location
		  d = new Date();

		  // convert to msec
		  // add local time zone offset
		  // get UTC time in msec
		  utc = d.getTime() + (d.getTimezoneOffset() * 60000);

		  // create new Date object for different city
		  // using supplied offset
		  nd = new Date(utc + (3600000*offset));

		  // return time as a string
		  return nd;
		};
});