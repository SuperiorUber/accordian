let accord = document.getElementsByClassName("acc-header")
for(let i = 0; i<accord.length; i++){
    accord[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var next = this.nextElementSibling
        if(next.style.display === "block"){
            next.style.display = "none"
        }
        else{
            next.style.display = "block"
        }
    })
}
