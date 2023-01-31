
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var saisie = window.prompt("Veuillez écrire votre prénom")
if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
	console.log(tab);
}
else{alert("Votre prénom ne fait pas parti des selectionnés")}

alert(tab);