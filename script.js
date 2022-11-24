import result from "./data.js";


const informacija_is_local_storage = localStorage
console.log(informacija_is_local_storage)


  const katyte = localStorage.getItem("kate");
  console.log(katyte)
  const suniukas = localStorage.getItem("suo");
  console.log(suniukas)
  
//irasyt i local storage
const kate_info = {
    vardas: "Angel",
    kailis: "Baltas"
}

const suo_info = {
    vardas: "Toris",
    kailis: "Pilkas"
}

localStorage.setItem("kate",  JSON.stringify(kate_info))//paversti i string
localStorage.setItem("suo", JSON.stringify(suo_info))
const kate = JSON.parse(localStorage.getItem("kate")) //gaunu duomenis
console.log(kate.kailis)
const suo = JSON.parse(localStorage.getItem("suo")) //gaunu duomenis
console.log(suo.kailis)



//sukurti funkcionaluma,kuris tikrina,
//ar local storage yra tokia reiksme'favourite movies'

function tikrina() {
    const kintamasis_tikrinimui = localStorage.getItem("favourite_movies")
    console.log(kintamasis_tikrinimui);
    if(kintamasis_tikrinimui == null){
        return [];
    } else { 
        return JSON.parse(kintamasis_tikrinimui);
    }
}
console.log(tikrina())

///same but cool
const items = (() => {
    const fieldValue = localStorage.getItem('favourite_movies');
    return fieldValue === null
    ? []
    : JSON.parse(fieldValue);
  })();
//

console.log(result);

//find. randa pati pirma ir stoja

//   items.push({
//       "favourite_movies": s.value,

//   });

//   localStorage.setItem('favourite_movies', JSON.stringify(items));

//   console.log(JSON.parse(localStorage.getItem('favourite_movies')))

  
// console.log('favourite_movies')


//

let opinion = ['miau', 'au', 'cyp', 'moo', 'yhaha'];

for(let thought of opinion) {
    console.log(opinion)
}

for(let i=0; i<opinion.length; i++){
    console.log(` Their opinion on life satisfaction is 
    ${opinion[i]}`);
}


let film = {
    tittle: "I want to stuff my heart with moss",
    metai: "2022",
    duration: "1800",
    genre: "thriller",
    subgenre: {
      1:"art", 
      2:"drama", 
      3:"reality show"}
  }
  for(let savybe in film){
   //console.log(savybe)
    //console.log(film[savybe])
    //console.log(typeof film[savybe]);
  
    if(typeof film[savybe] !== "object"){
      //console.log(savybe  + " : " +film[savybe]);
    } else{
      //console.log(savybe + " yra -> vardinu: ")
       for(let antras in film[savybe]){
         
        //console.log(antras+ " yra " + film[savybe][antras]);
      }
    }
  }


  let kursai = [
      {
          pavadinimas: "JS",
          aprasymas: "Labai lengva programavimo kalba",
          lektorie: "Jolita",
          kaina: 200,
          tag: ["js", "programming", "web"]
      },
      {
          pavadinimas: "SQL",
          aprasymas: "Labai strukturizuota programavimo kalba",
          lektorie: "Dovydas",
          kaina: 100,
          tag: ["sql", "database", "it"]
      },
      {
          pavadinimas: "HTML",
          aprasymas: "Labai lengva programavimo kalba",
          lektorie: "Zigmas",
          kaina: 150,
          tag: ["html", "markup", "webpages"]

      },
      {
          pavadinimas: "Python",
          aprasymas: "Labai zaisminga kalba",
          lektorie: "Boska",
          kaina: 180,
          tag: ["phyton", "object", "opensource"]

      },
  ]
  console.log (kursai)

  for(let item of kursai){
      console.log(item);
      for(let second_loop in item){
          console.log(second_loop);
          console.log();
          console.log(` Savybe: ${[]} Reiksme: ${[]}`);
      }
  }

//for in

