import { useState } from "react";
import { Llista } from "./Llista";

export function Container(){
    let [titol, setTitol] = useState("Titol Llista");
    let [dades, setDades] = useState(["John Doe", "Pepe", "manel"]);
    function addElem() {
        let elem = prompt("Nou item de la llista");
        if (elem) {
          dades.push(elem);
          setDades([...dades]);
        }
      }
    function canviTitol() {
        let tt = prompt("Nou titol:")
        if (tt) {
          setTitol(tt);
        //document.getElementById("titol").innerHTML = tt;
      }
      }
    return(
        <>
        <h1 onClick={canviTitol}>{titol}</h1>
        <div>
            <Llista data={dades} />
            <button onClick={addElem}>Afegir</button>
        </div>
        </>
    )
}