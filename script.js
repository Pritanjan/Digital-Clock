window.onload=function(){

	const DATE = () =>{
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	let set = "AM";
	
	if(h>12){
		set="PM";
	}
	h < 10 ? h = "0" + h : h;
	s < 10 ? s = "0" + s : s;
	m < 10 ? m = "0" + m : m;
	document.getElementById("clock").innerText = h +":"+ m +":"+s+ " "+set;
}

DATE();
setInterval(DATE, 1000);
}