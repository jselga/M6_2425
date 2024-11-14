var llibre1 = new Object;
llibre1.titol = 'Alegria';
llibre1["pagines"] = 200;
console.log(llibre1);
var llibre2 = { titol: 'Alegria1', pagines: 300 };
console.log(llibre2);
llibre1.titol = 'Nou titol';
var valor = llibre1.titol;
console.log(llibre1);
console.log("valor de la variable amb propietat: ", valor);
llibre1["titol"] = 'Altre Titol';
console.log(llibre1);

function c_llibre(p_titol, p_pag) {
    this.titol = p_titol;
    this.pagines = p_pag;
}
llibre3 = new c_llibre('Alegria3', 400);
console.log(llibre3);
//Afegir només a una instancia concreta
llibre3.autor = "A.Lletraferit";
console.log(llibre3);
// puc crear una nova instancia amb el mateix nom
llibre3 = new c_llibre('New Alegria3', 340);
console.log(llibre3);

//Afegir a totes les instancies a partir del prototipus

c_llibre.prototype.autor = "Pendent d'introduir";
llibre4 = new c_llibre('Alegria4', 350);
console.log(llibre4, llibre4.autor);

function c_llibre2(p_titol, p_pag) {
    this.titol = p_titol;
    this.pagines = p_pag;
    this.pag_seguent = function () {
        this.pagAct++;
        if (this.pagAct > this.pagines)
            this.pagAct = 0;
    }
}


llibre5 = new c_llibre2('Alegria5', 400);
console.log(llibre5);
llibre5.pagAct = 400;
console.log(llibre5);
llibre5.pag_seguent();
console.log(llibre5);

function pag_seguent_f() {
    this.pagAct++;
    if (this.pagAct > this.pagines) this.pagAct = 0;
}
function c_llibre3(p_titol, p_pag) {
    this.titol = p_titol;
    this.pagines = p_pag;
    this.pag_seguent = pag_seguent_f;
}

llibre6 = new c_llibre3('Titol llibre 6', 125);
console.log(llibre6);
llibre6.pagAct = 100;
llibre6.pag_seguent();
console.log(llibre6);




// Llistar propietats
for (var prop in llibre5) {
    document.write(prop, ": ", llibre5[prop], "<br>");

}

// Existencia de propietats
document.write("<h2>Existeix la propietat?</h2>")
var prop1 = "titol"
if (prop1 in llibre5) {
    document.write(`La propietat <strong>${prop1}</strong> `, " existeix a l'objecte")
} else { document.write("NO") }

document.write("<h2><em>Existeix la propietat?</em></h2>")
var prop1 = "pagines"
if (typeof llibre5[prop1] != 'undefined') {
    document.write(`La propietat <strong>${prop1}</strong> `, " existeix a l'objecte")
}
else { document.write("NO") }
// La propietat és de la classe o no
document.write("<h2>La propietat és del Objecte?</h2>")
var prop1 = "titol"
if (llibre5.hasOwnProperty(prop1)) {
    document.write(`La propietat <strong>${prop1}</strong> `, " SI és de l'objecte")
} else { document.write("NO") }

// Visibilitat i accés de variables
function c_obj(v) {
    this.property = v;
    var prop_priv = 17;
}

function c_obj1(v1) {
    this.property = v1;
    var propPriv = 0;
    this.getpropPriv = function () {
        return propPriv
    };
    this.setpropPriv = function (v2) {
        propPriv = v2
    };
}
var obj = new c_obj1;
var a = obj.getpropPriv();
console.log(`Propietat Privada: ${a}`);
obj.setpropPriv(10);
a = obj.getpropPriv();
console.log(`Propietat Privada després de set: ${a}`);
// Visibilitat i accés de mètodes
function c_obj2(v1) {
    this.property = v1;
    var metPriv = function (p) {
        console.log(`Sóc el paràmetre amb valor ${p} dins del mètode privat`);
    }
    this.metPubl = function () {
        return metPriv
    };

};
var obj2 = new c_obj2;


var met = obj2.metPubl();
met('Hola');


var obj3 = new c_obj2;
var met = obj3.metPubl();
met('Adéu');
met.call(obj3, 'Adéu altre cop')


//Declaració objectes ES6 i ES2022+
console.log("El mateix però amb JS modern ES2022+")
class c_obj3 {
    constructor(v1) {
        this.property = v1;

    }
    //El simbol # s'introduiex a ES2022+
    #metPriv(p) {
        console.log(`Sóc el paràmetre amb valor ${p} dins del mètode privat`);
    }
    metPubl() {
        return this.#metPriv
    };

}
var obj3 = new c_obj3;
var met = obj3.metPubl();
met('Hola');
