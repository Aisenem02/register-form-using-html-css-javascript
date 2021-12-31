
const btn = document.getElementById("btn")

btn.addEventListener("click", (e) =>{
    
    e.preventDefault();

    const userName = document. myForm.userName.value;
    const logError = document. getElementById("errorMessage");
    const firstPass= document.getElementById("firstPass").value
    const secondPass= document.getElementById("secondPass").value;

    if (userName == null || userName===""){
        logError.style.display="block"
    }else if (firstPass !==secondPass && firstPass || secondPass === ""){
        logError.style.display="block"
     } else{
        window.location.href="index2.html"
    }
});
 