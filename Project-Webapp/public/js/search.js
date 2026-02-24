var searchInput = document.getElementById("search");

searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        var keyword = this.value.trim().toLowerCase();

        geojson.eachLayer(function (layer) {
            var provinceName = layer.feature.properties.pro_th;

            if (provinceName && provinceName.toLowerCase() === keyword) {
                map.fitBounds(layer.getBounds());
            }
        });
    }
});