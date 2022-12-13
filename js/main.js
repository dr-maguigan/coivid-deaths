//add map centered on Louisiana
var map = L.map('map', {
	center: [30.9843, -91.9623],
	zoom: 7.5
});

//create global covid variable and retrieve information, assign it to covid
var anchorage;
$.ajax({
    type: "GET",
    url: "https://data.cdc.gov/resource/kn79-hsxy.json",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
	    ad = (data[1].covid_death);
	    anchorage = Number(ad);
    }
});
console.log(anchorage);
