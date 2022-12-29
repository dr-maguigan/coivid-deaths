//add map centered on Louisiana
var map = L.map('map', {
	center: [30.4843, -91.9623],
	zoom: 7.35
});
//add openstreetmap tilelayer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    				maxZoom: 13,
   				attribution: '© OpenStreetMap'}).addTo(map);

// control that shows parish info on hover
	const info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		const contents = props ? `<b>${props.NAMELSAD}</b><br />${props.cd} Covid-19 deaths / 100,000` : 'Hover over a parish';
		this._div.innerHTML = `<h4>Covid-19 Deaths per 100,000</h4>${contents}`;
	};

	info.addTo(map);


	// get color depending on deaths
	function getColor(d) {
		return 	d > 1000  ? '#FC4E2A' :
			d > 500   ? '#FD8D3C' :
			d > 250   ? '#FEB24C' :
			d > 100   ? '#FED976' : '#FFEDA0';
	}

	function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.cd)
		};
	}

	function highlightFeature(e) {
		const layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		layer.bringToFront();

		info.update(layer.feature.properties);
	}

	/* global la_par */
	const geojson = L.geoJson(parishes, {
		style,
		onEachFeature
	}).addTo(map);

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	map.attributionControl.addAttribution("Covid-19 deaths data: <a href='http://cdc.gov/'>CDC</a> Population data: <a href='http://census.gov/'>US Census Bureau</a>");

	const legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		const div = L.DomUtil.create('div', 'info legend');
		const grades = [0, 100, 250, 500, 1000];
		const labels = [];
		let from, to;

		for (let i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(`<i style="background:${getColor(from + 1)}"></i> ${from}${to ? `&ndash;${to}` : '+'}`);
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);
//create parishes geoJson and add to map
var parishes =  new L.geoJson( '' );
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

//start table creation
//create global variables for each parish and retrieve information, assign it to the global variable for table
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
var livingston;
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
var vermilion;
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
	    vermilion = (data[1156].covid_death);
	    vernon = (data[1157].covid_death);
	    wash = (data[1158].covid_death);
	    webster = (data[1159].covid_death);
	    wbr = (data[1160].covid_death);
	    wc = (data[1161].covid_death);
	    wf = (data[1162].covid_death);
	    winn = (data[1163].covid_death);
    }
});

//add pop data
var acadia_pop = 57288;
var allen_pop = 22687;
var asc_pop = 128369;
var assumption_pop = 20689;
var avoyelles_pop = 39236;
var beau_pop = 36584;
var bien_pop = 12776;
var bossier_pop = 129144;
var caddo_pop = 233092;
var calc_pop = 205282;
var caldwell_pop = 9571;
var cameron_pop = 5080;
var cat_pop = 8805;
var claiborne_pop = 14038;
var concordia_pop = 18376;
var desoto_pop = 26919;
var ebr_pop = 453301;
var ec_pop = 7220;
var ef_pop = 19338;
var evangeline_pop = 32215;
var franklin_pop = 19668;
var grant_pop = 22236;
var iberia_pop = 68975;
var iberville_pop = 29824;
var jackson_pop = 14876;
var jefferson_pop = 433688;
var jd_pop = 32345;
var lafayette_pop = 244205;
var lafourche_pop = 97504;
var lasalle_pop = 14834;
var lincoln_pop = 48152;
var livingston_pop = 145830;
var madison_pop = 9799;
var more_pop = 25025;
var natch_pop = 37026;
var orleans_pop = 376971;
var ouach_pop = 158768;
var plaque_pop = 23303;
var pc_pop = 20536;
var rapides_pop = 128654;
var rr_pop = 7564;
var rich_pop = 19805;
var sabine_pop = 22135;
var sb_pop = 44258;
var sc_pop = 52282;
var sh_pop = 10912;
var sj_pop = 19742;
var sjb_pop = 42094;
var sl_pop = 82071;
var sm_pop = 51540;
var stmary_pop = 48232;
var st_pop = 269388;
var tang_pop = 135217;
var tensas_pop = 4043;
var terr_pop = 108708;
var union_pop = 21091;
var vermilion_pop = 57204;
var vernon_pop = 48207;
var wash_pop = 45133;
var webster_pop = 36184;
var wbr_pop = 27792;
var wc_pop = 9594;
var wf_pop = 15494;
var winn_pop = 13488;

