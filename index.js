
document.getElementById("load").addEventListener("click", () => {
  document.querySelector(".register_screen").style.display = "none";
  document.querySelector(".question_screen").style.display = "block";
  pseudo();
});
document.getElementById("next").addEventListener("click", () => {
  document.querySelector(".question_screen").style.display = "none";
  document.querySelector(".answer_screen").style.display = "block";
});
document.getElementById("notok").addEventListener("click", () => {
  document.querySelector(".question_screen").style.display = "block";
  document.querySelector(".answer_screen").style.display = "none";
  nextPseudo();
  moins();
});
document.getElementById("ok").addEventListener("click", () => {
  document.querySelector(".question_screen").style.display = "block";
  document.querySelector(".answer_screen").style.display = "none";
  nextPseudo();
  plus();
});
document.getElementById("reload").addEventListener("click", () => {
  location.reload();
});

//PSEUDO

const pseudo1 = document.getElementById("pseudo1");
const pseudo2 = document.getElementById("pseudo2");
const pseudo3 = document.getElementById("pseudo3");
const pseudo4 = document.getElementById("pseudo4");

const pseudoData = [pseudo1, pseudo2, pseudo3, pseudo4];

let random = 0;

function pseudo() {
  const indexPseudoData = pseudoData[random];
  document.getElementById("player").innerText = indexPseudoData.value;
  loadGame()
}

function nextPseudo() {
  random++;

  if (random < pseudoData.length) {
    pseudo();
  } else {
    random = 0;
    pseudo();
  }

  console.log(random, "a", score[random]);
}

function final() {
  document.querySelector(".question_screen").style.display = "none";
  document.querySelector(".final_screen").style.display = "block";

  if (random > 0) {
    random--;
    finalScreen();
  } else {
    random = pseudoData.length - 1;
    finalScreen();
  }
}

function finalScreen() {
  const indexPseudoData = pseudoData[random];
  document.getElementById("winner").innerText = indexPseudoData.value;
}

//SCORE

const score = [0, 0, 0, 0];

function plus() {
  if (score[random] < 4) {
    score[random]++;
  } else {
    final();
  }
}

function moins() {
  if (score[random] > 0) {
    score[random]--;
  } else {
    score[random] = 0;
  }
  console.log(random, "a", score[random]);
}

//LOAD GAME

