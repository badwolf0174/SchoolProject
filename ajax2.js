

$( document ).ready(function() {;
$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
});});
function getParameterByName(name, url) {
	"use strict";
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function InitAJAX()
{
    var objxml;
    var IEtypes = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];

    try
    {
        // Probeer het eerst op de "moderne" standaardmanier
        objxml = new XMLHttpRequest();
    }
    catch (e)
    {
        // De standaardmanier werkte niet, probeer oude IE manieren
        for (var i = 0; i < IEtypes.length; i++)
        {
            try
            {
                objxml = new ActiveXObject(IEtypes[i]);
            }
            catch (e)
            {
                continue;
            }
        }
    }

    // Lever het XHR object op
    return objxml;
}

window.setInterval(function()
{
// Maak een XHR object
var xmlHttp = InitAJAX();

// Wat moet er gebeuren bij statuswijzigingen?
xmlHttp.onreadystatechange = function ()
{
    // Is het request al helemaal klaar en OK?
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    {
        // Lees de tekst die is ontvangen
        var result = xmlHttp.responseText;

        // Plaats de tekst in de pagina
        document.getElementById("content").innerHTML = result;
    }
}
var id = getParameterByName('car_id'); // "lorem"
// Verstuur het request
xmlHttp.open("GET", "car_detail.php?car_id="+id, true);
xmlHttp.send(null);
},5000);