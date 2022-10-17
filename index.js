
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
      question: "Qui est la première femme à recevoir un prix Nobel ?",
      answer: "Marie Curie",
    },
    {
      level: "facile",
      question: "Quelle est la capitale de la Grèce ?",
      answer: "Athènes",
    },
    {
      level: "facile",
      question: "Quel est le jeux-vidéo le plus vendu au monde ?",
      answer: "Minecraft",
    },
    {
      level: "facile",
      question: "Quelle pièce est absolument à protéger dans un jeu d’échec ?",
      answer: "Le roi",
    },
    {
      level: "facile",
      question: "Combien de nouvelles chaînes sont apparus grâce à la TNT ?",
      answer: "12",
    },
    {
      level: "facile",
      question: "Quelle année a suivi l’an 1 avant JC ?",
      answer: "L’an 1 après JC",
    },
    {
      level: "facile",
      question: "En quelle année est sorti le premier Call Of Duty ?",
      answer: "2003",
    },
    {
      level: "facile",
      question: "Quelle ville est surnommée la grande pomme ?",
      answer: "New York",
    },
    {
      level: "facile",
      question: "De combien de syllabes est composé un alexandrin ?",
      answer: "12",
    },
    {
      level: "facile",
      question: "Quel joueur de football apparaît le plus sur les couvertures des jeux Fifa ?",
      answer: "Wayne Rooney",
    },
    {
      level: "facile",
      question: "Quelle est la capitale des États-Unis ?",
      answer: "Washington",
    },
    {
      level: "facile",
      question: "De quelle région Bordeaux est-elle le chef lieu ?",
      answer: "Nouvelle-Aquitaine",
    },
    {
      level: "facile",
      question: "Qui interprète le rôle de Michael Corleone dans Le Parrain ?",
      answer: "Al Pacino",
    },
    {
      level: "facile",
      question: "Quelle est la capitale de l'Allemagne ?",
      answer: "Berlin",
    },
    {
      level: "facile",
      question: "Quel pays a remporté la coupe du monde de Football en 2010 ?",
      answer: "Espagne",
    },
    {
      level: "moyen",
      question: "Quelle est la capitale du Canada ?",
      answer: "Ottawa",
    },
    {
      level: "moyen",
      question: "De quels gaz est principalement composé l'atmosphère ?",
      answer: "D'azote et d'oxygène",
    },
    {
      level: "moyen",
      question: "Quel animal est le prédateur des cobras ?",
      answer: "La mangouste",
    },
    {
      level: "moyen",
      question: "Qui a peint le plafond de la chapelle Sixtine à Rome ?",
      answer: "Michel-Ange",
    },
    {
      level: "moyen",
      question: "Que s’est-il passé le 20 juillet 1969 ?",
      answer: "Neil Armstrong pose le pied sur la Lune",
    },
    {
      level: "moyen",
      question: "Comment s'appelle le colocataire de Sheldon dans la série The Big Bang Theory ?",
      answer: "Leonard Hofstadter",
    },
    {
      level: "moyen",
      question: "Depuis quelle année une femme est libre de travailler sans l'accord de son mari ?",
      answer: "1965",
    },
    {
      level: "moyen",
      question: "Qui a réalisé le film Les Dents de la mer ?",
      answer: "Steven Spielberg",
    },
    {
      level: "moyen",
      question: "En quelle année a eu lieu la chute du mur de Berlin ?",
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
      question: "De quel département la ville de Marseille fait-elle parti?",
      answer: "Bouches-du-Rhône",
    },
    {
      level: "moyen",
      question: "En quelle année est sorti Alien, le huitième passager ?",
      answer: "1979",
    },
    {
      level: "moyen",
      question: "En quelle année est décédé Michael Jackson ?",
      answer: "2009",
    },
    {
      level: "moyen",
      question: "Quel artiste surnomme-t-on le parrain de la soul ?",
      answer: "James Brown",
    },
    {
      level: "moyen",
      question: "Quelle enseigne a développé le jeux-vidéo GTA ?",
      answer: "Rockstar Games",
    },
    {
      level: "moyen",
      question: "Qui était le premier président des États-Unis ?",
      answer: "George Washington",
    },
    {
      level: "moyen",
      question: "Quelle est la capitale de l'Inde ?",
      answer: "New Delhi",
    },
    {
      level: "moyen",
      question: "Combien de Pokémons comptaient la première génération ?",
      answer: "151",
    },
    {
      level: "moyen",
      question: "Dans quel pays se trouve la ville de Cancún ?",
      answer: "Mexique",
    },
    {
      level: "moyen",
      question: "Quel est le prénom de Squeezie ?",
      answer: "Lucas",
    },
    {
      level: "moyen",
      question: "Qui est le plus jeune pilote de F1 à avoir remporté un grand prix ?",
      answer: "Max Verstappen",
    },
    {
      level: "difficile",
      question: "En quelle année le métro de Londres a-t-il été créé ?",
      answer: "1863",
    },
    {
      level: "difficile",
      question: "De quel pays Lima est-elle la capitale ?",
      answer: "Pérou",
    },
    {
      level: "difficile",
      question: "En quelle année est né Emmanuel Macron ?",
      answer: "1977",
    },
    {
      level: "difficile",
      question: "Combien y a-t'il d'utilisateurs d'Internet actifs ?",
      answer: "4,66 milliards",
    },
    {
      level: "difficile",
      question: "Quel Pokémon porte le numéro 1 ?",
      answer: "Bulbizarre",
    },
    {
      level: "difficile",
      question: "En quelle année la NASA a-t-elle annoncé avoir réussi à faire éclore la première fleur dans l’espace ?",
      answer: "2016",
    },
    {
      level: "difficile",
      question: "Quelle était la longueur du Titanic ?",
      answer: "269 m",
    },
    {
      level: "difficile",
      question: "12x12",
      answer: "144",
    },
    {
      level: "difficile",
      question: "Qui a fondé Space X",
      answer: "Elon Musk",
    },
    {
      level: "difficile",
      question: "Qui a composé la musique de la saga Star Wars ?",
      answer: "John Williams",
    },
    {
      level: "difficile",
      question: "Qui a réalisé le film Le Bon, la Brute et le Truand ?",
      answer: "Sergio Leone",
    },
    {
      level: "difficile",
      question: "Qui a fondé la célèbre marque de luxe Gucci ?",
      answer: "Guccio Gucci",
    },
    {
      level: "difficile",
      question: "Que s'est-il passé le 29 avril 1945 ?",
      answer: "Les Françaises votent pour la première fois",
    },
    {
      level: "difficile",
      question: "En combien de temps la Tour Eiffel a-t-elle été construite ?",
      answer: "2 ans",
    },
    {
      level: "difficile",
      question: "Vers quelle période la pyramide de Khéops a-t-elle été construite ?",
      answer: "Vers 2500 avant J.-C.",
    },
    {
      level: "difficile",
      question: "Quel est le tout premier film de Quentin Tarantino ?",
      answer: "Reservoir Dogs",
    },
    {
      level: "difficile",
      question: "Qui a fondé l'Académie Française ?",
      answer: "Le cardinal de Richelieu",
    },
    {
      level: "difficile",
      question: "Combien y a-t-il d'océans sur Terre ?",
      answer: "5",
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
