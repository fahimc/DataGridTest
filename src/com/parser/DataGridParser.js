var DataGridParser = function() {
	this.parse = function(json) {
		console.log(json);
		var collection = new Array();
		var item;
		var entry;
		// create objects for each row
		for (var a = 0; a < json.feed.entry.length; a++) {
			var entry = json.feed.entry[a];
			//get the content and split it by commas and then collons
			var arr = entry.content["$t"].split(",");

			item = new DataGridItem();
			item.ticker = entry.title["$t"];
			//loop through and add the content
			item = getData(item,arr);
			collection.push(item);
		}

		return collection;
	}
	function getData(item, arr) {
		for (var b = 0; b < arr.length; b++) {
			var keyval = arr[b].split(":");
			switch(b) {
				case 0:
					item.industry = keyval[1];
					break;
				case 1:
					item.marketCap = keyval[1];
					break;
				case 2:
					item.price = keyval[1];
					break;
				case 3:
					item.change = keyval[1];
					break;
				case 4:
					item.volume = keyval[1];
					break;
			}
		}
		return item;
	}

}
