import $ from 'jquery'; 

var d=document;								//GENERAL NOTE: Global variable declarations should not be made within
var fhour=0;								//if-else blocks, as such a variable will be reset whether or not the
var nframes0=64;							//condition is actually executed. Hence, I declare a few here first with
var nframes=64;								//"NULL" value.
var nframes_indx=64;
//var urlc="https://climatereanalyzer.org/";
var urlm="http://mco.acg.maine.edu/";
var imgArray=new Array();
var mdl="NULL";
var dm="NULL";
var param="NULL";
var date_str0="NULL";
var date_str="NULL";
var mdl_pulldown=d.getElementById("mdl_pulldown");
var dm_pulldown=d.getElementById("dm_pulldown");
var param_pulldown=d.getElementById("param_pulldown");
var dates_pulldown=d.getElementById("dates_pulldown");
var first_iteration=1;
var slider;
var dates;
var date1;
var img_index_array;
var img_dir
var fext
var infile
var i
var n 
var imgfile
var i_load



var mdl_options=[
	["aqm","AQM | CONUS 4km 48h"]
	//["gfs","GFS | Global 10 day"],
	//["nam12km","NAM | CONUS 12km 84h"],
	//["nam","NAM | CONUS 3km 60h"],
	//["nam-ak","NAM | Alaska 3km 60h"],
	//["hrrr","HRRR | CONUS 3km 18/36h"],
	//["hrrr-ak","HRRR | Alaska 3km 18/36h"],
	//["nbm-conus","NBM | CONUS 10km 36h"],
	///["urma","URMA | CONUS 3km 24h"]
	//["rtofs","RTOFS | Ocean 8 day"],
	//["ageye-conus","GFS/NAM/HRRR | Blend 10km 2.5 day"],
];

//--- Domains ------------------------------------------------------
var nframes_gfs=80;
var dm_options_gfs=[
	["world-wt","World"],
	["arc-lea","Arctic"],
	["ant-lea","Antarctic"],
	["nh-sat1","Northern Hemisphere (globe)"],
	["na-lc","North America"],
	["conus-lc2","United States"],
	["natlan-ced","North Atlantic"],
	["euro-lc","Europe"],
	["asia-lea2","South/Central Asia"],
	["saaf-ced","South America - Africa"],
	["ausnz-ced","Australia - New Zealand"],
	["pacific-ced","Pacific"]
	//["world-ced","World"],
];

var nframes_nam12km=28;
var dm_options_nam12km=[
	["conus-lc2","United States"],
	["usne-ced","Northeast"]
	//["usse-ced","Southeast"]
];

var nframes_nam=60;
var dm_options_nam=[
	["conus-lc","United States"],
	["usne-ced","Northeast"],
	["maine-lc","Maine"]
	//["usse-ced","Southeast"]
];

var nframes_namak=60;
var dm_options_namak=[
	["alaska-lc","Alaska"]
];

var nframes_hrrr=18;
var dm_options_hrrr=[
	["conus-lc","United States"],
	["useast-lc","East"],
	["uswest-lc","West"],
	["usne-ced","Northeast"],
	["maine-lc","Maine"]
//	["usse-ced","Southeast"]
];

var nframes_hrrrak=18;
var dm_options_hrrrak=[
	["alaska-lc","Alaska"]
];

var nframes_aqm=48;
var dm_options_aqm=[
	["conus-lc3","United States"],
	["usne-ced","Northeast"],
	["usnw-ced","Northwest"]
];

var nframes_nbm=36;
var dm_options_nbm=[
	["conus-lc","United States"],
	["usne-ced","Northeast"],
	["maine-lc","Maine"]
];

var nframes_urma=24;
var dm_options_urma =[
	["conus-lc","United States"],
	["usne-ced","Northeast"]
];

//var nframes_rtofs=60;
//var dm_options_rtofs=[
//	["natlan-ced","North Atlantic"],
//	["watlan-ced","Western Atlantic"],
//	["etpacif-ced","Eastern Tropical Pacific"]
//];

