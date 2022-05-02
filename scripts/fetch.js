
async function cSearch(url){
    try{
        let res = await fetch(url)

        let data = await res.json();
        
        return data;

    }catch(err){
        console.log(err)
    }
}

let append = (data,container)=>{

    container.innerHTML = null;

    data.forEach((el)=>{
       let  div = document.createElement("div");
        div.setAttribute("class","news");

        let textDiv = document.createElement("div")
        let head = document.createElement("h3");
        head.innerText = el.title;

        let des = document.createElement("div");
        des.innerText = el.description;

        textDiv.append(head,des)

        let image = document.createElement("img");
        image.src = el.urlToImage;

        div.append(image,textDiv);
        div.addEventListener("click", ()=>{
            MyFunction(el);
        })

        container.append(div);
    })
}

export { cSearch, append };

let MyFunction = (el)=>{
    localStorage.setItem("news",JSON.stringify(el));
    window.location.href = "news.html";
}