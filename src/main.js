(function(window) {
	var dataLoader;
	var parser;
	var view;

	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {
		//Load the SpreadSheet
		dataLoader = new DataLoader(onDataLoaded);
		dataLoader.init();
	}

	function onDataLoaded() {
		dataLoader=null;
		parseData();
		
	}
	function parseData()
	{
		//parse the json
		parser = new DataGridParser();
		var collection = parser.parse(dataModel.get("worksheet"));
		
		dataModel.set("dataItems",collection);
		parser=null;
		
		buildView();
	}
	function buildView() {
		//build the view
		view = new DataGridView();
		view.build();
		document.body.appendChild(view.holder);
	}

	Main();
}
)(window); 