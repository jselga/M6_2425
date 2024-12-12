window.onload=()=>  {
    console.log('intro a DOM desde main.js');
    const parrafo = document.getElementById("text");
    console.log(parrafo.innerHTML);
    parrafo.innerText='Texto actualizado'
    parrafo.innerHTML='<ul><li>Elemento 1</li><li>Elemento 2</li></ul>'
}