//calculate deaths per 100k
var acadia_dph = (acadia / acadia_pop * 100000).toFixed(2);
var allen_dph = (allen / allen_pop * 100000).toFixed(2);
var asc_dph = (asc / asc_pop * 100000).toFixed(2);
var assumption_dph = (assumption / assumption_pop * 100000).toFixed(2);
var avoyelles_dph = (avoyelles / avoyelles_pop * 100000).toFixed(2);
var beau_dph = (beau / beau_pop * 100000).toFixed(2);
var bien_dph = (bien / bien_pop * 100000).toFixed(2);
var bossier_dph = (bossier / bossier_pop * 100000).toFixed(2);
var caddo_dph = (caddo / caddo_pop * 100000).toFixed(2);
var calc_dph = (calc / calc_pop * 100000).toFixed(2);
var caldwell_dph = (caldwell / caldwell_pop * 100000).toFixed(2);
var cameron_dph = (cameron / cameron_pop * 100000).toFixed(2);
var cat_dph = (cat / cat_pop * 100000).toFixed(2);
var claiborne_dph = (claiborne / claiborne_pop * 100000).toFixed(2);
var concordia_dph = (concordia / concordia_pop * 100000).toFixed(2);
var desoto_dph = (desoto / desoto_pop * 100000).toFixed(2);
var ebr_dph = (ebr / ebr_pop * 100000).toFixed(2);
var ec_dph = (ec / ec_pop * 100000).toFixed(2);
var ef_dph = (ef / ef_pop * 100000).toFixed(2);
var evangeline_dph = (evangeline / evangeline_pop * 100000).toFixed(2);
var franklin_dph = (franklin / franklin_pop * 100000).toFixed(2);
var grant_dph = (grant / grant_pop * 100000).toFixed(2);
var iberia_dph = (iberia / iberia_pop * 100000).toFixed(2);
var iberville_dph = (iberville / iberville_pop * 100000).toFixed(2);
var jackson_dph = (jackson / jackson_pop * 100000).toFixed(2);
var jefferson_dph = (jefferson / jefferson_pop * 100000).toFixed(2);
var jd_dph = (jd / jd_pop * 100000).toFixed(2);
var lafayette_dph = (lafayette / lafayette_pop * 100000).toFixed(2);
var lafourche_dph = (lafourche / lafourche_pop * 100000).toFixed(2);
var lasalle_dph = (lasalle / lasalle_pop * 100000).toFixed(2);
var lincoln_dph = (lincoln / lincoln_pop * 100000).toFixed(2);
var livingston_dph = (livingston / livingston_pop * 100000).toFixed(2);
var madison_dph = (madison / madison_pop * 100000).toFixed(2);
var more_dph = (more / more_pop * 100000).toFixed(2);
var natch_dph = (natch / natch_pop * 100000).toFixed(2);
var orleans_dph = (orleans / orleans_pop * 100000).toFixed(2);
var ouach_dph = (ouach / ouach_pop * 100000).toFixed(2);
var plaque_dph = (plaque / plaque_pop * 100000).toFixed(2);
var pc_dph = (pc / pc_pop * 100000).toFixed(2);
var rapides_dph = (rapides / rapides_pop * 100000).toFixed(2);
var rr_dph = (rr / rr_pop * 100000).toFixed(2);
var rich_dph = (rich / rich_pop * 100000).toFixed(2);
var sabine_dph = (sabine / sabine_pop * 100000).toFixed(2);
var sb_dph = (sb / sb_pop * 100000).toFixed(2);
var sc_dph = (sc / sc_pop * 100000).toFixed(2);
var sh_dph = (sh / sh_pop * 100000).toFixed(2);
var sj_dph = (sj / sj_pop * 100000).toFixed(2);
var sjb_dph = (sjb / sjb_pop * 100000).toFixed(2);
var sl_dph = (sl / sl_pop * 100000).toFixed(2);
var sm_dph = (sm / sm_pop * 100000).toFixed(2);
var stmary_dph = (stmary / stmary_pop * 100000).toFixed(2);
var st_dph = (st / st_pop * 100000).toFixed(2);
var tang_dph = (tang / tang_pop * 100000).toFixed(2);
var tensas_dph = (tensas / tensas_pop * 100000).toFixed(2);
var terr_dph = (terr / terr_pop * 100000).toFixed(2);
var union_dph = (union / union_pop * 100000).toFixed(2);
var vermilion_dph = (vermilion / vermilion_pop * 100000).toFixed(2);
var vernon_dph = (vernon / vernon_pop * 100000).toFixed(2);
var wash_dph = (wash / wash_pop * 100000).toFixed(2);
var webster_dph = (webster / webster_pop * 100000).toFixed(2);
var wbr_dph = (wbr / wbr_pop * 100000).toFixed(2);
var wc_dph = (wc / wc_pop * 100000).toFixed(2);
var wf_dph = (wf / wf_pop * 100000).toFixed(2);
var winn_dph = (winn / winn_pop * 100000).toFixed(2);

