// Store the API endpoint as a const.
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Function to get color based on depth
function getColor(depth) {
    if (depth < 10) return "Chartreuse";
    else if (depth <= 30) return "Green";
    else if (depth <= 50) return "GoldenRod";
    else if (depth <= 70) return "Orange";
    else if (depth <= 90) return "OrangeRed";
    else return "Crimson";
}

// Function to bind popup information to each feature
function bindPopup(feature, layer) {
    layer.bindPopup(
        `<h4>${feature.properties.place}</h4><hr><p>${new Date(feature.properties.time)}</p>` +
        `<p><b>Magnitude: ${feature.properties.mag}</b></p>` +
        `<p><b>Depth: ${feature.geometry.coordinates[2]}</b></p>`
    );
}

// Function to create circle markers
function circleMarker(feature, latlng) {
    const mag = feature.properties.mag;
    const depth = feature.geometry.coordinates[2];
    return L.circle(latlng, {
        color: "white",
        fillColor: getColor(depth),
        fillOpacity: 0.5,
        radius: mag * 20000
    });
}

// Function to create the map
function createMap(earthquakes) {
    // Base layers
    const street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            '<a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // Base maps object
    const baseMaps = {
        "Street Map": street,
        "Topographic Map": topo
    };

    // Overlay maps object
    const overlayMaps = {
        Earthquakes: earthquakes
    };

    // Create the map
    const myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [street, earthquakes]
    });

    // Layer control
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    // Legend
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [-10, 10, 30, 50, 70, 90];

        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                `<i style="background:${getColor(grades[i] + 1)}"></i>` +
                `${grades[i]}${grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+'}`;
        }

        return div;
    };

    legend.addTo(myMap);
}

// Perform a GET request to the API endpoint
d3.json(url).then(function (data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});

// Function to create map features
function createFeatures(earthquakeData) {
    // Create a GeoJSON layer
    const earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: bindPopup,
        pointToLayer: circleMarker
    });

    // Create the map using the earthquakes layer
    createMap(earthquakes);
}