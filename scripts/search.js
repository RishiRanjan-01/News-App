// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { cSearch, append } from "./fetch.js"

let prevsearch = localStorage.getItem("query")
let prevresult = await cSearch(`https://masai-mock-api.herokuapp.com/news?q=${prevsearch}`);
let container = document.getElementById("results");
append(prevresult.articles,container)




let InputSearch = async(e)=>{
    let query = document.getElementById("search_input").value 
    if(e.key == "Enter"){
        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
        let data = await cSearch(url);
        let container = document.getElementById("results");
        append(data.articles,container)
    }
}

document.getElementById("search_input").addEventListener("keydown",InputSearch)