function resizeContent() {
	var width = document.getElementById('body').offsetWidth;


	var elements = Math.floor(width / 253);

	var size = (width > 536) ? elements * 253 : width;
	
	document.getElementById('content').style.width = size + 'px';
}