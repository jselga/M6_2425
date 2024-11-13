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
        if(this.pagAct > this.pagines)
        this.pagAct = 0;
    }
}


llibre5 = new c_llibre2('Alegria5', 400);
console.log(llibre5);
llibre5.pagAct=400;
console.log(llibre5);
llibre5.pag_seguent();
console.log(llibre5);

function pag_seguent_f (){
    this.pagAct++;
    if(this.pagAct > this.pagines) this.pagAct =0;
}
function c_llibre3(p_titol, p_pag) {
    this.titol = p_titol;
    this.pagines = p_pag; 
    this.pag_seguent =pag_seguent_f;
}

llibre6 = new c_llibre3('Titol llibre 6', 125);
console.log(llibre6);
llibre6.pagAct=100;
llibre6.pag_seguent();
console.log(llibre6);




// Llistar propietats
for (var prop in llibre5){
    document.write(prop, ": ", llibre5[prop],"<br>");
    
}
