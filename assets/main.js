/* Palidroma:
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */
//var palindromo = prompt('Inserisci una parola');
var userAnswer = prompt('Inserisci una palindromo');

function palindrome(str) {
    /* remove special characters, spaces and make lowercase*/
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  
    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');
  
    /* Check to see if str is a Palindrome*/
     return (removeChar === checkPalindrome);
  }

  console.log(palindrome(userAnswer));
  if (palindrome(userAnswer)){
        document.getElementById('palindromo').innerHTML = "La tua parola è palindroma" 
      } else {
        document.getElementById('palindromo').innerHTML = "La tua parola non è palindroma"
      }
      
/* Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */




