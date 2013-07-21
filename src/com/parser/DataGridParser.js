var DataGridParser = function() {
	this.parse = function(json) {
		
		var collection = new Array();
		var item;
		var entry;
		// create objects for each row
		if(!json.feed.entry)return;
		for (var a = 0; a < json.feed.entry.length; a++) {
			var entry = json.feed.entry[a];
			//get the content and split it by commas and then collons
			var arr = entry.content["$t"].split(",");
		
			item = new DataGridItem();
			item.ticker = entry.title["$t"];
			//loop through and add the content
			item = getData(item, arr);
			collection.push(item);
		}

		return collection;
	}
	function getData(item, arr) {
		for (var b = 0; b < arr.length; b++) {
			
			var keyval = arr[b].split(":");
			var value =keyval[1]!=undefined?keyval[1]:"";
			var isNum = isNumber(value);
			
			if(b>0 && isNum.numeric)value = isNum.val;
			switch(b) {
				case 0:
					item.industry = value;
					break;
				case 1:
					item.marketCap = value;
					item.marketCapFormat = "number";
					break;
				case 2:
					item.price = value;
					item.priceFormat = "price";
					break;
				case 3:
					item.change = value;
					item.changeFormat = "percent";
					break;
				case 4:
					item.volume = value;
					item.volumeFormat = "number";
					break;
			}
		}
		return item;
	}

	function isNumber(val) {
		val = val.replace(/\s+/g, ' ');
		var num =Number(val.replace(/[A-Za-z$%£]/g, ""));
		var is =(typeof num === 'number' && isFinite(num));
		return {numeric:is,val:num};
	}

}
