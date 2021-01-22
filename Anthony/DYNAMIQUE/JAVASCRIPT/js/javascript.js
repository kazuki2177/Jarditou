// var reponse1 = window.prompt("Saisissez votre nom");

// var reponse2 = window.prompt("Saisissez votre prénom");

// const bien = "\nBienvenue sur notre site web !"

// var sexe

// if (window.confirm("Etes-vous un homme?") == true) 
// { 
//     sexe = "Monsieur "
//     window.alert( "Bonjour " + sexe + reponse1 + " " + reponse2 + bien);
// }
// else 
// {
//     sexe = "Madame "
// window.alert( "Bonjour " + sexe + reponse1 + " " + reponse2 + bien);
// }

// MODULE exercice ----------------------------------------------------------------------------


// var a = "100"
// var b = 100
// var c = 1.00
// var d = true

// document.write("Ceci est une chaîne de caractères: " + a + "<br>" );
// document.write(b = --b + "<br>");
// document.write(c = c + a + "<br>")
// var d = !d
// document.write(d)

// MODULE 6 exercice----------------------------------------------------------------

// var diviseur = 2;
// var nombre = window.prompt("Saisi un nombre stp :");
// var resultat = nombre % diviseur;
// if (isNaN(nombre)) {
//     alert("Pas de nombre saisi !"); 
    
// } else if (resultat == 0) {
//     alert("Le nombre saisi est pair.");
// } else {
//     alert("Le nombre saisi est impair.");
// }
//     alert("Bravo à moi même !")
// module 7 exercice 1-----------------------------------------------------------------------
                



// var annéebirth = window.prompt("Saisi ton année de naissance stp:");
//    var date = new Date();
//    var annéeactuel = date.getFullYear();
//    var age = annéeactuel - annéebirth;
//    if (isNaN(annéebirth)) {
//        alert("Veuillez saisir une année valide stp!");
//    } else {
//        if (age >= 18) {
//            alert("Vous avez " + age + " ans.");
//            alert("Tu est donc majeur.");
//        } else {
//            alert("Tu a " + age + " ans, tu est donc mineur tu ne rentre pas en boite");
//        }
//    }
// module 7 exercice 2--------------------------------------------------------

//     var Nombreun = window.prompt("Saisi un premier nombre");
//     if (isNaN(Nombreun)) {
//         alert("Saisi un nombre valide stp!");
//     }
//     var operateur = window.prompt("Saisisez un opérateur");

//     var Nombredeux = window.prompt("Saisi un second nombre");
//     if (isNaN(Nombredeux)) {
//     alert("Saisi un nombre valide stp!");
// }
//     switch (operateur) {
//         case "-":
//             alert(Nombreun + "-" + Nombredeux + " = " + (Nombreun - Nombredeux));
//             break;
//         case "+":
//             alert(Nombreun + "+" + Nombredeux + " = " + (Nombreun + Nombredeux));
//             break;
//         case "*":
//             alert(Nombreun + "*" + Nombredeux + " = " + (Nombreun * Nombredeux));
//             break;
//         case "/":
//             if (Nombredeux == 0) {
//                 alert("division par 0 impossible");

//                 alert(Nombreun + "/" + Nombredeux + " = " + (Nombreun / Nombredeux)); }                
//          break;
//          default:
//                 alert("Saisi un opérateur valide stp !")}

//module 7 exo 3--------------------------------------------------------------


// var prenom = "";
// var compteur = 1;
// do {
// prenom = window.prompt("Saisissez le prénom n° " + compteur + "\n ou cliquez sur Annuler pour arréter la saisie.");
//                  if (prenom != null && prenom != "") {
//                         console.log("prénom n° " + compteur + ": " + prenom);
//                         compteur++;
//                     } 
//                 } while (prenom != null && prenom != "");


 // module 8 exo 1--------------------------------------------------------------------------------

// var nombre;
// var N = 0;
// while (isNaN(nombre)) {
//     nombre = parseInt(window.prompt('Saisissez un nombre :')); }
//     for (N = 0; N < number; N++) {
//       }  console.log(N);
    


// module 8 exo 2 ----------------------------------------------------------------------------

// var nbre = parseInt(window.prompt("Saisi un entier stp :"));
// var total = 0;
// var moyen = 0;
// var i = 0;
//         while (isNaN(nbre)) {
//             nbre = parseInt(window.prompt("Saisi un premier nombre stp :"));
//         }
//         while(nbre != 0) {
//             console/log("somme" + total);
//             console/log("moyenne" + moyen);
//             total += nbre;
//             i++
//             moyen = total / i
//             nbre = parseInt(window.prompt("Saisir un entier :"))
//              }            
         

        // module 8 exo 3----------------------------------------------------------------------------------------------

var X = parseInt(window.prompt("Saisi un entier :"));
while (isNaN(X)) {
X = parseInt(window.prompt("Saisi un premier nombre :"));
}
var N = parseInt(window.prompt("Saisi le nombre de multiple :"));
while (isNaN(N)) {
    N = parseInt(window.prompt("Saisi un premier nombre :"));
}
var result = 0;
for (i = 0; i <= N; i++) {
    result = i * X;
    console.log(X + " x " + i + " = " + result); }



// module 8 exo 4 --------------------------------------------------------------------------------------------------------

