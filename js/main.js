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
	    allen = (data[1101].covid_death);
	    asc = (data[1102].covid_death);
	    assumption = (data[1103].covid_death);
	    avoyelles = (data[1104].covid_death);
	    beau = (data[1105].covid_death);
	    bien = (data[1106].covid_death);
	    bossier = (data[1107].covid_death);
	    caddo = (data[1108].covid_death);
	    calc = (data[1109].covid_death);
	    caldwell = (data[1110].covid_death);
	    cameron = (data[1111].covid_death);
	    cat = (data[1112].covid_death);
	    claiborne = (data[1113].covid_death);
	    concordia = (data[1114].covid_death);
	    desoto = (data[1115].covid_death);
	    ebr = (data[1116].covid_death);
	    ec = (data[1117].covid_death);
	    ef = (data[1118].covid_death);
	    evangeline = (data[1119].covid_death);
	    franklin = (data[1120].covid_death);
	    grant = (data[1121].covid_death);
	    iberia = (data[1122].covid_death);
	    iberville = (data[1123].covid_death);
	    jackson = (data[1124].covid_death);
	    jefferson = (data[1125].covid_death);
	    jd = (data[1126].covid_death);
	    lafayette = (data[1127].covid_death);
	    lafourche = (data[1128].covid_death);
	    lasalle = (data[1129].covid_death);
	    lincoln = (data[1130].covid_death);
	    livingston = (data[1131].covid_death);
	    madison = (data[1132].covid_death);
	    more = (data[1133].covid_death);
	    natch = (data[1134].covid_death);
	    orleans = (data[1135].covid_death);
	    ouach = (data[1136].covid_death);
	    plaque = (data[1137].covid_death);
	    pc = (data[1138].covid_death);
	    rapides = (data[1139].covid_death);
	    rr = (data[1140].covid_death);
	    rich = (data[1141].covid_death);
	    sabine = (data[1142].covid_death);
	    sb = (data[1143].covid_death);
	    sc = (data[1144].covid_death);
	    sh = (data[1145].covid_death);
	    sj = (data[1146].covid_death);
	    sjb = (data[1147].covid_death);
	    sl = (data[1148].covid_death);
	    sm = (data[1149].covid_death);
	    stmary = (data[1150].covid_death);
	    st = (data[1151].covid_death);
	    tang = (data[1152].covid_death);
	    tensas = (data[1153].covid_death);
	    terr = (data[1154].covid_death);
	    union = (data[1155].covid_death);
	    vermillion = (data[1156].covid_death);
	    vernon = (data[1157].covid_death);
	    wash = (data[1158].covid_death);
	    webster = (data[1159].covid_death);
	    wbr = (data[1160].covid_death);
	    wc = (data[1161].covid_death);
	    wf = (data[1162].covid_death);
	    winn = (data[1163].covid_death);
    }
});
console.log(acadia);
console.log(winn);

var parishes =  new L.geoJson( '' );
parishes.addTo(map);

//define watershed geojson from file
$.ajax({
	dataType: "json",
	url: "data/la_par.json",
	success: function(data) {
		$(data.features).each(function(key, data) {
			parishes.addData(data);
			});
		}
}).error(function() {});
