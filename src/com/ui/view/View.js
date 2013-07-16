var View = function() {
};
(function() {

	var _ = View.prototype;

	_.holder = null;
	_.header = null;
	_.headerP = null;
	_.container = null;
	_.innerContainer = null;

	_.build = function() {
		//build holder
		this.holder = document.createElement("DIV");
		this.holder.className = dataModel.get("viewHolderCN");

		//build header
		this.header = document.createElement("DIV");
		this.header.className = dataModel.get("viewHeaderCN");
		this.holder.appendChild(this.header);
		//build header p
		this.headerP = document.createElement("P");
		this.header.appendChild(this.headerP);
		//build the container
		this.container = document.createElement("DIV");
		this.container.className = dataModel.get("viewContainerCN");
		this.holder.appendChild(this.container);
		//build inner container
		this.innerContainer = document.createElement("DIV");
		this.innerContainer.className = dataModel.get("viewInnerContainerCN");
		this.container.appendChild(this.innerContainer);
	};
	_.updateHeaderLabel = function(text) {
		this.headerP.innerHTML = text;
	};
})(); 