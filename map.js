ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [59.938954, 30.322061],
    zoom: 17,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });

  var placemark = new ymaps.Placemark(
    [59.938631, 30.323055],
    {},

    {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.png",
      iconImageSize: [231, 190],
      iconImageOffset: [-45, -195]
    }
  );

  map.geoObjects.add(placemark);
}
