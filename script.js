const houseToRent = [
  {
    name: "Modern flat",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://www.v-immo.fr/wp-content/uploads/sites/84/2022/05/obtenir-maison-reves.jpg",
    available: true,
  },
  {
    name: "Beautiful design house",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: true,
  },
  {
    name: "Beautiful House",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://i.pinimg.com/originals/67/90/dc/6790dc46e5b063c871b0698723acbe98.jpg",
    available: false,
  },
  {
    name: "Wonderful house with Garden",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: false,
  },
  {
    name: "My super Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://realty-luxe.com/wp-content/uploads/2019/04/La-maison-de-vos-r%C3%AAve-piscine.jpg",
    available: false,
  },
  {
    name: "My super Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://realty-luxe.com/wp-content/uploads/2019/04/La-maison-de-vos-r%C3%AAve-piscine.jpg",
    available: false,
  },
];

// On crée une fonction qui va générer nos cards
// Elle prend en paramètre un tableau d'objets contenant les maisons
function createCard(houses) {
  const cards = document.querySelector(".cards");
  // On efface à chaque execution de la fonction les précédentes cards.
  cards.innerHTML = "";

  // On utilise la méthode forEach qui permet de boucler sur un tableau autant de fois qu'il y a d'éléments
  // dans le tableau

  houses.forEach((house) => {
    // Création de la div card
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    // Création de la div card-header
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    // Création de la div card-img
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);
    cardImg.style.backgroundImage = `url('${house.img}')`;

    // Création de la div card-body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    // Création du h2 card-title
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = house.name;
    cardBody.appendChild(cardTitle);

    // Création du p card-description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.innerText = house.desc;
    cardBody.appendChild(cardDescription);

    // Création du button card-button
    const cardButton = document.createElement("button");
    cardButton.type = "button";
    cardButton.classList.add("card-button");
    cardButton.textContent = "I want it";
    cardBody.appendChild(cardButton);
  });
}

// Execution initiale de la fonction avec en argument le tableau de base non filtré
createCard(houseToRent);

// Création d'une fonction qui met à jour la liste des maisons selon les filtres
function updateCards() {
  // On crée un nouveau tableau d'objet sur la base du tableau d'origine.
  // On le remplacera par les éléments filtrés
  let filteredHouse = houseToRent;

  if (availableCheckbox.checked === true) {
    filteredHouse = filteredHouse.filter((house) => house.available);
  }

  if (searchInput.value) {
    filteredHouse = filteredHouse.filter((house) =>
      house.name.includes(searchInput.value)
    );
  }

  if (select.value !== "All") {
    console.log(select.value);
    filteredHouse = filteredHouse.filter(
      (house) => house.type === select.value
    );
  }

  // A la fin de cette fonction on execute la fonction de création de card avec en argument le tableau filtré.
  createCard(filteredHouse);
}

// A chaque fois qu'un evenement se produit sur ces inputs, on execute la fonction qui met à jour les cards.
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", () => updateCards());

const availableCheckbox = document.querySelector(".available-checkbox");
availableCheckbox.addEventListener("change", () => updateCards());

const select = document.querySelector(".select");
select.addEventListener("change", () => updateCards());
