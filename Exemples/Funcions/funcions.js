// Exemple parametres
function funcio2(p_string, p_array, p_date) {
    p_string = "s2";
    p_array[0] = "v2";
    p_date.setFullYear(2011, 10, 10);
}

var a = "s1";
var b = ["v1"];
var c = new Date();

funcio2(a, b, c);
document.write("<h2>Paràmetres</h2>")
document.write(a + "<br>");
document.write(b + "<br>");
document.write(c + "<br>");

// Exemple àmbit variables
function f_suma() {
    var a = 2; var b = 3;
    resultat = a + b; // no utilitza var --> variable global
    // let resultat = a + b; // utilitza let --> variable local
    return resultat;
}
resultat = 0;

suma = f_suma();
document.write("<h2>Àmbit variables</h2>")
document.write("El valor retornat per la funció és: " + suma + "<br>");
document.write("El valor de resultat és: " + resultat);
console.log(suma);


// Exemple fat arrow functions ES6
var sum = (a, b) => a + b;
// var sum = (a, b) => {
//     return a + b;
// }
// es crida sum(a,b)
document.write("<h2>Arrow functions ES6</h2>")
document.write("El valor retornat per la funció és: " + sum(7, 5) + "<br>");


var vowels = ['a', 'e', 'i', 'o', 'u'];
vowels.forEach(value => { console.log('vowel:' + value); });
vowels.forEach(valor => { document.write(valor + "<br>") });

// // Exemple paràmetres Rest ES6

function printName(name, ...fancyNames) {
    var fullName = name;
    fancyNames.forEach(fancyN => fullName += ' ' + fancyN);
    console.log(fullName);
    document.write(fullName + "<br>");
};
document.write("<h2>Paràmetres Rest ES6</h2>")
printName('Daenerys');

printName('Daenerys', 'Khaleesi', 'Madre de Dragones', 'Reina de los Ándalos', 'los Rhoynar', 'y los primeros hombres')

// // Exemple paràmetres per defecte ES6
document.write("<h2>Paràmetres per defecte ES6</h2>");
function greet(name, gender = 'Dr.', greeting =
    'Hello ' + gender) {
    console.log(greeting + ' ' + gender + name);
    document.write(greeting + ' ' + gender +' ' +name+ "<br>");
};
greet('Peter');
greet('Alex', undefined, 'Whats up');
greet ('Nico','Free','Good evening');