let kurseliai = [
    {
        pavadinimas: "JS",
        aprasymas: "Labai lengva programavimo kalba",
        lektorie: "Jolita",
        kaina: {
            akcija: 200,
            pilna: 300,
            sutaupai: 100,
        },
        tag: ["js", "programming", "web"]
    },
    {
        pavadinimas: "SQL",
        aprasymas: "Labai strukturizuota programavimo kalba",
        lektorie: "Dovydas",
        kaina: {
            akcija: 200,
            pilna: 300,
            sutaupai: 100,
        },
        tag: ["sql", "database", "it"]
    },
    {
        pavadinimas: "HTML",
        aprasymas: "Labai lengva programavimo kalba",
        lektorie: "Zigmas",
        kaina: {
            akcija: 200,
            pilna: 300,
            sutaupai: 100,
        },       
        tag: ["html", "markup", "webpages"]

    },
    {
        pavadinimas: "Python",
        aprasymas: "Labai zaisminga kalba",
        lektorie: "Boska",
        kaina: {
            akcija: 200,
            pilna: 300,
            sutaupai: 100,
        },       
        tag: ["phyton", "object", "opensource"]

    },
]



  for(let i=0; i<kurseliai.length; i++){
      //console.log(kurseliai[i]);
      for(let item in kurseliai[i]){
          console.log(item + " "+ [kurseliai][item]);
      }
  }

  


  


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



// let courses = [
//     {
//         pavadinimas: "JS",
//         aprasymas: "labai lengva programavimo kalba",
//         lektorius: "Jolita",
//         kaina: {
//             akcijai: 50,
//             pagrindine: 100,
//             galutine: 30
//         },
//         tag: ["js", "programing", "web"]
//     },
//     {
//         pavadinimas: "SQL",
//         aprasymas: "strukturizuota database kalba",
//         lektorius: "Dovydas",
//         kaina: {
//             akcijai: 20,
//             pagrindine: 80,
//             galutine: 10
//         },
//         tag: ["sql", "database", "it"]
//     },
//     {
//         pavadinimas: "HTML",
//         aprasymas: "ne programavimo kalba",
//         lektorius: "Zigmas",
//         kaina: {
//             akcijai: 19.99,
//             pagrindine: 89.99,
//             galutine: 9.99
//         },
//         tag: ["html", "markup", "webpages"]
//     },
// ]

// for (i in courses) {
  
// }


// for (let pavadinimas in courses) {
//     //console.log(courses);
//     for(html in pavadinimas){
//         //console.log(courses)

//     }
// }




// for (i in courses) {
//     //console.log(courses[i])
// }
//     for (j in courses[i]) {
//         console.log(courses[i][j])};
//         console.log('*****************************************')
//         if (!Array.isArray(courses[i][j]) && typeof courses[i][j] === "object") {
//             console.log(`Vardinu knygas ${j}s`);
            
//             //console.log(courses[i][j])


            
//            for(a in [i][j]) {
//             console.log(`${a} ${courses[i][j][a]}`);
//             }
//         } else if (Array.isArray(courses[i][j])) {
//             for (a in courses[i][j]) {
//                 console.log(`${a} ${courses[i][j][a]}`);
//             }


//         }
//         410
        
        
//        /////// ){
//       ///////////  } else if (typeOf courses[i][j] === "object") {
//       //////      console.log(courses[i][j])
//        /////// }
//     //////}
// //////}



// let duomenys ={
//     "id": "0001",
//     "type": "donut",
//     "name": "Cake",
//     "ppu": 0.55,								
//     "topping":
//         [
//             { "id": "5001", "type": "None" },
//             { "id": "5002", "type": "Glazed" },
//             { "id": "5005", "type": "Sugar" },
//             { "id": "5007", "type": "Powdered Sugar" },
//             { "id": "5006", "type": "Chocolate with Sprinkles" },
//             { "id": "5003", "type": "Chocolate" },
//             { "id": "5004", "type": "Maple" }
//         ]
// }



// for (let i in duomenys){
//         //console.log(i);
//         //console.log(duomenys[i]);
//     if(!Array.isArray(duomenys[i])){
//         console.log(` ${i}: ${duomenys[i]}`);
//         } else {
//     for (let j in duomenys[i]){
//         console.log(` ${i}: `); 
//     for (let k in duomenys[i][j]){
//         console.log(` ${k} ${duomenys[i][j][k]}`);
//         //console.log(k); 
//                 }
//             }
//         }
//     }      


