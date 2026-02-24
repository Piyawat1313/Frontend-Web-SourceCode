var map = L.map('map',{
    minZoom: 6
}).setView([13.7563, 100.5018], 6);



function getColor(d) {
    return d > 80  ? '#f28e8e' :
           d > 60  ? '#f2cc50' : 
           d > 40  ? '#5ed68b' : 
                     '#ffeda0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.price_index), 
        weight: 1,
        opacity: 1,
        color: 'white', 
        fillOpacity: 0.7
    };
}

var labelLayer = L.layerGroup().addTo(map);
var geojson;
function createLabels(){
    labelLayer.clearLayers();
    geojson.eachLayer(function(layer){
        if(layer.feature.properties && layer.feature.properties.pro_th){
            var center = layer.getBounds().getCenter();
            var label = L.marker(center, {
                icon: L.divIcon({
                    className: 'province-label',
                    html: layer.feature.properties.pro_th,
                    iconSize: [100, 20]
                })
            });
            label.addTo(labelLayer);
        }
    });
}


fetch('../thai-map/provinces.geojson')
    .then(res => res.json())
    .then(data =>{
         geojson = L.geoJSON(data, {
            style: style,
        }).addTo(map);
        map.fitBounds(geojson.getBounds());
        map.setMaxBounds(geojson.getBounds());
        createLabels();
    });

map.on("zoomend", function() {
    createLabels();
});



