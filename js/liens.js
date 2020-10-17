// Get body
body = document.querySelector("body");

// Create n place form
form = document.createElement("form");
form.setAttribute("id", "form1");
body.appendChild(form);

// Tableau nom de liens
var liens = ["Bissextile", "Boulangerie", "Mastermind"];
// Tableau liens
var links = ["./bissextile.html", "./boulangerie.html", "./mastermind.html"];

// On créé le select et on le place dans le form
var select = document.createElement("select");
select.setAttribute("id", "select");
select.setAttribute("onchange", "UpdateIframe()");

form.appendChild(select);

// On créé les options et on les places dans le select
for (var i = 0; i < liens.length; i++) {
	var newOption = document.createElement("option");
	var newText = document.createTextNode(liens[i]);

	if (i == 0)
		newOption.setAttribute("selected", "selected");
	newOption.setAttribute("value", (i+1));
	newOption.appendChild(newText);

	select.appendChild(newOption);
}

// Create n place button
btn = document.createElement("button");
btnText = document.createTextNode("GO !");
btn.setAttribute("id", "btn1");
btn.appendChild(btnText);
form.appendChild(btn);

// Create n place iframe
iframe = document.createElement("iframe");
iframe.setAttribute("id", "window");
form.appendChild(iframe);

// Permet d'aller à la page sélectionnée
btn.onclick = function(){
	form.action;
}

// On update les liens dans l'iframe et dans le form
function UpdateIframe(){
	iframe.src = links[select.value - 1];
	form.action = links[select.value - 1];
}