//var nframes_ageye=60;
//var dm_options_ageye=[
//	["conus-lc","United States"],
//	["usne-ced","Northeast"]
//];

//--- Variables ----------------------------------------------------

// *** GFS ***
// "world-wt", "nh-sat1", "na-lc"
var param_options_gfs=[
	["t2","2m Temperature"],
	["t2anom","2m Temperature Anomaly"],
	["t2anomsd","2m Temperature Std. Anomaly"],
	["prcp-mslp-gph500","Precipitation / MSLP"],
	["prcp-tcld-topo","Precipitation / Cloud Cover"],
	["aprcp","Accumulated Precipitation"],
	["pwtr","Precipitable Water"],
	["pwtr-anomsd","Precipitable Water Std. Anomaly"],
	["ws10-mslp","10m Wind Speed / MSLP"],
	["ws500-gph","500hPa Wind Speed / Height"],
	["ws250-mslp","250hPa Wind Speed / MSLP"],
	["snowd-mslp","Snow Depth / MSLP"],
	["gph500-anomsd","500hPa GPH Std. Anomaly"],
	["mslp-anomsd","Mean SLP Std. Anomaly"]
];
// "conus-lc2", "euro-lc", "ausnz-ced, "asia-lea2", "arc-lea", "ant-lea"
var param_options_gfs2=[
	["t2","2m Temperature"],
	["t2anom","2m Temperature Anomaly"],
	["prcp-mslp-gph500","Precipitation / MSLP"],
	["aprcp","Accumulated Precipitation"],
	["pwtr","Precipitable Water"],
	["ws10-mslp","10m Wind Speed / MSLP"],
	["gust10-mslp","10m Gust / MSLP"],
	["ws500-gph","500hPa Wind Speed / Height"],
	["snowd-mslp","Snow Depth / MSLP"]
];

// "natlan-ced", "pacific-ced", "saaf-ced"
var param_options_gfs3=[
	["t2","2m Temperature"],
	["t2anom","2m Temperature Anomaly"],
	["prcp-mslp-gph500","Precipitation / MSLP"],
	["aprcp","Accumulated Precipitation"],
	["pwtr","Precipitable Water"],
	["ws10-mslp","10m Wind Speed / MSLP"],
	["ws500-gph","500hPa Wind Speed / Height"],
	["ws250-mslp","250hPa Wind Speed / MSLP"]
];

// *** NAM12km ***
var param_options_nam12km=[
	["t2","2m Temperature"],
	["prcp-mslp-gph500","Precipitation / MSLP"],
	["aprcp","Accumulated Precipitation"],
	["pwtr","Precipitable Water"],
	["ws10-mslp","10m Wind Speed / MSLP"],
	["gust10-mslp","10m Gust / MSLP"],
	["snowd-mslp","Snow Depth / MSLP"]
];

// *** NAM ***
var param_options_nam=[
	["t2","2m Temperature"],
	["prcp-mslp-gph500","Precipitation / MSLP"],
	["aprcp","Accumulated Precipitation"],
	["pwtr","Precipitable Water"],
	["ws10-mslp","10m Wind Speed / MSLP"],
	["gust10-mslp","10m Gust / MSLP"],
	["snowd-mslp","Snow Depth / MSLP"]
];

// *** HRRR ***
var param_options_hrrr=[
	["t2","2m Temperature"],
	["prcp-mslp-gph500","Precipitation / MSLP"],
	["aprcp","Accumulated Precipitation"],
	["pwtr","Precipitable Water"],
	["ws10-mslp","10m Wind Speed / MSLP"],
	["gust10-mslp","10m Gust / MSLP"]
];

// *** AQM ***
var param_options_aqm=[
	["ozone","Ground Level Ozone"],
	["pm25","Fine Particulate Matter"]
];

// *** NBM ***
var param_options_nbm=[
	["t2","2m Temperature"],
	["apt2","2m Apparent Temperature"],
	["aprcp","Accumulated Precipitation"],
	["tcld","Total Cloud Cover"]
];

// *** URMA ***
var param_options_urma=[
	["t2","2m Temperature"],
	["aprcp","Accumulated Precipitation"],
	["aprcp6h","5-day Accumulated Precipitation"]
];

