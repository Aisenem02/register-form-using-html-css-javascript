const btn = document.getElementById("btn")

btn.addEventListener("click", (e) =>{
    
    e.preventDefault();

    const userName = document.getElementById("userName").value;
    const logError = document. getElementById("errorMessage");
    const userLastName= document.getElementById("userLastName").value;
    const userAge= document.getElementById("userAge").value;
    const userCity= document.getElementById("userCity").value;
    const checkbox = document.getElementById("agreement")
    
    
    if ( userName===""&& userAge ==="" && userLastName==="" && userCity==""){
        logError.style.display="block"
     }else if (!document.getElementById("checkbox").checked){
        logError.style.display="block"
     }
     else{
        window.location.href="index3.html"
    }
});