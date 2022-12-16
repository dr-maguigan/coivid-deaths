//add map centered on Louisiana
var map = L.map('map', {
	center: [30.4843, -91.9623],
	zoom: 7.35
});
//add openstreetmap tilelayer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    				maxZoom: 13,
   				attribution: '© OpenStreetMap'}).addTo(map);

//create global covid variable and retrieve information, assign it to covid
var acadia;
var winn;
$.ajax({
    type: "GET",
    url: "https://data.cdc.gov/resource/kn79-hsxy.json?$limit=5000",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
	    ap = (data[1100].county_name);
	    acadia = ap;
	    wp = (data[1163].county_name);
	    winn = wp;
    }
});
console.log(acadia);
console.log(winn);
