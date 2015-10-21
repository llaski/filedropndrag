'use strict';

if (window.FileReader) {

	// "drop"
	//   "dragstart"
	//   "dragend"
	//   "dragenter"
	//   "dragover"
	//   "dragleave"
	window.addEventListener('load', function () {
		var droparea = document.getElementById('file-droparea');

		window.addEventListener(droparea, 'drop', function (evt) {
			debugger;
		});

		window.addEventListener(droparea, 'dragover', function () {
			return false;
		});

		window.addEventListener(droparea, 'dragenter', function () {
			return false;
		});
	}, false);
}
//# sourceMappingURL=app.js.map
