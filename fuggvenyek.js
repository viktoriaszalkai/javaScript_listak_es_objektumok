export function kosolraIr(SZEMELYLISTA) {
  for (let i = 0; i < SZEMELYLISTA.length; i++)
    console.log(SZEMELYLISTA[i].nev, SZEMELYLISTA[i].tel, SZEMELYLISTA[i].suly);
}

export function listaOsszeallit(SZEMELYLISTA){
    let txt = "<ul>"
    for(let i = 0; i < SZEMELYLISTA.length; i++){
        txt+=`<li>név: ${SZEMELYLISTA[i].nev}, tel: ${SZEMELYLISTA[i].tel}</li>`
    }txt +=" </ul>"
    console.log(txt);
    return txt
}

export function kartyaCon(SZEMELYLISTA){
    let txt = "";
    for(let i = 0; i < SZEMELYLISTA.length; i++){
        txt+=`<div class = "kartya"><h3>név: ${SZEMELYLISTA[i].nev}</h3><p>súly: ${SZEMELYLISTA[i].suly}</p><p>tel: ${SZEMELYLISTA[i].tel}</p></div>`
    }
    console.log(txt);
    return txt

}