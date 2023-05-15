function fnClickObj(src){
	console.log('metatest.nztoverse.com click:', src);
	

	if( (screen.width <= 640) || (window.matchMedia && window.matchMedia('only screen and (max-width: 640px)').matches)){
		// Mobile
		document.getElementById("custom-popup-mobile").style.display = "none";

		var str = "<table style='width:300px;' cellpadding='0' cellspacing='0' border='0'>";
		str += "<tr><td><div align='center'><img src='https://mpva.metatour.net/img/guest_top_mobile.png' style='width:300px; height:50px;' id='btnClickClose-mobile'></div></td></tr>";
		str += "<tr><td style='text-align:center; padding-top:0px; padding-bottom:0px;' align='center'><div align='center'><iframe src='https://metatest.nztoverse.com/_guestbook.html' style='width:300px; height:400px;' frameborder=0 framespacing=0 marginheight=0 marginwidth=0 scrolling=yes vspace=0></iframe></div></td></tr>";
		str += "</table>";
		
		document.getElementById("custom-popup-text-mobile").innerHTML = str;
		document.getElementById("custom-popup-mobile").style.display = "flex";
		document.getElementById('btnClickClose-mobile').addEventListener("click", function() { document.getElementById("custom-popup-mobile").style.display = "none"; });
	} else {
		document.getElementById("custom-popup").style.display = "none";

		var str = "<table style='width:800px;' cellpadding='0' cellspacing='0' border='0'>";
		str += "<tr><td><div align='center'><img src='https://mpva.metatour.net/img/guest_top_pc.png' style='width:800px; height:50px;' id='btnClickClose'></div></td></tr>";
		str += "<tr><td style='text-align:center; padding-top:0px; padding-bottom:0px;' align='center'><div align='center'><iframe src='https://metatest.nztoverse.com/_guestbook.html' style='width:800px; height:600px;' frameborder=0 framespacing=0 marginheight=0 marginwidth=0 scrolling=yes vspace=0></iframe></div></td></tr>";
		str += "</table>";

		document.getElementById("custom-popup-text").innerHTML = str;
		document.getElementById("custom-popup").style.display = "flex";
		document.getElementById('btnClickClose').addEventListener("click", function() { document.getElementById("custom-popup").style.display = "none"; });
	}
}
