function c_obj1(p11, p12) {
    this.p11 = p11;
    this.p12 = p12;
    this.m11 = function () {
        console.log('Sóc el mètode m11');

    }
    this.m12 = function () {
        console.log('Sóc el mètode m12');

    }
}
function c_obj2(p21) {
    this.p21 = p21;
}
c_obj2.prototype = new c_obj1;
obj2 = new c_obj2;
for (var prop in obj2) {
    document.write(prop, ": ", obj2[prop], "<br>");

}
document.write('<h2>Exemples</h2><br>')
// Exemples amb declaració alternativa

const DocumentPaper = function (mat) {
    this.titol = "";
    this.material = "paper";
    this.mostrar = function () {
        for(var prop in this) {
            document.write(prop, ": ", this[prop], "<br>");
        }
     }
}//Constructor
const LlibreTradic = function (nrPag, autor) {
    this.nrPag = nrPag;
    this.autor = autor
} //Constructor
LlibreTradic.prototype = new DocumentPaper; //Herència
odisea = new LlibreTradic(200, "Homer");//Instància
odisea.titol = "L'Odisea"
document.write('El material és: ',odisea.material+'<br>')
document.write(`<h3>Propietats de l'objecte: </h3>`)
odisea.mostrar()
