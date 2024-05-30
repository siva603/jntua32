var input = document.getElementById("roll");
var search = document.querySelector('#btn');
var container = document.querySelector('#captureBlock');
var section_result = document.querySelector('.section');
var main = document.querySelector('main');

search.addEventListener('click',()=>{

    let roll = input.value;
    
    if(roll == "219B1A0539"){
        container.classList.add('block');
        main.style.marginBottom="5rem"
        search.innerHTML = "view another result";
        input.innerContent = "";
        section_result.classList.add("show")
    }
    else{
        alert("Invalid hallticket");
    }
})