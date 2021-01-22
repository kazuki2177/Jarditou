
// exercice 1 ---------------------------------------------------------------------------------------------

var jeunes=0;
var adultes=0;
var vieux=0;
var personne;
//  mes variables jeunes, adultes, vieux et personne
do {
  personne = window.prompt("Entre un âge stp");
  if ( personne <20) {
    jeunes++;
    console.log(personne);
    // variable et incrementatation classe jeune
  }
  else if ((personne >=40 ) && (personne <=100)) {
    vieux++;
    console.log(personne);
    // variable et incrementatation classe vieux
  }
  else if ((personne >=20 ) && (personne <=40)) {
    adultes++;
    console.log(personne);
    // variable et incrementatation classe adulte
  }
}
while (personne < 100);

// fin de la boucle avec le centenaire
 
window.alert("Il y a " + "" + jeunes + "" + " jeune(s)\n " + "Il y a " + "" + adultes + "" + " adulte(s)\n " + " Il y a " + " Il y a " + "" + vieux + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");

// ---------------------------------------------------------------------------------------------------------

// exercice 2 (variante A)----------------------------------------------------------------------------------------------

var multi = /^[0-9]+$/;
//  variable & expression rationnelle ( debut de sequence pour prise en compte des chiffres de 0 à 9 plus fin de sequence pour fermer la boucle)

        function TableMultiple()
        {
            //  variables
            var resultat = 0;
            var number = 0;
            var table = [];
            var X = prompt("Entre le nombre dont tu souhaite avoir la table de multiplication stp");

            // boucles et conditions
            if (X == null) {
                window.close();
            }
            else {
                X = parseInt(X);
                if (!multi.test(X))
                {
                    alert("Il faut entrer un nombre \n Recommence !");
                    window.location.reload(TableMultiple());
                    // condition qui impose de rentrer un nombre
                }
                while (number <= 10)
                {
                    resultat = number * X;
                    table[number] = (number + " x " + X + " = " + resultat + "\n");
                    number++;
                }
                if (table != 0) {
                    table = table.join("");
                    alert(table);
                }
                if (confirm("Veux tu recommencer ou non ?") == true) {
                    window.location.reload(TableMultiple());
                    // relance la boucle
                }
            }
        }
        TableMultiple();

// exercice 2 (variante B)---------------------------------------------------------------------------
// (Methode alternative plus courte pour afficher sur le html une table de multiplication )

        // function TableMultiplicationmethode2(){
        //     var numbers;
        //         numbers=window.prompt("Entrez le numéro de la table:");
        
        //         var i;
        //         for (i=1; i<=10; i++)
        //         {
        //         document.write(numbers+" x "+i+"="+numbers*i+"<br>");
        //         }
        // }
        //         TableMultiplicationmethode2();
        
// exercice 3 -------------------------------------------------------------------------------------------

        var tab = ["\n", "Audrey","Aurelien", "Flavien", "Jeremy", "Laurent","\n", "Melik", "Nouara", "Salem", "Samuel", "Stephane"];
        var Nom = window.prompt(`Choisi un prénom parmis ceux ci :${[...tab]}.`)
        // variable renvoyant a la liste de nom defini
        if(tab.includes(Nom)){
            tab.splice(tab.indexOf(Nom));
            tab.push(" ");
            alert(tab)
        }
        else{alert("erreur")}
        console.log(tab)
        // cas ou la saisi est non correct et ne rentre pas dans le champs

// exercice 4 --------------------------------------------------------------------------------------------

var pu = parseFloat(prompt("Prix unité"));
var qtecom = parseInt(prompt("Quantité que vous avez commandée"));
var tot = pu * qtecom;
var port = 1.02;
var rem1 = 0.95;
var rem2 = 0.90;
var pap = 0;


// declaration des variables


if (isNaN(pu && qtecom)) {
  alert("Erreur, saisi des nombres svp");
  // exclusion des valeurs incorrect
}
else {

  if (tot > 500) {
    pap = tot * rem2;
    if (tot * rem2 < 500)
    {
      pap = (tot * rem2) * port;
    }
  }
  // calcul si prix superieur a 500

  else if (tot > 200 && tot <= 500) 
    {
    pap = (tot * rem2) * port ;
    }
// calcul prix - remise 10 % - frais de port
    

  }
  if (tot <= 200 && tot >= 100) {
    pap = tot * rem1 + 6;
// cas et calcul remise 5 % .... 6 correspont a la valeurs min du fdp
  }
  else if(tot < 100 & tot > 0) {
    pap = tot + 6;
    // cas autres prix et frai de port de 6 €
  }
  alert("Le prix à payer est de " + pap + "€.");


// exercice 5 -------------------------------------------------------------------------------------

// Se rendre sur le html de l'exercice 5 lié a un javascript spécifique.