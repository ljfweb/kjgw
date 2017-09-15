function pre(bl) {
	var _video = document.getElementsByTagName("video")[0];
	var _time = _video.currentTime;
	_video.currentTime = _time - bl;



}

function next(bl) {
	var _video = document.getElementsByTagName("video")[0];
	var _time = _video.currentTime;
	_video.currentTime = _time + bl;



}

function vplus(vbl) {
	var _video = document.getElementsByTagName("video")[0];
	_voice = _video.volume;
	
	_video.volume = _voice + vbl;

	if (_voice.volume > 1) {
		_voice.volume = 1;

	}
	console.log(_voice);



}

function minus(vbl) {
	var _video = document.getElementsByTagName("video")[0];
	_voice = _video.volume;
	
	_video.volume = _voice - vbl;
	if (_voice.volume < 0) {
		_voice.volume = 0;
	}




}