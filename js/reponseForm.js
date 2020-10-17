// GET INFO
// substr(indexOf("?"));

// --- GET MAIN ---
var main = document.querySelector("#main");

// --- PARAGRAPHE ---
var p = document.createElement("p");
var text = document.createTextNode("Saucisse !");

p.appendChild(text);
main.appendChild(p);

// --- EXTRACT INFO FROM URL ---
// Get URL
var url = document.URL;
// console.log("URL : " + url);

// Cut URL
var subUrl = url.substr(url.indexOf("?") + 1);
// console.log("subUrl : " + subUrl);

// Extract brut informations
var listInfoBrut = subUrl.split("&");
var listInfo = [,];

for (var i = 0; i < listInfoBrut.length; i++){
	listInfo[i,0] = listInfoBrut[i].split("=")[0];
	listInfo[i,1] = listInfoBrut[i].split("=")[1];
	console.log(listInfo[i,0] + " = " + listInfo[i,1]);
}