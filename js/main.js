//add map centered on Louisiana
var map = L.map('map', {
	center: [30.9843, -91.9623],
	zoom: 7.5
});
//add openstreetmap tilelayer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    				maxZoom: 13,
   				attribution: '© OpenStreetMap'}).addTo(map);

//create global covid variable and retrieve information, assign it to covid
var county;
$.ajax({
    type: "GET",
    url: "https://data.cdc.gov/resource/kn79-hsxy.json",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
	    cd = (data[1].covid_death);
	    county = Number(cd);
    }
});
console.log(county);
