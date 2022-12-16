//add map centered on Louisiana
var map = L.map('map', {
	center: [30.4843, -91.9623],
	zoom: 7.35
});
//add openstreetmap tilelayer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    				maxZoom: 13,
   				attribution: '© OpenStreetMap'}).addTo(map);

//create global variables for each parish and retrieve information, assign it to the global variable
var acadia;
var allen;
var asc;
var assumption;
var avoyelles;
var beau;
var bien;
var bossier;
var caddo;
var calc;
var caldwell;
var cameron;
var cat;
var claiborne;
var concordia;
var desoto;
var ebr;
var ec;
var ef;
var evangeline;
var franklin;
var grant;
var iberia;
var iberville;
var jackson;
var jefferson;
var jd;
var lafayette;
var lafourche;
var lasalle;
var lincoln;
var livingtson;
var madison;
var more;
var natch;
var orleans;
var ouach;
var plaque;
var pc;
var rapides;
var rr;
var rich;
var sabine;
var sb;
var sc;
var sh;
var sj;
var sjb;
var sl;
var sm;
var stmary;
var st;
var tang;
var tensas;
var terr;
var union;
var vermillion;
var vernon;
var wash;
var webster;
var wbr;
var wc;
var wf;
var winn;
$.ajax({
    type: "GET",
    url: "https://data.cdc.gov/resource/kn79-hsxy.json?$limit=5000",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
	    acadia = (data[1100].covid_death);
	    winn = (data[1163].covid_death);
    }
});
console.log(acadia);
console.log(winn);
