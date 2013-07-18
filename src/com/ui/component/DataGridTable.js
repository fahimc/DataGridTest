var DataGridTable = function() {
};
(function() {
	var _ = DataGridTable.prototype;

	_.holder = null;
	_.header = null;
	_.ticker = null;
	_.data = null;
	_.rowHolder = null;
	_.handlers=[];
	_.currentSortId;"";
	_.build = function() {
		if (!this.data)
			return;
		//build holder
		this.holder = document.createElement("DIV");
		this.holder.className = dataModel.get("dataTableCN");
		this.buildHeader();
	}
	_.buildHeader = function() {
		this.header = document.createElement("DIV");
		this.header.className = "labels";
		this.holder.appendChild(this.header);

		var headings = dataModel.get("headings");

		//create ticker heading
		this.ticker = this.createLabel("ticker", headings.ticker, "ticker");
		this.header.appendChild(this.ticker);

		this.industry = this.createLabel("industry", headings.industry, "industry");
		this.header.appendChild(this.industry);

		this.market = this.createLabel("market", headings.market, "market");
		this.header.appendChild(this.market);

		this.price = this.createLabel("price", headings.price, "price");
		this.header.appendChild(this.price);

		this.change = this.createLabel("change", headings.change, "change");
		this.header.appendChild(this.change);

		this.volume = this.createLabel("volume", headings.volume, "volume");
		this.header.appendChild(this.volume);

		//build rows
		this.rowHolder = document.createElement("DIV");
		this.rowHolder.className = "rowHolder";
		this.holder.appendChild(this.rowHolder);
		this.buildRows();
	}
	_.buildRows = function() {
		this.rowHolder.innerHTML = "";

		for (var a = 0; a < this.data.length; a++) {
			var row = document.createElement("DIV");
			row.className = "row";
			if (this.isOdd(a))
				row.className += " second";

			var t = document.createElement("P");
			t.className = "ticker";
			t.innerHTML = this.data[a].ticker;
			row.appendChild(t);

			var ind = document.createElement("P");
			ind.className = "industry";
			ind.innerHTML = this.data[a].industry;
			row.appendChild(ind);

			var m = document.createElement("P");
			m.className = "market";
			m.innerHTML = this.numberWithCommas(this.data[a].marketCap);
			row.appendChild(m);
			
			var pr = document.createElement("P");
			pr.className = "price";
			pr.innerHTML = "£"+this.numberWithCommas(this.data[a].price);
			row.appendChild(pr);
			
			var ch = document.createElement("P");
			ch.className = "change";
			if(Number(this.data[a].change)<0)
			{
				ch.className+=" negative";
			}else{
				ch.className+=" positive";
			}
			ch.innerHTML = this.numberWithCommas(this.data[a].change)+"%";
			row.appendChild(ch);
			
			
			var vol = document.createElement("P");
			vol.className = "market";
			vol.innerHTML = this.numberWithCommas(this.data[a].volume);
			row.appendChild(vol);
			
			this.rowHolder.appendChild(row);
		}
	}
	_.createLabel = function(id, title, className) {
		var label = document.createElement("P");
		label.id = id;
		label.innerHTML = title;
		label.className = className;
		label.setAttribute("ascending","true");
		Utensil.addListener(label,"click",this.createHandler(id,"click","onHeadingClick"));
		return label;
	}
	_.createHandler=function(id,eventName,func)
	{
		var root=this;
		if(!this.handlers[id])this.handlers[id]=[];
		this.handlers[id][eventName] = function(event)
		{
			root[func](event);
		}
		return this.handlers[id][eventName];
	}
	_.isOdd = function(num) {
		return num % 2;
	}
	_.numberWithCommas = function(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	_.onHeadingClick=function(event)
	{
		var target = event.srcElement||event.target;
		this.sortData(target.id,target.getAttribute("ascending"));
		
		if(target.className.indexOf(" up")>=0)
		{
			target.className=target.className.replace(" up","");
			target.className+=" down";
		}else{
			target.className=target.className.replace(" down","");
			target.className+=" up";
		}
		var previousSort = document.getElementById(this.currentSortId);
		if(previousSort && this.currentSortId!=target.id)
		{
			previousSort.className=previousSort.className.replace(" down","");
			previousSort.className=previousSort.className.replace(" up","");
			previousSort.setAttribute("ascending","true")
		}
		this.currentSortId = target.id;
	}
	_.sortData=function(id,ascending)
	{
		switch(id)
		{
			case "ticker":
			this.data.sort(ascending=="true"?Utils.compareTicker:Utils.compareTickerDe);
			break;
			case "industry":
			this.data.sort(ascending=="true"?Utils.compareIndustry:Utils.compareIndustryDe);
			break;
			case "market":
			this.data.sort(ascending=="true"?Utils.compareMarket:Utils.compareMarketDe);
			break;
			case "price":
			this.data.sort(ascending=="true"?Utils.comparePrice:Utils.comparePriceDe);
			break;
			case "change":
			this.data.sort(ascending=="true"?Utils.compareChange:Utils.compareChangeDe);
			break;
			case "volume":
			this.data.sort(ascending=="true"?Utils.compareVolume:Utils.compareVolumeDe);
			break;
		}
		if(ascending=="false")
		{
			document.getElementById(id).setAttribute("ascending","true");
		}else{
			document.getElementById(id).setAttribute("ascending","false");
		}
		this.buildRows();
	}
})();
