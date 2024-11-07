import data from './data3_2.json';

var input = document.getElementById("roll");
var search = document.querySelector('#btn');
var container = document.querySelector('#captureBlock');
var section_result = document.querySelector('.section');
var main = document.querySelector('main');
var black_btn = document.querySelector('.black-btn');

search.addEventListener('click',()=>{

    let roll = input.value;
    console.log("roll : "+roll);
    if(roll == "219B1A0539"){
        container.classList.add('block');
        main.style.marginBottom="5rem"
        search.innerHTML = "view another result";
        input.value = "";
        section_result.classList.add("show")
    }
    else{
        if(container.classList.contains('block')){
            container.classList.remove('block');
            search.innerHTML = "search";
            section_result.classList.remove("show");
        }
        else{
            alert("Invalid hallticket");
        }
    }
})

black_btn.addEventListener("click",()=>window.print())

// Function to create a table
function createTable() {

    data.map((item)=>{
        
        // console.log(col1,col2,col3,col4,col5,col6,col7);
    })

    let table = document.createElement('table');
    table.className = 'result-table'; // Optional: Add a class to your table for styling

    // Create table header row
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let  arr = Object.values(data[0]);

    for (let i = 0; i <arr.length; i++) {
        let th = document.createElement('th');
        th.innerText =arr[i];
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    let tbody = document.createElement('tbody');

    for (let i = 1; i <data.length; i++) {

        let tr = document.createElement('tr');
        let arr2 = Object.values(data[i]);

        for (let j = 0; j < arr2.length; j++) {

            let td = document.createElement('td');
            td.innerText =arr2[j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    document.getElementById('table').appendChild(table);
}

createTable();
