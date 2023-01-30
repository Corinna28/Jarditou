//*Exercice 2 : Table de multiplication*//



//*Exercice 3 : recherche d'un prénom*//

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var saisie = window.prompt("Veuillez écrire votre prénom")
if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
	console.log(tab);
}
else{alert("Erreur")}

alert(tab);