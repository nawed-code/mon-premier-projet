"use strict"
console.log("hi consol");
let formulaire = document.getElementById("formulaire");
formulaire.style.display="none";
document.getElementById("formulaire").addEventListener("submit",Depart);
function Depart(event){
    event.preventDefault();
    let nameValue = document.getElementById("username").value;
    let passValue = document.getElementById("password").value;
    let error = document.getElementById("error");
    if(nameValue =="" || passValue ==""){
        error.textContent="";
        let p = document.createElement("p");
        p.textContent="Le champ est vide";
        p.style.color = "red";
        error.appendChild(p);
        return 
    }
    else{
        error.textContent="";
    }
}

let image = document.getElementById("image");
image.addEventListener("click",Allumer);
function Allumer(event){
    let img= event.currentTarget;
    //console.log(img.src);
    let source = img.getAttribute("src")
    if(source == "image/1.jpeg"){
        //document.getElementById("login").style.display="none";
        document.body.style.backgroundColor="black";
        img.setAttribute("src","image/2.jpeg");
        console.log("2.jpeg ==", img.getAttribute("src"));
        img.style.filter="invert(1)";
        formulaire.style.display="block";
        document.querySelector("#formulaire h3").style.color="white";
        
    }
    else{
        document.body.style.backgroundColor="white";
        img.setAttribute("src","image/1.jpeg");
        console.log("1.jepg == ",  img.getAttribute("src"));
        img.style.filter="invert(0)";
        formulaire.style.display="none";

    }

}
