import { SZEMELYLISTA } from "./adat.js";
import { kosolraIr } from "./fuggvenyek.js";
import { listaOsszeallit } from "./fuggvenyek.js";
import { kartyaCon } from "./fuggvenyek.js";
kosolraIr(SZEMELYLISTA);
listaOsszeallit(SZEMELYLISTA);
/* meg kell fogni azt a HTML elemet, amibe írni szeeretnénk */
/* const FELSELEM = document.getElementById("felsorolas"); */
const FELSELEM = document.querySelector("#felsorolas");
console.log(FELSELEM);
FELSELEM.innerHTML = "<h1>Ügyesek voltatok</h1>";
FELSELEM.innerHTML += listaOsszeallit(SZEMELYLISTA);
const KARTYACON = document.querySelector("#kartyaContainer");
KARTYACON.innerHTML = kartyaCon(SZEMELYLISTA);

/* a lista végére helyezi egy elemet */ /* leveszi a lista utolsó elemét */

/* const a = 2; */
/* a = 3 -hibaüzenet */

/* const LISTA = ["Géza", "Jenő", ]
console.log(LISTA[1])
LISTA[10] = "Béla"
 */

/* LISTA.push("Jakab") */
/* LISTA.pop()     */
/* console.log(LISTA)
console.log(LISTA[5] */

/* A konstans deklarált változó értéke nem írható felül */
/* összetett adatszerkezet esetén, mint például a lista és objektum consttal való deklaráláskor a lista memóriacíme nem változtatható meg, a lista értékei megváltoztathatóak, módosíthatóak az elemei, kitörölhetőek, hozzáadhatóak új elemek */

/* ismerőseim nyilvántartása */
/* const NEV = ["Géza", "Jenő"] */
/* const TEL = ["06-30-5436", ""] */

/* OBJEKTUM ÖSSZETETT ADATSZERKEZET */
/* objektumok = kulcsértékpárok */
