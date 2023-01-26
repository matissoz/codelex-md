import axios from 'axios';
import { apiURL, Country, asc, desc, tableHeaderClass, filterSearch, tHeadSymbAscDesc } from './constants';


const tbody = document.querySelector('tbody');
const tableNav  = document.querySelector<HTMLSpanElement>(".table__navigation");
const tableNumNav  = document.querySelector<HTMLSpanElement>(".table__numbers--nav");
const tableHeaders  = document.querySelector<HTMLTableRowElement>(".table__headers");
const filterSearchBtn = document.querySelector<HTMLButtonElement>(".filter__search");
const filterSearchInputs = document.querySelectorAll<HTMLButtonElement>(".input");
const filterClearBtn = document.querySelector<HTMLButtonElement>(".filter__clear");
const tHeadSymb = document.querySelectorAll<HTMLButtonElement>(".t__headers--symbol");



let URL: string;
let pageLinkArr:string[] = [];
let tableSortCurrentLink: string ="";
let apiPageLength: number;
let currentPage: number = 0;
let currentPageElement: HTMLAnchorElement;
let filterSearchLink: string;
let currentHeaderElement: HTMLSpanElement;




axios.get<Country[]>(apiURL).then(({ data }) => {
    apiPageLength = Math.ceil(data.length/20);

    for(let i = 1 ; i < apiPageLength+1; i++) {
        pageLinkArr.push(`_page=${i}&_limit=20`)
        loadTableNav(i);
    }

    showCurrentPage(0);
    URL = `${apiURL}${pageLinkArr[currentPage]}`;

    if(pageLinkArr.length == apiPageLength) {
        console.log(URL)
        load(URL)
        tableNav.addEventListener("click", pageManipulation);      
        tableHeaders.addEventListener("click", tableHeaderManipulation);
        filterSearchBtn.addEventListener('click', filterSearchManipulation);
        filterClearBtn.addEventListener("click", clearFilterSearch);
    }
});



const load = ((URL: string) => {
    axios.get<Country[]>(`${URL}`).then(({ data }) => {
        tbody.innerHTML = "";
        data.forEach((el)=>{
        tbody.innerHTML += 
            `<tr>
            <td>${el.name}</td>
            <td>${el.capital}</td>
            <td>${el.currency.name}</td>
            <td>${el.language.name}</td>
            </tr>
            `
        });
    });
});


const loadTableNav = ((pageNum: number) => {
    tableNumNav.innerHTML += 
        `
        <a class="page__number" id="${pageNum}">${pageNum}</a>
        `
});


const pageManipulation = ((e: Event) =>{ //e:Event laikam kkas nav
    let target = (<HTMLAnchorElement>e.target)

    if(target.classList.contains("page__number")){
        let targetID = parseInt(target.id) - 1;
        currentPage = targetID;
    }   

    if(target.classList.contains("previous__page")){
        if(currentPage > 0){
            currentPage -= 1;
        };
    }
      
    if(target.classList.contains("next__page")){
        if(currentPage < apiPageLength-1){
            currentPage += 1;
        };
    }


    if(tableSortCurrentLink == "" && filterSearchLink == ""){
        URL = `${apiURL}${pageLinkArr[currentPage]}`;
    }else{
        URL = `${apiURL}${pageLinkArr[currentPage]}${tableSortCurrentLink}${filterSearchLink}`
    }

    showCurrentPage(currentPage);
    load(URL)
});


const tableHeaderManipulation = ((e:Event) => {
    const target = (<HTMLAnchorElement>e.target);

    if(tableHeaderClass.some((className) => target.classList.contains(className))){

        const ascLink = asc[0]+target.id+asc[1];
        const descLink = desc[0]+target.id+desc[1];
        showCurrentHeader(target);

        if(tableSortCurrentLink == ascLink){
            tableSortCurrentLink = descLink;
        }else{
            tableSortCurrentLink = ascLink;
        };
    }

    currentPage = 0;

    if(filterSearchLink == undefined){
        URL = `${apiURL}${pageLinkArr[currentPage]}${tableSortCurrentLink}`;
    }else{
        URL = `${apiURL}${pageLinkArr[currentPage]}${tableSortCurrentLink}${filterSearchLink}`;
    }

    showCurrentPage(currentPage);
    load(URL)
})


const filterSearchManipulation = (()=>{   
    let inputElementLinks:string[] = [];

    filterSearchInputs.forEach((el)=>{
        if(el.value != ""){
            inputElementLinks
                .push("&"+el.parentElement.classList[0]+filterSearch+el.value);
        }
    })


    filterClearBtn.setAttribute('style', "display: flex;");
    currentPage = 0;
    filterSearchLink = inputElementLinks.join("");
    URL = `${apiURL}${pageLinkArr[currentPage]}${tableSortCurrentLink}${filterSearchLink}`;

    resetShowCurrentHeader();
    showCurrentPage(currentPage);
    load(URL)
    console.log(URL)
})


const clearFilterSearch = (() =>{
    filterSearchLink = "";
    filterClearBtn.removeAttribute("style");
    currentPage = 0;
    URL = `${apiURL}${pageLinkArr[currentPage]}${tableSortCurrentLink}${filterSearchLink}`;

    resetShowCurrentHeader();
    showCurrentPage(currentPage);
    load(URL)
});


const showCurrentPage = ((id: number) =>{
    const pages = document.querySelectorAll<HTMLAnchorElement>(".page__number");

    if(currentPageElement != undefined){
        currentPageElement.removeAttribute("style") 
    }
    if(pages != undefined){
        currentPageElement = pages[id];
    }
    
    currentPageElement.setAttribute("style", "font-size: 1.5rem;") 
})



const showCurrentHeader = ((target: HTMLAnchorElement) => {
    const symbol = target.parentElement.lastChild as HTMLSpanElement;
    const symbolClass = symbol.classList;
    const asc = tHeadSymbAscDesc[0]
    const desc = tHeadSymbAscDesc[1]

    if(currentHeaderElement == symbol){
        if(symbolClass.contains(desc)){
            symbolClass.remove(desc);
            symbolClass.add(asc);
            console.log(URL+"  asc")
        }else{
            console.log(URL+"  desc")
            symbolClass.remove(asc)
            symbolClass.add(desc);
        }
    }else{
        if(currentHeaderElement == undefined){
            currentHeaderElement = symbol;
            symbolClass.add(asc)
        }else{
            resetShowCurrentHeader();
            currentHeaderElement = symbol;
            symbolClass.add(asc)
        }
    }

    console.log(currentHeaderElement);
})


const resetShowCurrentHeader = (() =>{
    if(currentHeaderElement != undefined){
        tHeadSymbAscDesc.forEach((symbClass) =>{
            if(currentHeaderElement.classList.contains(symbClass)){
                currentHeaderElement.classList.remove(symbClass);
            }
        })
    }
})