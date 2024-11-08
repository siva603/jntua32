// import data from './data3_2.json';
var data = [
    {
        "col1":"Subject Code",
        "col2":"Subject Name",
        "col3":"Internal Marks",
        "col4":"External Marks",
        "col5":"Total Marks",
        "col6":"Result Status",
        "col7":"Credits",
        "col8":"Grade"
    },
    {
               
    "col1":"20A52401",
    "col2":"SOC-IV SOFT SKILLS",
    "col3":"27",
    "col4":"67",
    "col5":"94",
    "col6":"P",
    "col7":"2",
    "col8":"S"
    },
    {          
    "col1":"20A05601P",
    "col2":"COMPILER DESIGN LAB",
    "col3":"25",
    "col4":"65",
    "col5":"90",
    "col6":"P",
    "col7":"1.5",      
    "col8":"B"
    },
    {          
    "col1":"20A01605",
    "col2":"ENVIRONMENTAL ECONOMICS",
    "col3":"23",
    "col4":"35",
    "col5":"58",
    "col6":"P",
    "col7":"3",
    "col8":"D"
    },
    {          
    "col1":"20A05602T",
    "col2":"MACHINE LEARNING",
    "col3":"24",
    "col4":"29",
    "col5":"53",
    "col6":"P",
    "col7":"3",
    "col8":"D"
    },
    {          
    "col1":"20A05601T",
    "col2":"COMPILER DESGIN",
    "col3":"23",
    "col4":"25",
    "col5":"48",
    "col6":"P",
    "col7":"3",
    "col8":"E"
    },
    {          
    "col1":"20A05604a",
    "col2":"SOFTWARE TESTING",
    "col3":"21",
    "col4":"33",
    "col5":"54",
    "col6":"P",
    "col7":"3",
    "col8":"D"
    },
    {          
    "col1":"20A05603T",
    "col2":"INTERNET OF THINGS",
    "col3":"22",
    "col4":"32",
    "col5":"54",
    "col6":"P",
    "col7":"3",
    "col8":"D"
    },
    {          
    "col1":"20A05602P",
    "col2":"MACHINE LEARNING LAB",
    "col3":"26",
    "col4":"66",
    "col5":"92",
    "col6":"P",
    "col7":"1.5",
    "col8":"S"
    },
    {          
    "col1":"20A05603P",
    "col2":"INTERNET OF THINGS LAB",
    "col3":"26",
    "col4":"64",
    "col5":"90",
    "col6":"P",
    "col7":"1.5",
    "col8":"S"
    },
    {          
    "col1":"20A99601",
    "col2":"INTELLECTUAL PROPERTY RIGHTS&PATENTS",
    "col3":"26",
    "col4":"0",
    "col5":"26",
    "col6":"P",
    "col7":"0",
    "col8":"Y"
}
];

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
