import { useState } from "react";
import { Llista } from "./Llista";

export function Container(){
    let [titol, setTitol] = useState("Titol Llista");
    let [dades, setDades] = useState(["John Doe", "Pepe", "manel"]);
    return(
        <>
        <h1>{titol}</h1>
        <div>
            <Llista data={dades} />
        </div>
        </>
    )
}