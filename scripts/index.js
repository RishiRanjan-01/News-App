// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { sidebar } from "../components/sidebar.js";

document.getElementById ("sidebar").innerHTML = sidebar();

import { cSearch, append } from "./fetch.js"

let country = document.getElementById("sidebar").children;

let IndiaNews = await cSearch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
let container = document.getElementById("results");
append(IndiaNews.articles,container);

async function search(){
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
    let data = await cSearch(url);
    console.log(data);

    let container = document.getElementById("results");

    append(data.articles,container);
}

for(let el of country ){
    el.addEventListener("click",search)
}



let InputSearch = (e)=>{
    let query = document.getElementById("search_input").value
    if(e.key == "Enter"){
        localStorage.setItem("query",query);
        window.location.href="search.html"

    }
}

document.getElementById("search_input").addEventListener("keydown",InputSearch)

