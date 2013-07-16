var DataGridNav = function() {
};
(function() {

	var _ = DataGridNav.prototype;

	_.holder = null;

	_.build = function() {
		//build holder
		this.holder = document.createElement("DIV");
		this.holder.className = dataModel.get("navHolderCN");
		
		var home =  document.createElement("DIV");
		home.id="home";
		var homeIcon = new Image();
		homeIcon.src="resource/image/home.png";
		home.className  = dataModel.get("navhomeCN");
		home.appendChild(homeIcon);
		this.holder.appendChild(home);
		
		var preview =  document.createElement("DIV");
		preview.id="previewButton";
		preview.innerHTML = dataModel.get("previewCopy");
		this.holder.appendChild(preview);
		
		var activity =  document.createElement("DIV");
		activity.id="activityButton";
		activity.innerHTML = dataModel.get("activityCopy");
		this.holder.appendChild(activity);
		
		var control =  document.createElement("DIV");
		control.id="controlButton";
		control.innerHTML = dataModel.get("controlCopy");
		this.holder.appendChild(control);
		
		var issue =  document.createElement("DIV");
		issue.id="issueButton";
		issue.innerHTML = dataModel.get("issueCopy");
		this.holder.appendChild(issue);
		
		var overview =  document.createElement("DIV");
		overview.id="overviewButton";
		overview.innerHTML = dataModel.get("overviewCopy");
		this.holder.appendChild(overview);
		
		var admin =  document.createElement("DIV");
		admin.id="adminButton";
		admin.innerHTML = dataModel.get("adminCopy");
		admin.className  = dataModel.get("navRightCN");
		this.holder.appendChild(admin);
		
		var profile =  document.createElement("DIV");
		profile.id="profileButton";
		profile.innerHTML = dataModel.get("profileCopy");
		profile.className  = dataModel.get("navRightCN");
		this.holder.appendChild(profile);
		
		var root = this;
		Utensil.addListener(home,"click",function(){root.onClick(home)});
		Utensil.addListener(preview,"click",function(){root.onClick(preview)});
		Utensil.addListener(activity,"click",function(){root.onClick(activity)});
		Utensil.addListener(control,"click",function(){root.onClick(control)});
		Utensil.addListener(issue,"click",function(){root.onClick(issue)});
		Utensil.addListener(overview,"click",function(){root.onClick(overview)});
		Utensil.addListener(admin,"click",function(){root.onClick(admin)});
		Utensil.addListener(profile,"click",function(){root.onClick(profile)});
	};
	_.onClick=function(target)
	{
		
		if(dataModel.get("currentNav")!="")
		{
			document.getElementById(dataModel.get("currentNav")).className=document.getElementById(dataModel.get("currentNav")).className.replace(" selected","");
		}
		target.className +=" selected";
		dataModel.set("currentNav",target.id)
		
	}
})(); 