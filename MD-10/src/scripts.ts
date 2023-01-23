import { Notes } from "./type";
import axios from 'axios';


const add = document.querySelector(".add");
const grid = document.querySelector(".display");

add.addEventListener("click", () =>{
    axios.post<Notes>('http://localhost:3004/notes', {
        title: document.querySelector<HTMLInputElement>(".add__title").value,
        text: document.querySelector<HTMLInputElement>(".add__text").value,
        img: "https://picsum.photos/300"
    }).then((el) => {
        loadNew(el.data);
        document.querySelector<HTMLInputElement>(".add__title").value = "";
        document.querySelector<HTMLInputElement>(".add__text").value ="";
    });
});

const load = () =>{axios.get<Notes[]>('http://localhost:3004/notes').then(({ data }) => {
    data.forEach((el)=>{
      grid.innerHTML += 
          `<div class="card">
              <img src="${el.img}"/>
              <span class="text__wrapper">
                  <h2>
                      ${el.title}
                  </h2>
                  <p>
                      ${el.text}
                  </p>
              </span>
              <span class="button__wrapper" id="${el.id}">
                <a class="anchor__btn editBtn" href="#edit">Edit</a>
                <button class="btn deleteBtn">Delete</button>
              </span>
          </div>
          `
      });
  });}

const reload = () =>{
    grid.innerHTML = "";
    load();
};

const loadNew = (el: Notes) =>{
    grid.innerHTML += 
        `<div class="card">
            <img src="${el.img}"/>
            <span class="text__wrapper">
                <h2>
                    ${el.title}
                </h2>
                <p>
                    ${el.text}
                </p>
            </span>
            <span class="button__wrapper" id="${el.id}">
                <a class="anchor__btn editBtn" href="#edit">Edit</a>
                <button class="btn deleteBtn">Delete</button>
            </span>
        </div>
        `
};

document.body.addEventListener( 'click', function ( event ) {
    if((<HTMLButtonElement>event.target).classList.contains('deleteBtn')){
        console.log((<HTMLButtonElement>event.target).parentElement.id);
        axios.delete<Notes>(`http://localhost:3004/notes/${(<HTMLButtonElement>event.target).parentElement.id}`).then(({ data }) => {
            reload();
        });
    }

    if((<HTMLButtonElement>event.target).classList.contains('editBtn')){
        let id = (<HTMLButtonElement>event.target).parentElement.id;
        document.body.addEventListener( 'click', function ( event ) {
            if((<HTMLAnchorElement>event.target).classList.contains('edit__Btn')){
                console.log(id);
                axios.put<Notes>(`http://localhost:3004/notes/${id}`,{
                    title: document.querySelector<HTMLInputElement>(".edit__title").value,
                    text: document.querySelector<HTMLInputElement>(".edit__text").value,
                    img: "https://picsum.photos/300"
                }).then(() => {
                    id="";
                    reload();
                    document.querySelector<HTMLInputElement>(".edit__title").value = "";
                    document.querySelector<HTMLInputElement>(".edit__text").value ="";
                });
            };
        });
    }
});

load();