//    var mot = window.prompt("Saisir un mot vite stp :").toLowerCase();
//     var motlongueur = word.length;
//     var compteurs = 0;
//     var word = window.prompt('Saisir un mot :').toLowerCase();
//     while (!isNaN(word)) {
//         word = parseInt(window.prompt('Saisi un mot :'));
//     }
//         var motlongueur = word.length;
//         var compteurs = 0;
//         for (i = 0; i < motlongueur; i++) {
//             switch (word[i]) {
//                 case 'a':
//                 case 'e':
//                 case 'i':
//                 case 'o':
//                 case 'u':
//                 case 'y':
//                     compteurs++;
//                     break;
//                 default: ' ';
//             }
//         }
//         console.log('nombre de voyelle dans ' + word + ' : ' + compteurs);
                      




    // exo 8.5-----------------------------------------------------------------------------------------------
    
    
    var x = 3;
    var y = 5;
    
    function produit(x, y) {
    var result = Math.pow(x, 3);
    var secondResult = x * y;
    var text = 'Le cube de ' + x + ' est égale à ' + result;
    var text2 = 'le produit de ' + x +' * ' + y + ' est égale à ' + secondResult;
    
    document.getElementById('calcul1').innerHTML = text;
    document.getElementById('calcul2').innerHTML = text2;

    }

    produit(x, y);

    // -----------------------------------------------------------------------------------------------------

    // var str1 = window.prompt('Veuillez entrer une liste de mots séparés par ", ; . : / ou -" :');
    // var str2 = window.prompt('Saisissez le séparateur utilisé (, ; . : / ou -)');
    //  var n = window.prompt('Saisissez le nième mot de la chaine à extraire :');
    

    //  function strtok(str1, str2, n) {
    //   var word = str1.split(str2);
    //   var nWord = word[n - 1];
    //   var display = document.getElementById('table').insertAdjacentHTML('beforeend', '
    // Le ' + n + 'ème mot de la chaine de caractère est ' + nWord + ' ');
    //   console.log(display);
    // } 
    // strtok();


//    ----------------------------------------------------------------------------------------------

var arrayLength = parseInt(window.prompt('Définissez la taille de votre tableau :'));
// construciton du tableau selon la taille renseignée
var array = new Array(arrayLength);
// variable stockant le contenu donné par l'utilisateur
var content = ''
// boucle permettant l'insertion de contenu dans le tableau
//on "vide" le tableau
array.splice(0, arrayLength);
for(i = 0; i < arrayLength; i++) {
    content = window.prompt('Indiquer une valeur à entrer dans le tableau :');
    array.push(content);
}
// affichage du tableau
alert('votre tableau :' + array.join(', '));


// -------------------------------------------------------------------------------------------------------------



function getInteger() {
    integer = parseInt(window.prompt('Saisissez une taille de tableau :')); //définition de la taille du tableau
} 
// fonction initialisant le tableau
function initTab(integer) {
    // déclaration des variables
    array = new Array(integer); // création du tableau
    array.splice(0, integer);                                                                               }
// fonction permettant le remplissage du tableau
function saisieTab(integer, array) {
    var content = '';
    var count = 0;
    //boucle permettant le remplissage du tableau
    for (count = 0; count < integer; count++) {
        content = window.prompt('indiquer une valeur à entrer dans le tableau :');
        var arrayPush = array.push(content);
    }
}   
                                
// fontion affichant le tableau
function afficheTab(array) {
    //affichage du tableau
    var array;
    alert(array.join(', '));
    console.log(array);
}
// fonction permettant la recherche de la valeur d'un index dans le tableau
function rechercheTab(array) {
    var index = parseInt(window.prompt('Saisissez un index :'))
    var search = array[index];
    alert(search);
}
// fonction affichant la valeur maximale et la moyenne de l'ensemble des valeurs du tableau
function infoTab(array) {
    var max = Math.max(...array);
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    console.log(sum);
    var average = 0;
    average = parseInt(sum / array.length);
    alert(average);
    alert(max);
}                           
        
// appel des fonctions
getInteger();
initTab(integer);
saisieTab(integer, array);
var choice = parseInt(window.prompt('choisissez une option :\n 1-Afficher le contenu du tableau \n 2-Afficher un index choisi \n 3-Afficher le maximum et la moyenne des postes saisis'));
while(choice == 1 || choice == 2 || choice == 3) {
    switch(choice) {
         case 1:
            afficheTab();
            break
        case 2:
            rechercheTab();
            break
         case 1:
            infoTab();
            break
         default:
         alert('Je n\'ai pas compris votre choix');
         choice = parseInt(window.prompt('choisissez une option :\n 1-Afficher le contenu du tableau \n 2-Afficher un index choisi \n 3-Afficher le maximum et la moyenne des postes saisis'));
    }
}

// -------------------------------------------------------------------------------------------------------------

function getInteger() {
    integer = parseInt(window.prompt('Saisissez une taille de tableau :')); //définition de la taille du tableau
} 
// fonction initialisant le tableau
function initTab(integer) {
    // déclaration des variables
    array = new Array(integer); // création du tableau
    array.splice(0, integer);                                                                               }
// fonction permettant le remplissage du tableau
function saisieTab(integer, array) {
    var content = '';
    var count = 0;
    //boucle permettant le remplissage du tableau
    for (count = 0; count < integer; count++) {
        content = parseInt(window.prompt('indiquer une valeur à entrer dans le tableau :'));
        var arrayPush = array.push(content);
    }
}   
getInteger();
initTab(integer);
saisieTab(integer, array);
alert('tableau avant tri : ' + array.join( ));
var index1 = 0;
var index2 = 0;
var temp = 0;
for(index1 = array.length; index1 >= 0; index1--) {
    for(index2 = array.length; index2 >= 0; index2--) {
        if(array[index2] < array[index1]) {
            temp = array[index2];
            array[index2] = array[index1];
            array[index1] = temp;
        }              
    }
} 
alert('tableau après tri : ' + array.join());



    





















    