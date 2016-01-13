	function disableselect(e)
 	{
		return false
	}
	function reEnable()
	{
		return true
	}
	document.onselectstart=new Function ("return false")
	if (window.sidebar)
	{
		document.onmousedown=disableselect
		document.onclick=reEnable
	}
	function nrcIE()
	{
		if (document.all)
		{
			return false;
		}
	}
	function nrcNS(e)
	{
		if(document.layers||(document.getElementById&&!document.all))
		{ 
			if (e.which==2||e.which==3)
			{
				return false;
			}
		}
	} 
	if (document.layers)
	{
		document.captureEvents(Event.MOUSEDOWN);
		document.onmousedown=nrcNS;
	}
	else
	{
		document.onmouseup=nrcNS;document.oncontextmenu=nrcIE;
	}
	document.oncontextmenu=new Function("return false");