if (window.FileReader) {

	 // "drop"
  //   "dragstart"
  //   "dragend"
  //   "dragenter"
  //   "dragover"
  //   "dragleave"
	window.addEventListener('load', () => {
		let droparea = document.getElementById('file-droparea');

		window.addEventListener(droparea, 'drop', (evt) => {
			debugger;
		});

		window.addEventListener(droparea, 'dragover', () => {
			return false;
		});

    	window.addEventListener(droparea, 'dragenter', () => {
    		return false;
    	});
	}, false);
}