// *** AgEye ***
//var param_options_ageye=[
//	["t2","2m Temperature"],
//	["aprcp","Accumulated Precipitation"]
//];
// *** RTOFS ***
//var param_options_rtofs=[
//	["sst","Sea Surface Temperature"]
//];

//https://attacomsian.com/blog/javascript-url-search-params
//https://www.samanthaming.com/tidbits/86-window-location-cheatsheet/
mdl=GetURLParameter("mdl_id");
dm=GetURLParameter("dm_id");
param=GetURLParameter("wm_id");
//console.log("first run: wm_id="+wm_id+" dm_id="+dm_id);
if (dm == null) {
	mdl="aqm";
	dm="conus-lc3";
	param="ozone";
}

//$(window).ready(function() {
$(window).on("load",function() {
	initialize();
});

//======================================================================================================================
//http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
function GetURLParameter(sParam) {
	var sPageURL=window.location.search.substring(1);
	var sURLVariables=sPageURL.split("&");
	var i; var sParameterName;
	for (i=0; i < sURLVariables.length; i++) {
		sParameterName=sURLVariables[i].split("=");
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

//======================================================================================================================
function loopy(aa) {
	var i; const m=aa.length; const n=2; let arr=new Array(m);
	for (i=0; i < m; i++) {
		arr[i]=new Array(n);	// make each element an array
	}
	for (i=0; i < aa.length; i++) {
		arr[i][0]=aa[i][0];
		arr[i][1]=aa[i][1];
		//console.log(arr[i][0]+", "+arr[i][1]);
	}
	//console.log(" ");
	return arr;
}

//======================================================================================================================
function initialize() {
	//console.log("------------ initialize ------------");
	//console.log("hash="+window.location.hash);
	
	window.theinterval=1000;
	window.theincrement=1;
	window.theloop=setInterval(function(){next_frame(0)},window.theinterval);
	clearInterval(window.theloop);
	
	//$("#img0").error(function() {		// .error API removed in jQuery 3.0 https://api.jquery.com/error/
	$("#img0").on("error",function() {
		//$(this).attr("src", urlc+"wx/fcst/img/img_not_avail.png");
		$(this).attr("src","img/img_not_avail.png");
	});
	
	update_mdl(); get_dates(); load_images(); update_image();
	first_iteration=0;
}

//======================================================================================================================
slider.oninput=function() {
	//output.innerHTML = this.value;
	update_fhour(this.value);
}

//======================================================================================================================
function get_dates() {
	var mdl=mdl_pulldown.options[mdl_pulldown.selectedIndex].value;
	dm=dm_pulldown.options[dm_pulldown.selectedIndex].value;
	param=param_pulldown.options[param_pulldown.selectedIndex].value;
	dates=[];
	
	//--- load available dates for pulldown ---
	$.ajax({
		url: urlm+"10green/aqm_fcst/wx_frames/dates/"+mdl+"_"+dm+"_"+param+"_dates.json",
		type: "POST",		//this is needed for console.log to show in console...
		dataType: "json",
		async: false,
		cache: false,		//prevents file from being cached
		success: function(data) {
			for (i=0; i < data.length; i++) {
				dates.push(data[i]);
			}
		}
	});
	
	$("#dates_pulldown").empty();
	//$("#dates_pulldown option").remove();
	var i; var el;
	for (i=0; i < dates.length; i++) {
		//console.log("i="+i);
		el=document.createElement("option");
		el.textContent=dates[i];
		el.value=dates[i];
		dates_pulldown.appendChild(el);
	}
	
	if (first_iteration) {
		dates_pulldown[0].selected=true;
		date_str0=dates_pulldown[0].value;
	} else {
		for (var i=0; i < dates.length; i++) {
			date1=dates_pulldown[i].value
			if (date1.localeCompare(date_str0) == 0) {		//NOTE: 0 = true for localeCompare...
				dates_pulldown[i].selected=true;
			}
		}
	}
	//Validate JSON arrays -- https://jsonlint.com/
}

//======================================================================================================================
function update_dates() {
//	var date_str=dates_pulldown.options[dates_pulldown.selectedIndex].value;
//	if (first_iteration != 1) {
		date_str0=dates_pulldown.options[dates_pulldown.selectedIndex].value;
		//console.log("UPDATE_DATES: date_str0="+date_str0);
//	}
}

//======================================================================================================================
function update_mdl() {
	//console.log("------------ update_mdl ------------");
	//console.log("first_iteration="+first_iteration+" mdl="+mdl);
	if (first_iteration != 1) {
		mdl=mdl_pulldown.options[mdl_pulldown.selectedIndex].value;
	}
	
	$("#mdl_pulldown").empty();
	//var mdl_pulldown=document.getElementById("mdl_pulldown");
	var i; var el;
	for (i=0; i < mdl_options.length; i++) {
		//console.log("i="+i);
		el=document.createElement("option");
		el.textContent=mdl_options[i][1];
		el.value=mdl_options[i][0];
		mdl_pulldown.appendChild(el);
		if (mdl_pulldown[i].value == mdl) {
			mdl_pulldown[i].selected=true;
			//console.log("TRUE mdl_pulldown[i].value="+mdl_pulldown[i].value+" mdl="+mdl);
			//break;
		}
	}
	
	var dm_options=[]; var param_options=[];
	if (mdl == "gfs") {
		nframes0=nframes_gfs;
		dm_options=loopy(dm_options_gfs);
		if (dm == "conus-lc2" || dm == "euro-lc" || dm == "ausnz-ced" || dm == "asia-lea2" || dm == "arc-lea" || 
			dm == "ant-lea") {
			param_options=loopy(param_options_gfs2);
		} else if (dm == "natlan-ced" || dm == "pacific-ced" || dm == "saaf-ced") {
			param_options=loopy(param_options_gfs3);
		} else {
			// dm == "world-wt" - THIS AMBIGUOUS ELSE IS NEEDED FOR DROPDOWN TO POPULATE 1ST TIME SELECTING GFS
			param_options=loopy(param_options_gfs);
			//for (i=0; i < dm_options.length; i++) {
			//	console.log(dm_options[i][0]+" "+dm_options[i][1]);
			//}
		}
	} else if (mdl == "nam12km") {
		nframes0=nframes_nam12km;
		dm_options=loopy(dm_options_nam12km);
		param_options=loopy(param_options_nam12km);
	} else if (mdl == "nam") {
		nframes0=nframes_nam;
		dm_options=loopy(dm_options_nam);
		param_options=loopy(param_options_nam);
	} else if (mdl == "nam-ak") {
		nframes0=nframes_nam;
		dm_options=loopy(dm_options_namak);
		param_options=loopy(param_options_nam);
	} else if (mdl == "hrrr") {
		nframes0=nframes_hrrr;
		dm_options=loopy(dm_options_hrrr);
		param_options=loopy(param_options_hrrr);
	} else if (mdl == "hrrr-ak") {
		nframes0=nframes_hrrr;
		dm_options=loopy(dm_options_hrrrak);
		param_options=loopy(param_options_hrrr);
	} else if (mdl == "aqm") {
		nframes0=nframes_aqm;
		dm_options=loopy(dm_options_aqm);
		param_options=loopy(param_options_aqm);
	} else if (mdl == "nbm-conus") {
		nframes0=nframes_nbm;
		dm_options=loopy(dm_options_nbm);
		param_options=loopy(param_options_nbm);
	} else if (mdl == "urma") {
		nframes0=nframes_urma;
		dm_options=loopy(dm_options_urma);
		param_options=loopy(param_options_urma);
	}
	//} else if (mdl == "rtofs") {
	//	nframes0=nframes_rtofs;
	//	dm_options=loopy(dm_options_rtofs);
	//	param_options=loopy(param_options_rtofs);
	//} else if (mdl == "ageye-conus") {
	//	nframes0=nframes_ageye;
	//	dm_options=loopy(dm_options_ageye);
	//	param_options=loopy(param_options_ageye);
	
	$("#dm_pulldown").empty();
	//var dm_pulldown=document.getElementById("dm_pulldown");
	var i; var el;
	for (i=0; i < dm_options.length; i++) {
		//console.log("i="+i);
		el=document.createElement("option");
		el.value=dm_options[i][0];
		el.textContent=dm_options[i][1];
		dm_pulldown.appendChild(el);
		if (dm_pulldown[i].value == dm) {
			dm_pulldown[i].selected=true;
			//console.log("TRUE dm_pulldown[i].value="+dm_pulldown[i].value+" dm="+dm);
			//break;
		}
	}
	
	$("#param_pulldown").empty();
	//var param_pulldown=document.getElementById("param_pulldown");
	var i; var el;
	for (i=0; i < param_options.length; i++) {
		//console.log("i="+i);
		el=document.createElement("option");
		el.value=param_options[i][0];
		el.textContent=param_options[i][1];
		param_pulldown.appendChild(el);
		if (param_pulldown[i].value == param) {
			param_pulldown[i].selected=true;
			//console.log("TRUE param_pulldown[i].value="+param_pulldown[i].value+" param="+param);
			//break;
		}
	}
}

//======================================================================================================================
function update_param() {
	//console.log("------------ update_param ------------");
	if (first_iteration != 1) {
		mdl=mdl_pulldown.options[mdl_pulldown.selectedIndex].value;
		dm=dm_pulldown.options[dm_pulldown.selectedIndex].value;
	}
	
	var param_options=[];
	if (mdl == "gfs") {
		if (dm == "conus-lc2" || dm == "euro-lc" || dm == "ausnz-ced" || dm == "asia-lea2" || dm == "arc-lea" || 
			dm == "ant-lea") {
			param_options=loopy(param_options_gfs2);
		} else if (dm == "natlan-ced" || dm == "pacific-ced" || dm == "saaf-ced") {
			param_options=loopy(param_options_gfs3);
		} else {
			// dm == "world-wt" - THIS AMBIGUOUS ELSE IS NEEDED FOR DROPDOWN TO POPULATE 1ST TIME SELECTING GFS
			param_options=loopy(param_options_gfs);
		}
	} else if (mdl == "nam12km") {
		param_options=loopy(param_options_nam12km);
	} else if (mdl == "nam" || mdl == "nam-ak") {
		param_options=loopy(param_options_nam);
	} else if (mdl == "hrrr" || mdl == "hrrr-ak") {
		param_options=loopy(param_options_hrrr);
	} else if (mdl == "aqm") {
		param_options=loopy(param_options_aqm);
	} else if (mdl == "nbm-conus") {
		param_options=loopy(param_options_nbm);
	} else if (mdl == "urma") {
		param_options=loopy(param_options_urma);
	}
	//} else if (mdl == "rtofs") {
	//	param_options=loopy(param_options_rtofs);
	//} else if (mdl == "ageye-conus") {
	//	param_options=loopy(param_options_ageye);
	
	$("#param_pulldown").empty();
	//var param_pulldown=document.getElementById("param_pulldown");
	var i; var el;
	for (i=0; i < param_options.length; i++) {
		//console.log("i="+i);
		el=document.createElement("option");
		el.value=param_options[i][0];
		el.textContent=param_options[i][1];
		param_pulldown.appendChild(el);
		if (param_pulldown[i].value == param) {
			param_pulldown[i].selected=true;
		}
	}
}

//======================================================================================================================
function update_fhour(input) {
	//console.log("------------ update_fhour ------------");
	window.fhour=input;
	update_image();
}

//======================================================================================================================
function load_images() {
	//console.log("------------ load_images ------------");
	var mdl=mdl_pulldown.options[mdl_pulldown.selectedIndex].value;
	var dm=dm_pulldown.options[dm_pulldown.selectedIndex].value;
	var param=param_pulldown.options[param_pulldown.selectedIndex].value;
	var date_str=dates_pulldown.options[dates_pulldown.selectedIndex].value;
	
	var path_full="http://"+window.location.hostname+window.location.pathname+"?mdl_id="+mdl+"&dm_id="+dm+"&wm_id="+param;
	window.history.replaceState( {} , "title", path_full);
	//console.log(path_full);
	//console.log(window.location.href);
	
	var img0=document.getElementById("img0");
	//var width0=img0.naturalWidth;
	//var height0=img0.naturalHeight;
	img0.style.minWidth="1024px";
	img0.style.maxWidth="1024px";
	//console.log("i_load="+i_load);
	
	if (dm == "world-wt" || dm == "conus-lc" || dm == "conus-lc2" || dm == "conus-lc3" || dm == "pacific-ced") {
		img0.style.minWidth="1024px";
		//if (dm == "world-ced" && param == "t2anom") {
		//	img0.style.maxWidth="1172px";
		//} else {
			img0.style.maxWidth="1100px";
		//}
	} else if (dm == "arc-lea" || dm == "ant-lea") {
		//if (param == "t2anom") {
		//	img0.style.minWidth="924px";
		//	img0.style.maxWidth="924px";
		//} else {
			img0.style.minWidth="850px";
			img0.style.maxWidth="850px";
		//}
	} else if (dm == "usne-ced2") {
		img0.style.minWidth="850px";
		img0.style.maxWidth="850px";
	} else if (dm == "nh-sat1" || dm == "florence-lc") {
		img0.style.minWidth="800px";
		img0.style.maxWidth="800px";
	}
	
	if (mdl == "gfs") {
		if (param == "prcp-mslp-gph500" || param == "prcp-tcld-topo" || param == "aprcp") {
			nframes0=40;
			img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
				1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39];
		} else {
			if (dm == "world-wt" || dm == "arc-lea" || dm == "ant-lea" || dm == "natlan-ced" || dm == "pacific-ced" || 
				dm == "saaf-ced") {
				nframes0=41;
				img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
					1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39];
			} else {
				nframes0=81;
				img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
					64,66,68,70,72,74,76,78,80,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,
					55,57,59,61,63,65,67,69,71,73,75,77,79];
			}
		}
	} else if (mdl == "nam12km") {
		nframes0=28;
		img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,1,3,5,7,9,11,13,15,17,19,21,23,25,27];
	} else if (mdl == "nam" || mdl == "nam-ak") {
		if (param == "aprcp") {
			nframes0=20;
			img_index_array=[0,2,4,6,8,10,12,14,16,18,1,3,5,7,9,11,13,15,17,19];
		} else {
			nframes0=60;
			img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
				1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59];
		}
	} else if (mdl == "hrrr" || mdl == "hrrr-ak") {
		//*** HRRR extends beyond 18 hours for 00,06,12,18 init ***
		var threshold_date=Date.parse("2018-07-12T12:00:00");
		var selected_date=Date.parse(date_str.substr(0,10)+"T"+date_str.substr(11,2)+":00:00");
		//console.log(date_str.substr(0,10)+" selected_date="+selected_date+" threshold_date="+threshold_date);
		var HH_date=date_str.substr(11,2);
		if ((selected_date >= threshold_date) && (HH_date == "00" || HH_date == "06" || HH_date == "12" || HH_date == "18")) {
			//nframes0=24;
			//img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,1,3,5,7,9,11,13,15,17,19,21,23];
			nframes0=36;
			img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
		} else {
			nframes0=18;
			img_index_array=[0,2,4,6,8,10,12,14,16,1,3,5,7,9,11,13,15,17];
		}
	} else if (mdl == "aqm") {
		nframes0=48;
		img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
			1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47];
	} else if (mdl == "nbm-conus") {
		nframes0=36;
		img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
	} else if (mdl == "urma") {
		if (param == "aprcp6h") {
			nframes0=20;
			img_index_array=[0,2,4,6,8,10,12,14,16,18,1,3,5,7,9,11,13,15,17,19];
		} else {
			nframes0=24;
			img_index_array=[0,2,4,6,8,10,12,14,16,18,20,22,1,3,5,7,9,11,13,15,17,19,21,23];
		}
	}
	
	nframes=nframes0;	//nframes set from nframes0 to avoid slider value from changing before new image load.
	nframes_indx=nframes;
	
	//console.log("mdl="+mdl+" dm="+dm+" param="+param+" nframes="+nframes);
	window.stop();	//this stops image load that may already be in progress when user clicks update button
	
	//date_str="2017-11-10-00z"
	img_dir="10green/aqm_fcst/wx_frames/"+mdl+"/"+dm+"/"+param+"/"+date_str+"/";
	fext=".png";
	infile="";
	
	document.getElementById("slider").max=nframes_indx-1;
	
	for (i=0; i <= (nframes-1); i++) {
		imgArray[img_index_array[i]]=new Image();
		n=pad((img_index_array[i]));
		//console.log("n="+n);
		imgfile=n+fext;
		infile=urlm+img_dir+imgfile;
		
		//see http://jqueryfordesigners.com/image-loading/
		$(imgArray[img_index_array[i]])
			.on("load",function () {
				$(this).hide();					// set image hidden by default
				//$("#loader") 
					//.removeClass("loading") 	// remove loading class so no background spinner
					//.append(this);			// insert image
				$(this).fadeIn();				// fade in image for nice effect
				//var img = document.getElementById("imageid");
				//$(this).attr("height",$(this).height());
				//$(this).attr("width",$(this).width());
				//var height0 = $(img0).height();
				//console.log("height0="+height0);
				//$(img_container).attr({"height": "1000"});
				//$("img_container").attr({"height": height, "width": width});
			})
			.on("error",function () {
				//console.log("error: image could not be loaded");
			})
			.attr("src", infile);
	}
	
	i_load=0;
	$(imgArray).one("load",function() {
		i_load=i_load+1;
		if (i_load < nframes_indx) {
			document.getElementById("img_count").innerHTML=
				"Image Slider <span style='color:rgb(160,0,0);'>(Loading "+i_load+" of "+nframes_indx+")</span>";
		} else {
			document.getElementById("img_count").innerHTML="Image Slider";
		}
	});
	
	//window.location.hash=mdl+"."+dm+"."+param;
	
	// http://jsfiddle.net/ult_combo/GKFxP/5/
	// http://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
	// http://www.javascriptkit.com/javatutors/preloadimagesplus.shtml
}

