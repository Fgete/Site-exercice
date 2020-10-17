// --- BODY ---
main = document.querySelector("#main");

// --- FIELDSET ---
fieldset = document.createElement("fieldset");
main.appendChild(fieldset);

legend = document.createElement("legend");
legendText = document.createTextNode("Formulaire");
legend.appendChild(legendText);
fieldset.appendChild(legend);

// --- FORM ---
form = document.createElement("form");
form.setAttribute("id", "form1");
form.setAttribute("method", "get");
form.setAttribute("action", "./reponseForm.html");
fieldset.appendChild(form);

// --- GENRE ---
divFemme = document.createElement("div");
form.appendChild(divFemme);

femme = document.createElement("input");
femme.setAttribute("type", "radio");
femme.setAttribute("id", "femme");
femme.setAttribute("name", "genre");
femme.setAttribute("value", "Femme");
femme.setAttribute("required", "required");
divFemme.appendChild(femme);

femmeLabel = document.createElement("label");
femmeLabel.setAttribute("for", "femme");
femmeLabel.innerHTML = "Femme";
divFemme.appendChild(femmeLabel);


divHomme = document.createElement("div");
form.appendChild(divHomme);

homme = document.createElement("input");
homme.setAttribute("type", "radio");
homme.setAttribute("id", "homme");
homme.setAttribute("name", "genre");
homme.setAttribute("value", "Homme");
divHomme.appendChild(homme);

hommeLabel = document.createElement("label");
hommeLabel.setAttribute("for", "homme");
hommeLabel.innerHTML = "Homme";
divHomme.appendChild(hommeLabel);

// --- NOM ---
nom = document.createElement("input");
nom.setAttribute("type", "text");
nom.setAttribute("name", "nom");
nom.setAttribute("placeholder", "NOM");
nom.setAttribute("required", "required");
form.appendChild(nom);

// --- PRENOM ---
prenom = document.createElement("input");
prenom.setAttribute("type", "text");
prenom.setAttribute("name", "prenom");
prenom.setAttribute("placeholder", "Prénom");
prenom.setAttribute("required", "required");
form.appendChild(prenom);

// --- DATE ---
date = document.createElement("input");
date.setAttribute("type", "date");
date.setAttribute("name", "date");
date.setAttribute("placeholder", "jj/mm/aaaa");
date.setAttribute("required", "required");
form.appendChild(date);

// --- EMAIL ---
email = document.createElement("input");
email.setAttribute("type", "email");
email.setAttribute("name", "email");
email.setAttribute("placeholder", "lag@lag.com");
email.setAttribute("required", "required");
form.appendChild(email);

// --- DIPLOME ---
var diplomeList = ["Bac STI2D", "Licence Info", "Diplome Ingé"];

var diplomes = document.createElement("select");
diplomes.setAttribute("name", "diplomes");
diplomes.setAttribute("multiple", "multiple");
diplomes.setAttribute("required", "required");
form.appendChild(diplomes);

for (var i = 0; i < diplomeList.length; i++) {
	var newOption = document.createElement("option");
	var newText = document.createTextNode(diplomeList[i]);

	if (i == 0)
		newOption.setAttribute("selected", "selected");
	newOption.setAttribute("value", (i+1));
	newOption.appendChild(newText);

	diplomes.appendChild(newOption);
}

// --- TELEPHONE ---
telephone = document.createElement("input");
telephone.setAttribute("type", "phone");
telephone.setAttribute("name", "telephone");
telephone.setAttribute("placeholder", "06 12 34 56 78");
form.appendChild(telephone);

// --- COMMENTAIRE ---
commentaire = document.createElement("input");
commentaire.setAttribute("type", "text");
commentaire.setAttribute("name", "commentaire");
commentaire.setAttribute("placeholder", "Commentaire");
form.appendChild(commentaire);

// --- NIVEAU DE LANGUE ---
anglais = document.createElement("input");
anglais.setAttribute("type", "range");
anglais.setAttribute("name", "anglais");
anglais.setAttribute("required", "required");
form.appendChild(anglais);

// --- LANGUAGE DE PROG ---
divCbPascal = document.createElement("div");
form.appendChild(divCbPascal);

cbPascal = document.createElement("input");
cbPascal.setAttribute("type", "checkbox");
cbPascal.setAttribute("id", "pascal");
cbPascal.setAttribute("name", "pascal");
divCbPascal.appendChild(cbPascal);

cbPascalLabel = document.createElement("label");
cbPascalLabel.setAttribute("for", "pascal");
cbPascalLabel.innerHTML = "Pascal";
divCbPascal.appendChild(cbPascalLabel);


divCbJavaScript = document.createElement("div");
form.appendChild(divCbJavaScript);

cbJavaScript = document.createElement("input");
cbJavaScript.setAttribute("type", "checkbox");
cbJavaScript.setAttribute("id", "javaScript");
cbJavaScript.setAttribute("name", "javaScript");
divCbJavaScript.appendChild(cbJavaScript);

cbJavaScriptLabel = document.createElement("label");
cbJavaScriptLabel.setAttribute("for", "javaScript");
cbJavaScriptLabel.innerHTML = "JaveScript";
divCbJavaScript.appendChild(cbJavaScriptLabel);


divCbPython = document.createElement("div");
form.appendChild(divCbPython);

cbPython = document.createElement("input");
cbPython.setAttribute("type", "checkbox");
cbPython.setAttribute("id", "python");
cbPython.setAttribute("name", "cbPython");
divCbPython.appendChild(cbPython);

cbPythonLabel = document.createElement("label");
cbPythonLabel.setAttribute("for", "python");
cbPythonLabel.innerHTML = "Python";
divCbPython.appendChild(cbPythonLabel);

// --- RESET ---
reset = document.createElement("input");
reset.setAttribute("type", "reset");
form.appendChild(reset);

// --- SUBMIT ---
submit = document.createElement("input");
submit.setAttribute("type", "submit");
form.appendChild(submit);