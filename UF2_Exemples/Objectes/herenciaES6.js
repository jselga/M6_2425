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
odisea.mostrar()