//======================================================================================================================
function update_image() {
	//console.log("------------ update_image ------------");
	var img0=d.getElementById("img0");
	var i=parseInt(fhour);
	img0.src=imgArray[i].src;
	//$("#slider").slider({value:i});
    document.getElementById("slider").value=i;
}

//======================================================================================================================
function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

//======================================================================================================================
function next_frame(increment) {
	window.theincrement=increment;
	var i; var next;
	for (i=0; i <= (nframes_indx-1); i++) {
		if (i == window.fhour) {
			next=parseInt(i)+increment;
			if (next > (nframes_indx-1)) { next=0; }
			if (next < 0) { next=nframes_indx-1; }
			update_fhour(next);
			break;
		}
	}
}

//======================================================================================================================
function loopimages() {
	clearInterval(window.theloop);
	window.theloop=setInterval(function(){next_frame(1)},window.theinterval);
}

//======================================================================================================================
function loop_images_rev() {
	clearInterval(window.theloop);
	window.theloop=setInterval(function(){next_frame(-1)},window.theinterval);
}

//======================================================================================================================
function stoploop() {
	clearInterval(window.theloop);
}

//======================================================================================================================
function faster() {
	clearInterval(window.theloop);
	window.theinterval*=.5;				//.5;
	//window.theinterval-=200;
	if (window.theinterval < 31.25) {
		window.theinterval=31.25;		//62.5
	}
	window.theloop=setInterval(function(){next_frame(window.theincrement)},window.theinterval);
}

//======================================================================================================================
function slower() {
	clearInterval(window.theloop);
	window.theinterval*=2;
	//window.theinterval+=200;
	if (window.theinterval > 4000) {
		window.theinterval=4000;
	}
	window.theloop=setInterval(function(){next_frame(window.theincrement)},window.theinterval);
}