"use strict"
console.log("hi consol");
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
        console.log("1.jpeg")
    }
    else{
        document.body.style.color ="green";

    }

}
