window.onload = function(){
	var tabs = document.getElementById('tabs');
	  
	tabs.addEventListener('click', function(ev) {
	   console.log(ev.target.value);
	   if (ev.target.id.indexOf('tab') !== -1) {
	      document.location.href = '#' + ev.target.value;
	   }
	}, false);

	//modal window
	 var delay_popup = 2000;
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

}