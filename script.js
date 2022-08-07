function displayNavbar(){
    element = document.getElementById("nav-small")
    if(element.style.display == "block"){
        element.style.display = "none";
    }else{
        element.style.display = "block";
    }
}