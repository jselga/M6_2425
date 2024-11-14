class DocumentPaper {
    constructor(mat) {
        this.titol = "";
        this.material = "paper";
        this.mostrar = function () {
            for (var prop in this) {
                document.write(prop, ": ", this[prop], "<br>");
            }
        };
    }
}//Constructor
class LlibreTradic extends DocumentPaper {
    constructor(nrPag, autor) {
        super();
        this.nrPag = nrPag;
        this.autor = autor;
    }
}
odisea = new LlibreTradic(200, "Homer");//Instància
odisea.titol = "L'Odisea"
// odisea.material
odisea.mostrar();

// Exemples amb sobreescriptura de mètodes

class Animal {
    parlar() {
      console.log("L'animal fa un soroll.");
    }
  }
  
class Gos extends Animal {
    parlar() {
      super.parlar(); // Crida al mètode parlar de la classe pare
      console.log("El gos borda.");
    }
  }
  
  const gos = new Gos();
  gos.parlar(); 