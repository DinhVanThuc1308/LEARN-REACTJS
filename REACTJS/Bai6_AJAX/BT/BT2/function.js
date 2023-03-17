const Menu = document.querySelector(".menu");

ListFood = [];
API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

function getAPI() {
  axios.get(API).then((res) => {
    ListFood = res.data;
    console.log(ListFood);
    render();
  });
}
getAPI();
function render() {
  const ElementFood = ListFood.meals;
  const foodElement = ElementFood.map((food) => {
    return `
        
        <li>
            <a href="#"><div class="image">
                <img  src="${food.strMealThumb}" alt="">
            </div>
            <div class="lable">
                <p>${food.strMeal}</p>
            </div>

            </a>
        </li>
        <hr>
        `;
  });
  Menu.innerHTML = foodElement.join("");
}
