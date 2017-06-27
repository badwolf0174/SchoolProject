
function InitAJAX()
{
	"use strict";
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

// Verstuur het request
xmlHttp.open("GET", "http://78696.ict-lab.nl/InhaalOpdrachtWeb4Mobile/php/data.php", true);
xmlHttp.send(null);
},5000);