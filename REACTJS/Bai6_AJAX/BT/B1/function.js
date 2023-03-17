const Listpkm = document.querySelector(".list-pkm");
const btnBack = document.querySelector("#btn-back");
const btnNext = document.querySelector("#btn-next");
const imageList = document.querySelector(".image");

API = "https://pokeapi.co/api/v2/pokemon/";
listPokemon = [];
let limit = 20;
let page = 1;

function getAPI() {
  axios.get(`${API}?limit=${limit}&offset=${page}`).then((res) => {
    listPokemon = res.data;
    console.log(listPokemon);
    render();
  });
}
getAPI({
  limit: limit,
  page: page,
});

btnBack.addEventListener("click", handleBack);
btnNext.addEventListener("click", handleNext);

function handleNext() {
  if (page == 4) return;
  page++;
  getAPI((limit = limit), (page = page));
}

function handleBack() {
  if (page == 1) return;
  page = page - 1;
  getAPI({
    limit: limit,
    page: page,
  });
}

function render() {
  const ElementPokemon = listPokemon.results;
  const pokeElement = ElementPokemon.map((pokemon) => {
    return `
        <li class="item">
          <a href="#" data-url="${pokemon.url}">${pokemon.name}</a>
        </li>
      `;
  });
  Listpkm.innerHTML = pokeElement.join("");

  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const url = item.querySelector("a").dataset.url;
      showImage(url);
    });
  });
}

function showImage(url) {
  axios.get(url).then((res) => {
    const pokemon = res.data;
    const img = `<img src="${pokemon.sprites.front_default}" />`;
    imageList.innerHTML = img;
  });
}
