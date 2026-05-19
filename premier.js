"use strict"

console.log("Hi console");
let login = document.getElementById("login");
let newAccount = document.getElementById("newaccount");
login.style.display="none";
newAccount.style.display="none";

let userID = document.getElementById("username");
let passwordId = document.getElementById("password");

let userNameID = document.getElementById("name");
let newPasswordId = document.getElementById("newPassword")
let userError = document.getElementById("errorLogin");

document.querySelector("#login").addEventListener("submit",Depart);
function Depart(event){
    event.preventDefault();
    let nameValue = userID.value;
    let passValue = passwordId.value;
    if(nameValue ==""  || passValue ===""){
        userError.textContent="";
        userError.textContent="Le champ est vide";
        userError.style.color = "red";
        
        return 
    }
    else {
        userError.textContent="";
        
    }
    
}

let image = document.getElementById("image");
image.addEventListener("click",Allumer);
function Allumer(event){
    let img= event.currentTarget;
    let source = img.getAttribute("src")
    if(source == "image/1.jpeg"){
        document.body.style.backgroundColor="black";
        img.setAttribute("src","image/2.jpeg");
        img.style.filter="invert(1)";
        login.style.display="block";
        document.querySelector("h3").style.color="white";
        
    }
    else{
        document.body.style.backgroundColor="white";
        img.setAttribute("src","image/1.jpeg");
        console.log("1.jepg == ",  img.getAttribute("src"));
        img.style.filter="invert(0)";
        login.style.display="none";
        document.getElementById("newaccount").style.display="none";

    }
    document.getElementById("creat").addEventListener("click",creatAccount);

}
document.getElementById("newaccount").addEventListener("submit",function(event){
    event.preventDefault();
    let newNameValue = userNameID.value;
    let newPasswordValue = newPasswordId.value;
    let newAccountError = document.getElementById("errorNewaccount");
    if(newNameValue ==="" || newPasswordValue ===""){
        newAccountError.textContent="";
        newAccountError.textContent="Le champ est vide!";
        newAccountError.style.color = "red";
        return 
    }
    else{
        newAccountError.textContent="";
    }
});

const creatAccount =(event)=>{
    
    console.log(event.currentTarget);
    newAccount.style.display="block";
    document.body.style.backgroundColor="none";
    document.querySelector("h2").style.color="white";
    
    
}
    
