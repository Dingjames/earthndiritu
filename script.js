require(["esri/Map","esri/views/SceneView","dojo/domReady!"],
  function(Map,SceneView){
  var map = new Map({
    basemap:"topo",
    ground:"world-elevation"
  });
  var view = new SceneView({
    container:"viewDiv",
    map:map,
    camera:{
      position:[-90.1004,29.8700,8000],
      tilt:40,
      heading:360
    }
  });
});