const data = {
        0: {section: 'theater', subsection: '', title: 'Review: ‘Morning’s at Seven’ Awakens Again, Only to Hit Snooze', abstract: 'Paul Osborn’s 1930s play is revived, with its thin… somewhat bitter slice of small town life intact.', url: 'https://www.nytimes.com/2021/11/15/theater/mornings-at-seven-review.html'},
        1: {section: 'arts', subsection: '', title: 'The Art of Botox', abstract: 'How facial muscle paralysis insinuated itself into our emotional and creative lives.', url: 'https://www.nytimes.com/2021/11/15/arts/botox.html'},
        2: {section: 'arts', subsection: 'music', title: 'Taylor Swift’s ‘All Too Well’ and the Weaponization of Memory', abstract: 'The new 10-minute version of a bitter breakup song…power imbalance in the relationship it describes.', url: 'https://www.nytimes.com/2021/11/15/arts/music/taylor-swift-all-too-well.html'},
        3: {section: 'arts', subsection: 'design', title: 'Blue-Chip Art From Bitter Macklowe Divorce Brings $676 Million at Sotheby’s', abstract: 'A Sotheby’s executive called the court-ordered sal… most valuable single-owner auction ever staged.”', url: 'https://www.nytimes.com/2021/11/15/arts/design/sothebys-macklowe-auction-rothko-warhol.html'},
        4: {section: 'arts', subsection: 'music', title: 'If Remote Work Empties Downtowns, Can Theaters Fill Their Seats?', abstract: 'Since the pandemic, San Francisco has embraced wor…g if weeknight audiences are a thing of the past.', url: 'https://www.nytimes.com/2021/11/15/arts/music/san-francisco-theaters-concert-halls.html'},
        5: {section: 'arts', subsection: 'dance', title: 'Twyla Tharp: ‘Each One of the Dances Is My Hope for a Perfect World’', abstract: 'In “Twyla Now,” a program of works featuring balle…y Center, Tharp merges the past with the present.', url: 'https://www.nytimes.com/2021/11/15/arts/dance/twyla-tharp-twyla-now.html'},
        6: {section: 'arts', subsection: 'television', title: '‘The Sex Lives of College Girls’ Pursues an Awkward Education', abstract: 'The young stars of this new HBO Max comedy, cocrea…fication and messiness of undergraduate intimacy.', url: 'https://www.nytimes.com/2021/11/15/arts/television/the-sex-lives-of-college-girls.html'},
        7: {section: 'arts', subsection: 'music', title: 'Filings Show Continuing Battle Over Britney Spears’s Finances', abstract: 'New court documents reveal a heated exchange betwe…rs and the former business manager of her estate.', url: 'https://www.nytimes.com/2021/11/15/arts/music/britney-spears-conservatorship-filings.html'},
        8: {section: 'arts', subsection: 'television', title: 'First Asian American Muppet Arrives on ‘Sesame Street’', abstract: 'Ji-Young, a guitar-playing Korean American charact…ing children’s show starting on Thanksgiving Day.', url: 'https://www.nytimes.com/2021/11/15/arts/television/new-sesame-street-character-ji-young.html'},
        9: {section: 'theater', subsection: '', title: 'Jeanna de Waal Has Already Forgotten About That ‘Diana’ Film', abstract: 'The Netflix version of Broadway’s “Diana, the Musi…tress is staying positive ahead of opening night.', url: 'https://www.nytimes.com/2021/11/16/theater/jeanna-de-waal-diana-broadway.html'},
        10: {section: 'arts', subsection: 'music', title: 'Latin Grammys 2021: Complete Nominees List', abstract: 'Here are the nominees for the 22nd annual ceremony.', url: 'https://www.nytimes.com/2021/11/16/arts/music/latin-grammys-nominees-list.html'},
        11: {section: 'books', subsection: 'review', title: 'Neal Stephenson’s Mad, Mad, Mad, Mad World', abstract: '“Termination Shock,” his latest novel, is set in a…one haywire from the impacts of climate disaster.', url: 'https://www.nytimes.com/2021/11/16/books/review/neal-stephenson-termination-shock.html'},
        12: {section: 'books', subsection: 'review', title: 'The True-Life Inspiration for Dostoyevsky’s Famous Murderer', abstract: 'The model for Raskolnikov, the tortured killer in …trait of Dostoyevsky and the making of the novel.', url: 'https://www.nytimes.com/2021/11/16/books/review/the-sinner-and-the-saint-kevin-birmingham.html'},
        13: {section: 'books', subsection: 'review', title: 'The Cutting Mind and Romantic Heart of Elizabeth Hardwick', abstract: '“A Splendid Intelligence,” by Cathy Curtis, is the…iography of the much admired critic and novelist.', url: 'https://www.nytimes.com/2021/11/16/books/review/ca…-intelligence-the-life-of-elizabeth-hardwick.html'},
        14: {section: 'books', subsection: 'review', title: 'Seven Immigrant Women Who Changed the Way Americans Eat', abstract: '“Taste Makers,” by Mayukh Sen, features women who,…Americans to the dishes of their native cultures.', url: 'https://www.nytimes.com/2021/11/16/books/review/taste-makers-mayukh-sen.html'},
        15: {section: 'books', subsection: 'review', title: 'Bildungsromans From Around the World', abstract: 'New fiction by Elif Shafak, S.J. Sindu and Bisi Adjapon.', url: 'https://www.nytimes.com/2021/11/16/books/review/bl…apon-the-island-of-missing-trees-elif-shafak.html'},
        16: {section: 'books', subsection: 'review', title: 'How the Greek Revolution of 1821 Led to the Global System of Nation-States', abstract: 'Mark Mazower’s “The Greek Revolution” examines a c…ry-old event that continues to reverberate today.', url: 'https://www.nytimes.com/2021/11/16/books/review/the-greek-revolution-mark-mazower.html'},
        17: {section: 'books', subsection: 'review', title: 'A Debut Novel Where Small Moments Add Up to Something Big', abstract: 'In “A Little Hope,” Ethan Joella explores quiet lives in small-town Connecticut.', url: 'https://www.nytimes.com/2021/11/16/books/review/a-little-hope-ethan-joella.html'},
        18: {section: 'books', subsection: '', title: 'In Another Trump Book, a Journalist’s Belated Awareness Steals the Show', abstract: '“Betrayal,” by Jonathan Karl, is a record of Trump…e House correspondent’s attempt to understand it.', url: 'https://www.nytimes.com/2021/11/16/books/review-betrayal-final-act-trump-show-jonathan-karl.html'},
        19: {section: 'arts', subsection: 'television', title: 'Seth Meyers: Steve Bannon Fancies Himself to Be Logan Roy', abstract: 'Meyers said Bannon was more like “a coked-up flunk…red some documents and accidentally screw it up.”', url: 'https://www.nytimes.com/2021/11/16/arts/television…steve-bannon-fancies-himself-to-be-logan-roy.html'},
        20: {section: 'arts', subsection: 'music', title: 'Terence Wilson, Key Part of Reggae Band UB40, Dies at 64', abstract: 'As Astro with a popular racially diverse British g… he added rap vocals to hits like “Red Red Wine.”', url: 'https://www.nytimes.com/2021/11/15/arts/music/terence-wilson-astro-dead.html'},
        21: {section: 'books', subsection: '', title: 'Let’s Tackle Your Book Shopping List', abstract: 'There’s no doubt that books can make for the most …he perfect one can be nerve-racking. Let us help.', url: 'https://www.nytimes.com/interactive/2021/11/15/books/books-to-give.html'},
        22: {section: 'books', subsection: '', title: '‘Medusa’s Ankles,’ a Selection of A.S. Byatt’s Wildly Imagined Stories Across Three Decades', abstract: 'Byatt has been an articulate advocate for tapping …ories tend to stay in realms of thinner altitude.', url: 'https://www.nytimes.com/2021/11/15/books/review-medusas-ankles-a-s-byatt.html'}
        }




console.log(data);

for (let i in data){
    //console.log(i);
    for (let j in data[i]){
        //console.log(j);
        for (let k in data[i][j]){
        //console.log(k);
        for (let l in data [i][j][k]){
            console.log(l);
        }
        }
    }
}

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