const initial_values = [

    {
      level: "facile",
      question: "De quelle ville les Beatles sont-ils originaires ?",
      answer: "Liverpool",
    },
    {
      level: "facile",
      question: "Quelle est la capitale de la France ?",
      answer: "Paris",
    },
    {
      level: "facile",
      question: "Quelle est la capitale de la Gr??ce ?",
      answer: "Ath??nes",
    },
    {
      level: "facile",
      question: "Quel est le jeux-vid??o le plus vendu au monde ?",
      answer: "Minecraft",
    },
    {
      level: "facile",
      question: "Quelle pi??ce doit-on absolument prot??ger dans un jeu d?????chec ?",
      answer: "Le roi",
    },
    {
      level: "facile",
      question: "En quelle ann??e a eu lieu le lancement de la TNT (T??l??vision Num??rique Terrestre) en France m??tropolitaine ?",
      answer: "2005",
    },
    {
      level: "facile",
      question: "De combien de nations le Royaume-Uni est-il constitu?? ?",
      answer: "4",
    },
    {
      level: "facile",
      question: "En quelle ann??e est sorti le premier Call Of Duty ?",
      answer: "2003",
    },
    {
      level: "facile",
      question: "Quelle ville est surnomm??e la grande pomme ?",
      answer: "New York",
    },
    {
      level: "facile",
      question: "De combien de syllabes est compos?? un alexandrin ?",
      answer: "12",
    },
    {
      level: "facile",
      question: "Quel joueur de football appara??t le plus sur les couvertures des jeux Fifa ?",
      answer: "Wayne Rooney",
    },
    {
      level: "facile",
      question: "Quelle est la capitale des ??tats-Unis ?",
      answer: "Washington",
    },
    {
      level: "facile",
      question: "De quelle r??gion Bordeaux est-elle le chef lieu ?",
      answer: "Nouvelle-Aquitaine",
    },
    {
      level: "facile",
      question: "Qui joue le r??le de Michael Corleone dans le film Le Parrain ?",
      answer: "Al Pacino",
    },
    {
      level: "facile",
      question: "Quelle est la capitale de l'Allemagne ?",
      answer: "Berlin",
    },
    {
      level: "facile",
      question: "Quel pays a remport?? la coupe du monde de Football en 2010 ?",
      answer: "Espagne",
    },
    {
      level: "moyen",
      question: "Quelle est la capitale du Canada ?",
      answer: "Ottawa",
    },
    {
      level: "moyen",
      question: "Quel tournoi de tennis pr??cise que les joueurs doivent ??tre habill??s en blanc ?",
      answer: "Wimbledon",
    },
    {
      level: "moyen",
      question: "De quels gaz est principalement compos?? l'atmosph??re ?",
      answer: "D'azote et d'oxyg??ne",
    },
    {
      level: "moyen",
      question: "Quel est le nom du point de l'oc??an le plus ??loign?? de toute terre ??merg??e ?",
      answer: "Le point Nemo",
    },
    {
      level: "moyen",
      question: "En combien d'arrondissements la ville de Paris est-elle divis??e ?",
      answer: "20",
    },
    {
      level: "moyen",
      question: "Qui a peint le plafond de la chapelle Sixtine ?? Rome ?",
      answer: "Michel-Ange",
    },
    {
      level: "moyen",
      question: "Dans quel pays se trouve le Manneken Pis ?",
      answer: "Belgique",
    },
    {
      level: "moyen",
      question: "Que s???est-il pass?? le 20 juillet 1969 ?",
      answer: "Neil Armstrong pose le pied sur la Lune",
    },
    {
      level: "moyen",
      question: "Depuis quelle ann??e une femme est libre de travailler sans l'accord de son mari ?",
      answer: "1965",
    },
    {
      level: "moyen",
      question: "Qui a fond?? la marque de v??tements Off-White ?",
      answer: "Virgil Abloh",
    },
    {
      level: "moyen",
      question: "Qui a r??alis?? le film Les Dents de la mer en 1975 ?",
      answer: "Steven Spielberg",
    },
    {
      level: "moyen",
      question: "Qui a r??alis?? le film Shining en 1980 ?",
      answer: "Stanley Kubrick",
    },
    {
      level: "moyen",
      question: "Qui joue le r??le de Rachel Green dans la s??rie Friends ?",
      answer: "Jennifer Aniston",
    },
    {
      level: "moyen",
      question: "En quelle ann??e a eu lieu la chute du mur de Berlin ?",
      answer: "1989",
    },
    {
      level: "moyen",
      question: "Quelle est la musique la plus populaire du groupe de rock Green Day ?",
      answer: "Boulevard of Broken Dreams",
    },
    {
      level: "moyen",
      question: "Quel est le nom du premier album des Daft Punk ?",
      answer: "Homework",
    },
    {
      level: "moyen",
      question: "De quel collectif new-yorkais ASAP Rocky fait-il parti ?",
      answer: "ASAP Mob",
    },
    {
      level: "moyen",
      question: "Combien y a-t-il d'habitants en France ?",
      answer: "Environ 68 000 000",
    },
    {
      level: "moyen",
      question: "De quel d??partement la ville de Marseille fait-elle parti?",
      answer: "Bouches-du-Rh??ne",
    },
    {
      level: "moyen",
      question: "En quelle ann??e est sorti le film Alien, le huiti??me passager ?",
      answer: "1979",
    },
    {
      level: "moyen",
      question: "En quelle ann??e est d??c??d?? Michael Jackson ?",
      answer: "2009",
    },
    {
      level: "moyen",
      question: "Quel artiste surnomme-t-on le parrain de la soul ?",
      answer: "James Brown",
    },
    {
      level: "moyen",
      question: "Comment s'appelle Voldemort ?",
      answer: "Tom Elvis Jedusor",
    },
    {
      level: "moyen",
      question: "Quelle enseigne a d??velopp?? le jeux-vid??o GTA ?",
      answer: "Rockstar Games",
    },
    {
      level: "moyen",
      question: "Qui ??tait le premier pr??sident des ??tats-Unis ?",
      answer: "George Washington",
    },
    {
      level: "moyen",
      question: "Comment appelle-t-on les habitants de Montcuq ?",
      answer: "Les Montcuquois/Montcuquoises",
    },
    {
      level: "moyen",
      question: "Quelle est la capitale de l'Inde ?",
      answer: "New Delhi",
    },
    {
      level: "moyen",
      question: "Combien de Pok??mons comptaient la premi??re g??n??ration ?",
      answer: "151",
    },
    {
      level: "moyen",
      question: "Dans quel pays se trouve la ville de Canc??n ?",
      answer: "Mexique",
    },
    {
      level: "moyen",
      question: "Quel est le pr??nom de Squeezie ?",
      answer: "Lucas",
    },
    {
      level: "moyen",
      question: "Qui est le plus jeune pilote de F1 ?? avoir remport?? un grand prix ?",
      answer: "Max Verstappen",
    },
    {
      level: "difficile",
      question: "De quel pays Lima est-elle la capitale ?",
      answer: "P??rou",
    },
    {
      level: "difficile",
      question: "De quel pays Doha est-elle la capitale ?",
      answer: "Qatar",
    },
    {
      level: "difficile",
      question: "En quelle ann??e est n?? Emmanuel Macron ?",
      answer: "1977",
    },
    {
      level: "difficile",
      question: "Combien y a-t'il d'utilisateurs d'Internet actifs ?",
      answer: "4,66 milliards",
    },
    {
      level: "difficile",
      question: "Quelle est la distance entre la Terre et la station spatiale internationale ?",
      answer: "408 kilom??tres",
    },
    {
      level: "difficile",
      question: "Quel Pok??mon porte le num??ro 1 ?",
      answer: "Bulbizarre",
    },
    {
      level: "difficile",
      question: "Quelle ??tait la longueur du Titanic ?",
      answer: "269 m",
    },
    {
      level: "difficile",
      question: "Qui a fond?? Space X",
      answer: "Elon Musk",
    },
    {
      level: "difficile",
      question: "Qui a compos?? la musique de la saga Star Wars ?",
      answer: "John Williams",
    },
    {
      level: "difficile",
      question: "Qui a r??alis?? le film Le Bon, la Brute et le Truand en 1966 ?",
      answer: "Sergio Leone",
    },
    {
      level: "difficile",
      question: "Qui a r??alis?? le film Citizen Kane en 1941 ?",
      answer: "Orson Welles",
    },
    {
      level: "difficile",
      question: "Qui a r??alis?? le film Les Temps Modernes en 1936 ?",
      answer: "Charlie Chaplin",
    },
    {
      level: "difficile",
      question: "Qui a fond?? la marque de v??tements Gucci ?",
      answer: "Guccio Gucci",
    },
    {
      level: "difficile",
      question: "Que s'est-il pass?? le 29 avril 1945 ?",
      answer: "Les Fran??aises votent pour la premi??re fois",
    },
    {
      level: "difficile",
      question: "En combien de temps la Tour Eiffel a-t-elle ??t?? construite ?",
      answer: "2 ans",
    },
    {
      level: "difficile",
      question: "Vers quelle p??riode la pyramide de Kh??ops a-t-elle ??t?? construite ?",
      answer: "Vers 2500 avant J.-C.",
    },
    {
      level: "difficile",
      question: "Quel est le nom du premier film de Quentin Tarantino ?",
      answer: "Reservoir Dogs",
    },
    {
      level: "difficile",
      question: "Qui a fond?? l'Acad??mie Fran??aise ?",
      answer: "Le cardinal de Richelieu",
    },
    {
      level: "difficile",
      question: "Qui joue le r??le d'Alouette (Sugar dans la VO) dans le film Certains l'aiment chaud ?",
      answer: "Marilyn Monroe",
    },
    {
      level: "difficile",
      question: "Qui joue le r??le de Randall P. McMurphy dans le film Vol au-dessus d'un nid de coucou ?",
      answer: "Jack Nicholson",
    },
    {
      level: "difficile",
      question: "De quel film provient la r??plique ??On ne laisse pas B??b?? dans un coin?? ?",
      answer: "Dirty Dancing",
    },
    {
      level: "difficile",
      question: "De quel film provient la r??plique ??Dis bonjour ?? mon petit copain!?? ?",
      answer: "Scarface",
    },
    {
      level: "difficile",
      question: "En quelle ann??e la loi concernant la s??paration des ??glises et de l'??tat a-t-elle ??t?? adopt??e ?",
      answer: "1905",
    },
    {
      level: "difficile",
      question: "Combien de temps le match de tennis le plus long de l'histoire a-t-il dur?? ?",
      answer: "11 heures et 5 minutes",
    },
    {
      level: "difficile",
      question: "Quelle est la capitale de la Turquie ?",
      answer: "Ankara",
    }

]

const gameData = [];
gameData.push(...initial_values);

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const levelEl = document.getElementById('level')
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer')

function loadGame() {

    const result = getRandomItem(gameData);
    levelEl.innerText = result.level;
    questionEl.innerText = result.question;
    answerEl.innerText = result.answer;

    const suppr = gameData.indexOf(result);
    gameData.splice(suppr, 1);
    console.log(gameData);
    
    if (gameData.length === 0) {
      gameData.push(...initial_values);
    }
}
