function toggle(toggler) {
	if(document.getElementById) {
	targetElement = toggler.parentNode.nextSibling;
	
	if(targetElement.className == undefined) {
	targetElement = toggler.parentNode.nextSibling.nextSibling;	
	}	

if (targetElement.style.display == "block")
	{
	targetElement.style.display = "none";
	}
	else
	{
	targetElement.style.display = "block";
	}
	}
}
