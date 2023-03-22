import axios from "axios";

let Pokemon = []
const API = " https://pokeapi.co/api/v2/pokemon"
async function getPokemon() {
    try{
         await axios.get(API).then((res) =>{
            Pokemon = res.data.results;
        // console.log(Pokemon);
        for(let i = 0; i < Pokemon.length ; i++){
            console.log("Tên của pokemon thứ " + i + " là: " + Pokemon[i].name);
        }
    });
    }catch(err){
        console.log(err);
    }
}
    
    

getPokemon();
    