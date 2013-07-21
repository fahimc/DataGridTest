var DataLoader = function(callback) {
	this.scriptID = "dataloader";
	this.callback = callback;
	var root = this;
	this.init = function() {
		var url = dataModel.get("SPREADSHEET_URL").replace("[c]", "DataLoader_onComplete");
		this.buildScript(url);
	};
	
	this.buildScript = function(url) {
		if (document.getElementById(this.scriptID))
			return;
		this.script = document.createElement("SCRIPT");
		this.script.type = "text/javascript";
		this.script.id = this.scriptID;
		
		//get latest version
		var ran =Math.floor((Math.random()*10000)+1);
		
		this.script.src = url+"&uni_ran="+ran;
		document.getElementsByTagName("head")[0].appendChild(this.script);
	};
	this.onComplete=function(json)
	{
		
		dataModel.set("worksheet",json);
		if(this.callback)this.callback();
	}
	window.DataLoader_onComplete=function(json)
	{
		root.onComplete(json);
	}
};
