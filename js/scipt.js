//making varibale
const notesC = document.querySelector(".nots-conatiner");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
 
//show notes
const showNotes = () =>{
notesC.innerHTML = localStorage.getItem("notes");
}
showNotes();


//create input box using js
createbtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" ,"true");
    img.src="image/delete.png";
    notesC.appendChild(inputBox).appendChild(img);
});

//check notes
notesC.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        upadteStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                upadteStorage();
            }
        })
    }
})

//store to local stoarge
function upadteStorage(){
    localStorage.setItem("notes" , notesC.innerHTML);
}


//line breakk
document.addEventListener("keydown" , event =>{
    if(event.key === "enter"){
        document.execCommand("InserLineBreak");
        event.preventDefault();
    }
})