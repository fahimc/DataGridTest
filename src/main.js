(function(window) {
  function Main() {
    if(window.addEventListener) {
        window.addEventListener("load", onLoad);
    } else {
        window.attachEvent("onload", onLoad);
    }

}
  function onLoad() {
    
    var view = new DataGridView();
    console.log(dataModel);
    view.build();
    
    document.body.appendChild(view.holder);
  }

Main();
}
)(window);