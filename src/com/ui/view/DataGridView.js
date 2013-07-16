var DataGridView = function(){};
(function() {
	// extend the view class
	var _ =Class.extend(DataGridView,View);
	
	_.title=null;
	_.searchHolder=null;
	_.faq=null;
	_.help=null;
	_.searchInput=null;
	_.nav=null;
	//override the build method
	_.build=function()
	{
		Class._super(this,"build");
		this.updateHeaderLabel(dataModel.get("dataGridHeaderCopy"));
		
		//build title
		this.title = document.createElement("H1");
		this.innerContainer.appendChild(this.title);
		this.updateTitle(dataModel.get("dataGridTitleCopy"));
		
		//build search bar
		this.searchHolder = document.createElement("UL");
		this.searchHolder.className = dataModel.get("searchHolderCN");
		this.innerContainer.appendChild(this.searchHolder);
		this.buildSearchContent();
	}
	_.buildSearchContent=function()
	{
		//build faq button
		this.faq = document.createElement("LI");
		this.faq.className = dataModel.get("searchFaqCN");
		this.faq.innerHTML =  dataModel.get("faqCopy");
		this.searchHolder.appendChild(this.faq);
		
		//build help button
		this.help = document.createElement("LI");
		this.help.className = dataModel.get("searchHelpCN");
		this.help.innerHTML =  dataModel.get("helpCopy");
		this.searchHolder.appendChild(this.help);
		
		//build search bar
		this.searchInput = document.createElement("INPUT");
		this.searchHolder.appendChild(this.searchInput);
		
		//build nav
		this.nav = new DataGridNav();
		this.nav.build();
		this.innerContainer.appendChild(this.nav.holder);
	}
	_.updateTitle=function(text)
	{
		this.title.innerHTML=text;
	}
})();