//create array for table
let deaths = [
	{Parish: "Acadia", Deaths per 100,000: acadia_dph}, {Parish: "Allen", Deaths per 100,000: allen_dph}, {Parish:  "Ascension", Deaths per 100,000: asc_dph}, {Parish:  "Assumption", Deaths per 100,000: assumption_dph}, {Parish:  "Avoyelles", Deaths per 100,000: avoyelles_dph}, {Parish:  "Beauregard", Deaths per 100,000: beau_dph}, {Parish:  "Bienville", Deaths per 100,000: bien_dph}, {Parish:  "Bossier", Deaths per 100,000: bossier_dph}, {Parish:  "Caddo", Deaths per 100,000: caddo_dph}, {Parish:  "Calcasieu", Deaths per 100,000: calc_dph}, {Parish:  "Caldwell", Deaths per 100,000: caldwell_dph}, {Parish:  "Cameron", Deaths per 100,000: cameron_dph}, {Parish:  "Catahoula", Deaths per 100,000: cat_dph}, {Parish:  "Claiborne", Deaths per 100,000: claiborne_dph}, {Parish:  "Concordia", Deaths per 100,000: concordia_dph}, {Parish:  "DeSoto", Deaths per 100,000: desoto_dph}, {Parish:  "East Baton Rouge", Deaths per 100,000: ebr_dph}, {Parish:  "East Carroll", Deaths per 100,000: ec_dph}, {Parish:  "East Feliciana", Deaths per 100,000: ef_dph}, {Parish:  "Evangeline", Deaths per 100,000: evangeline_dph}, {Parish:  "Franklin", Deaths per 100,000: franklin_dph}, {Parish:  "Grant", Deaths per 100,000: grant_dph}, {Parish:  "Iberia", Deaths per 100,000: iberia_dph}, {Parish:  "Iberville", Deaths per 100,000: iberville_dph}, {Parish:  "Jackson", Deaths per 100,000: jackson_dph}, {Parish:  "Jefferson", Deaths per 100,000: jefferson_dph}, {Parish:  "Jefferson Davis", Deaths per 100,000: jd_dph}, {Parish:  "Lafayette", Deaths per 100,000: lafayette_dph}, {Parish:  "Lafourche", Deaths per 100,000: lafourche_dph}, {Parish:  "LaSalle", Deaths per 100,000: lasalle_dph}, {Parish:  "Lincoln", Deaths per 100,000: lincoln_dph}, {Parish:  "Livingston", Deaths per 100,000: livingston_dph}, {Parish:  "Madison", Deaths per 100,000: madison_dph}, {Parish:  "Morehouse", Deaths per 100,000: more_dph}, {Parish:  "Natchitoches", Deaths per 100,000: natch_dph}, {Parish:  "Orleans", Deaths per 100,000: orleans_dph}, {Parish:  "Ouachita", Deaths per 100,000: ouach_dph}, {Parish:  "Plaquemines", Deaths per 100,000: plaque_dph}, {Parish:  "Pointe Coupee", Deaths per 100,000: pc_dph}, {Parish:  "Rapides", Deaths per 100,000: rapides_dph}, {Parish:  "Red River", Deaths per 100,000: rr_dph}, {Parish:  "Richland", Deaths per 100,000: rich_dph}, {Parish:  "Sabine", Deaths per 100,000: sabine_dph}, {Parish:  "St. Bernard", Deaths per 100,000: sb_dph}, {Parish:  "St. Charles", Deaths per 100,000: sc_dph}, {Parish:  "St. Helena", Deaths per 100,000: sh_dph}, {Parish:  "St. James", Deaths per 100,000: sj_dph}, {Parish:  "St. John the Baptist", Deaths per 100,000: sjb_dph}, {Parish:  "St. Landry", Deaths per 100,000: sl_dph}, {Parish:  "St. Martin", Deaths per 100,000: sm_dph}, {Parish:  "St. Mary", Deaths per 100,000: stmary_dph}, {Parish:  "St. Tammany", Deaths per 100,000: st_dph}, {Parish:  "Tangipahoa", Deaths per 100,000: tang_dph}, {Parish:  "Tensas", Deaths per 100,000: tensas_dph}, {Parish:  "Terrebonne", Deaths per 100,000: terr_dph}, {Parish:  "Union", Deaths per 100,000: union_dph}, {Parish:  "Vermilion", Deaths per 100,000: vermilion_dph}, {Parish:  "Vernon", Deaths per 100,000: vernon_dph}, {Parish:  "Washington", Deaths per 100,000: wash_dph}, {Parish:  "Webster", Deaths per 100,000: webster_dph}, {Parish:  "West Baton Rouge", Deaths per 100,000: wbr_dph}, {Parish:  "West Carroll", Deaths per 100,000: wc_dph}, {Parish:  "West Feliciana", Deaths per 100,000: wf_dph}, {Parish:  "Winn", Deaths per 100,000: winn_dph}
];

function generateTableHead(table, data) {
	let head = table.createTableHead();
	let row = thead.insertRow();
	for (let key of data) {
		let th = document.createElement("th");
		let text = document.createTextNode(key);
		th.appendChild(text);
		row.appendChild(th);
	}
}

function generateTable(table, data) {
	for (let element of data) {
		let row = table.insertRow();
		for (key in element) {
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		}	
	}
}

let table = document.querySelector("table");
let data = Object.keys(deaths[0]);
generateTable(table, deaths);
generateTableHead(table, data);
