var Utils = {
	compareTicker : function(a, b) {
		if (a.ticker < b.ticker)
			return -1;
		if (a.ticker > b.ticker)
			return 1;
		return 0;
	},
	compareIndustry : function(a, b) {
		if (a.industry < b.industry)
			return -1;
		if (a.industry > b.industry)
			return 1;
		return 0;
	},
	compareMarket : function(a, b) {
		return (parseFloat(a.marketCap) - parseFloat(b.marketCap));
	},
	comparePrice : function(a, b) {
		
		return (parseFloat(a.price) - parseFloat(b.price));
	},
	compareChange : function(a, b) {
		
		return (parseFloat(a.change) - parseFloat(b.change));
	},
	compareVolume : function(a, b) {
		
		return (parseFloat(a.volume) - parseFloat(b.volume));
	},
	compareTickerDe : function(a, b) {
		if (b.ticker < a.ticker)
			return -1;
		if (b.ticker > a.ticker)
			return 1;
		return 0;
	},
	compareIndustryDe : function(a, b) {
		if (b.industry < a.industry)
			return -1;
		if (b.industry > a.industry)
			return 1;
		return 0;
	},
	compareMarketDe : function(a, b) {
		return (parseFloat(b.marketCap) - parseFloat(a.marketCap));
	},
	comparePriceDe : function(a, b) {
		
		return (parseFloat(b.price) - parseFloat(a.price));
	},
	compareChangeDe : function(a, b) {
		
		return (parseFloat(b.change) - parseFloat(a.change));
	},
	compareVolumeDe : function(a, b) {
		
		return (parseFloat(b.volume) - parseFloat(a.volume));
	}
}
