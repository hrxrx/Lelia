////////////  3 arrows func 

let dainos = ['Angels World', 'Pukuciu', 'Fine', 'Another dimension', 'This cannot continue']
console.log(dainos)

console.log(dainos[3]) // rosh 4 itema ish masyvo

console.log(dainos.length) //rodom kiek yra index

dainos.push('Junior') // imetam dar daina Junior io gala
console.log(dainos)

dainos.pop('Fine') // extract an item from the end
console.log(dainos)

dainos.shift('Pukuciu') // extract from the beggining
console.log(dainos)

dainos.unshift('Love') // adds itemns to the beggining
console.log(dainos)

dainos.splice(3, 4, 'Mists and Butterflies') // i kokia pozicija deedam, koki index istrinam, ka idedam
console.log(dainos)



dainos.forEach((item, index)=>{ // local kintamasis, local variable
    console.log(index+1, item) // pradedam nuo vieneto skaiciuot
})

/////////////////////////////// 2nd  

let f_name = "Angel";
let salary = 1000000000000;

function yearSalary(kas, alga){
    let suma = alga * 12;

console.log(`Person - ${kas} . Your yearly income is ${suma}`)
}

yearSalary(f_name, salary)

// ~~~~~~~~~~~~~///

function pasisveikinimas(a) {
    console.log("labutis "+a);
}

pasisveikinimas (f_name); 

// ~~~~~~~ //

let price = 1.11;
let quantity = 1;

function skaiciavimai(kiekio, kainu){
    let moketina_suma = kiekio * kainu;
    return moketina_suma;
    }
console.log(skaiciavimai(quantity, price));

// ~~~~~~~ //global

function pasisveikinimas() {
    console.log(f_name);
}
pasisveikinimas();

// ~~~~~ //local

function labas(){
    let vardas = "YourName";
}
labas();
    //console.log(vardas);


    //~~~//


function auto(){
    let carName = "Mercedess";
    return carName;
}
console.log(auto());

///////`~~~~~~~~~~~~~~~~/.//////////// 1st 
///

let fname = " Angel";
let role = " Chill";

console.log(fname);
console.log("My life calling is to chill"+fname);

console.log(`My name is ${fname} my life calling is ${role}`);


let price = 7.20;
let quantity = 6;
let sum = price*quantity;
console.log(sum);

let mistake;
console.log(mistake);

let happy = true;
console.log(happy);

console.log(typeof fname);
console.log(typeof sum);
console.log(typeof mistake);
console.log(typeof happy);


console.log(isNaN(price));

// ~~~~~~~~~~~~~~~~~~~~~new~~~~~~~~~~~~~~~~~~~~

let vidurkis = 8.1;
let lankomumas =  true;

if(vidurkis>=8.5 && lankomumas) {

    console.log(`Jusu vidurkis yra $(vidurkis) ir lankomumas geras. todel esate mldc`)

} else {console.log("deja, ne")}

let vardas = "Miau";
let online = false;

if(online) {
    console.log(`Hello $(vardas)`)
} else {console.log('Hello Guest')}

// ~~~~~~~~~~~~~~~~~~~~~new~~~~~~~~~~~~~~~~~~~~

let pazymys = 22;

switch (pazymys) {
    case 1:
    case 2:
    case 3:
        console.log( pazymys+' Neigiamai')
        break;
    case 4:
    case 5:
        console.log( pazymys+' Teigiamai, bet reikia stengtis')
        break;
    case 6:
    case 7:
        console.log( pazymys+' Vidutinis lygis, ar tau to gana?')
        break;
    case 8:
    case 9:
        console.log( pazymys+' Pasidziauk savimi')
        break;
    case 10:
        console.log( pazymys+' Super')
        break;
    default:
        console.log("paleva")

    }

    // ~~~~~~~~~~~~~~~~~~~~~new~~~~~~~~~~~~~~~~~~~~


//paleva diena...

//isimti  pasikartojancius daitus is saraso
let daigtai = ['kamuolys', 'saltibarsciai', 'bubblegum', 'puodukas', 'telefonas', 'rankenukas', 'kamuolys', 'saltibarsciai', 'ausines']
console.log(daigtai);

let atrinkti = []
daigtai.map(item => {
    if (atrinkti.indexOf(item) === -1 ) {   
    atrinkti.push(item);  }
    });

console.log(atrinkti);

//masyvai
let savaites_dienos = ["pirmadienis", "antradienis", "treciadienis", "ketvirtadienis"]
console.log(savaites_dienos)
console.log(`savaites_dienos ilgis ${savaites_dienos.length}`);


//naujas narys gale
savaites_dienos.push("penktadienis"); //
console.log('pakeistas masyvas ${savaites_dienos}');


//filter method
let atrinkta_diena = savaites_dienos.filter( diena => diena == "penktadienis");
console.log(atrinkta_diena);


//dvieju dimensiju masyvai
let klasiokai = [
  ["Jolita", "JS20", 100, 8.9], 
  ["Tomas", "JS22", 28, 9.5],
];
console.log(klasiokai[0][3]);

//objektai
let zmogus = {
  vardas: "Jolita",
  grupe: "JS20",
  amzius: 100,
  vidurkis: 8.9
}
console.log(zmogus.vardas);

//kompleksine duomenu struktura masyve objektai
let mokiniai =[
  {
  vardas: "Jolita",
  grupe: "JS20",
  amzius: 100,
  vidurkis: 8.9
  },
  {
  vardas: "Tomas",
  grupe: "JS22",
  amzius: 28,
  vidurkis: 9.5
  },
  
]
console.log(mokiniai[1].vardas);


//loopinimo metodai, iteravivas
console.log("foreach'inu masyva: ");
savaites_dienos.forEach(
    (gabaliukas, index)=>{
        console.log(`foreach'inu masyva: ${index+1} ${gabaliukas} `);
    }
);

mokiniai.forEach((item)=>{
    console.log(item.vardas)
});



//paleva diena baigti...















