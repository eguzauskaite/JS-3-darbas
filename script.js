// Pirma užduotis
// Paklauskite prekės kainos ir atspausdinkite tokį rezultatą:

// Prekės kaina su PVM: xx.xx €
// PVM: xx.xx €
// Prekės kaina be PVM: xx.xx €

// Suapvalinkite iki 2 skaičių po kablelio.
// PVM = 21%

// Kad atspausdinti tekstą ir kintamąjį vienoje eilutėje naudokite console.log("Prekės kaina su PVM: " + kaina + "€")

// Papildomai:
// Jeigu įvestas ne skaičius, o tekstas, pakartotinai klausti kainos

// function skaiciuotiKaina()
    var kaina = prompt("Įveskite prekės kainą:")
    while(isNaN(kaina)){
        kaina = prompt("Įveskite ne tekslą. Įveskite prekės kainą:")
    }
kaina = parseFloat (kaina)
var PVM = kaina * 0.21
var pilnaKainaSuPVM = kaina + PVM
var kainaBePVM = kaina

PVM = PVM.toFixed(2)
 pilnaKainaSuPVM = pilnaKainaSuPVM.toFixed(2)
 kainaBePVM = kainaBePVM.toFixed(2)

console.log("Prekės kaina su PVM:" + pilnaKainaSuPVM + "€")
console.log("PVM:" + PVM + "€")
console.log("Prekės kaina be PVM:" + kainaBePVM  + "€")






// Antra užduotis
// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti;
// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"

// Jei prekės kaina daugiau arba lygu 50€ arba miestas yra "Vilnius"- pristatymas nemokamas. Pristatymas kitur Lietuvoje: 20€;

// Galiausiai atspausdintų tokią informaciją:

// 1 variantas (be pristatymo)

// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a

// 2 variantas (su pristatymu)

// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.

// 3 variantas (su nemokamu pristatymu)

// Prekės kaina : xx.xx €
// Prekę nemokamai pristatysime į "įvestas miestas" per 1-3 dienas.
var kaina = parseFloat(prompt("Įveskite prekės kainą:"))
var pristatymas = prompt("Ar reikalinkas pristatymas į namus? (taip/ne)")

while(isNaN(kaina)){
    kaina = parseFloat(prompt("Įveskite prekės kainą:"))
}
var pristatymoKaina = 0
var pristatymoMiestas = ""
pristatymoMiestas = prompt("Nurodykite į kurį miestą reikia pristatyti?")
pristatymoKaina = (kaina >= 50 || pristatymoMiestas == "Vilnius")? 0 : 20


// ==== ARRAY =======

// Pirma užduotis

// Sukurkite naują array su žemiau pateiktais personažų pavadinimais.
// Naudodami 'console.log()' atspausdinkite pirmą ir paskutinį elementą.
// Naudodami prompt("Įveskite skaičių nuo 1 iki 6"), atspausdinkite personažą, kurio eilės numeris buvo įvestas

// Jon Snow
// Cersei Lannister
// Daenerys Targaryen
// Theon Greyjoy
// Tyrion Lannister
// Arya Stark

var personazas = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]
console.log("Pirmas personažas:" + personazas[0] )
console.log("Paskurinis personažas:" + personazas[personazas.length-1])

var eilesNumeris = prompt("Įveskite skaičių nuo 1 iki 6")
pasirinktasPersonazas = personazas[eilesNumeris - 1]
console.log("Pasirinktas personažas:" + pasirinktasPersonazas)


// Antra užduotis

// Išsaugokite įvestus skaičius į skaiciuMasyvas
// Atspausdinkite tokį rezultatą:

// Skaičių suma: x
// Skaičių vidurkis: x
// Didžiausias skaičius: x
// Mažiausias skaičius: x
// P.S.
// Kad surasti sumą - panaudokite for / while ciklą. To pačio ciklo viduje taip pat galite ieškoti didžiausio/mažiausio skaičiaus ir jį saugoti.
var skaiciuMasyvas = []
