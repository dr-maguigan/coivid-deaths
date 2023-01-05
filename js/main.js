//add map centered on Louisiana
var map = L.map('map', {
	center: [30.5843, -92.0623],
	zoom: 7.35
});
//add openstreetmap tilelayer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    				maxZoom: 13,
   				attribution: '© OpenStreetMap'}).addTo(map);

// control that shows parish info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>Covid-19 Deaths per 100,000</h4>' + (props ? '<b>' + props.NAMELSAD + '</b><br />' + props.cd + ' Covid-19 deaths / 100,000' : 'Hover over a parish');
	};

	info.addTo(map);

// get color depending on deaths
	function getColor(d) {
		return 	d > 750 ? '#E31A1C' :
           		d > 500 ? '#FC4E2A' :
           		d > 250 ? '#FD8D3C' :
           		d > 100 ? '#FEB24C' :
           		d > 10  ? '#FED976' :
                      		  '#FFEDA0';
	}

//set style for geojson
function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: '#d3d3d3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.cd)
		};
	}

//create highlight function
function highlightFeature(e) {
		const layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			fillOpacity: 0.7
		});

		layer.bringToFront();
	
		info.update(layer.feature.properties);
	}

//create parishes geojson and add to map
var parishes =  new L.geoJson( '', {
	style: style,
		onEachFeature: onEachFeature});
parishes.addTo(map);

//define parish geojson from file
$.ajax({
	dataType: "json",
	url: "data/la_par.json",
	success: function(data) {
		$(data.features).each(function(key, data) {
			parishes.addData(data);
			});
		}
}).error(function() {});

//reset highlight
function resetHighlight(e) {
	parishes.resetStyle(e.target);
	info.update();
	}

//zoom to feature on click
function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
	}

//define oneachfeature for geojson, highlight and reset, zoom on click
function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: zoomToFeature
		});
	}

//add map attribution
map.attributionControl.addAttribution("Covid-19 deaths data: <a href='http://cdc.gov/'>CDC</a>| Population data: <a href='http://census.gov/'>US Census Bureau</a>");

//create legend in bottom right of map
var legend = L.control({position: 'bottomright'});

//add functions of legend on add to add values
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	var grades = [0, 10, 100, 250, 500, 750];
	var labels = [];
	let from, to;

	for (var i = 0; i < grades.length; i++) {
		from = grades[i];
		to = grades[i + 1];
		
		labels.push('<i style="background:${getColor(from + 1)}"></i> ${from}${to ? '&ndash;${to}' : '+'}');
		}
		
    	return div;
};




		for (let i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			

		div.innerHTML = labels.join('<br>');
		return div;
	};
//add legend to map
legend.addTo(map);
