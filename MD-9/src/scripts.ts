import {Char} from "./types";

const getCharacters = (page:number) =>{

    const grid = document.querySelector<HTMLDivElement>(".grid");
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response) => response.json())
        .then((data) => {

            if(page == data.info.pages){
                const load = document.querySelector<HTMLButtonElement>(".load__more")
                load.innerHTML = ("That's all we got")
                load.setAttribute("disabled", "");
            }

            let characters: Char[] = data.results;
            characters.forEach((character) =>{

                if(character.status == "dead"){

                }

                grid.innerHTML +=
                `
                <div class="character__box">
                    <img src="${character.image}" />

                    <span class="text__wrapper">
                        <h2>
                            ${character.name}
                        </h2>

                        <span class="indicator__wrapper">
                            <span class="indicator pulse ${character.status}"></span>
                            <p>
                                ${character.status} - ${character.species}
                            </p>
                        </span>

                        <h3>
                            Last known location:
                        </h3>
                        <p class="txt">
                            ${character.location.name}
                        </p>

                        <h3>
                            First seen in:
                        </h3>
                        <p class="txt">
                            ${character.origin.name}
                        </p>
                    </span>
                </div>
                `
            })
        })
        .catch((err) =>{
            console.log("Page not found", err);
        })
}


document.addEventListener("DOMContentLoaded", function() {
    getCharacters(1)
  });

var i = 2
const load = () =>{
    getCharacters(i++);
}

document.querySelector<HTMLAnchorElement>(".load__more")
    .addEventListener("click", load)