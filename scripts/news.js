// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let newsConatainer = document.getElementById("detailed_news")

let data = JSON.parse(localStorage.getItem("news"));

let title = document.createElement("h3");
title.innerText = data.title;

let image = document.createElement("img");

image.src = data.urlToImage;

let para = document.createElement("p");
para.innerText = data.content;


newsConatainer.append(image,title,para);



let InputSearch = (e)=>{
    let query = document.getElementById("search_input").value
    if(e.key == "Enter"){
        localStorage.setItem("query",query);
        window.location.href="search.html"

    }
}

document.getElementById("search_input").addEventListener("keydown",InputSearch)

