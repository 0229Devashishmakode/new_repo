let form = document.getElementById("myform");
let table1 = JSON.parse(localStorage.getItem("table1")) || [];
let table2 = JSON.parse(localStorage.getItem("table2")) || [];
let table3 = JSON.parse(localStorage.getItem("table3")) || [];

 
form.addEventListener("submit", myfunc)
function myfunc(event) {
    event.preventDefault();
    let id = form.unique.value;
    let price = form.price.value;
    let dish = form.dish.value;
    let tableNo = form.table.value;
    let obj = {
        id: id,
        price: price,
        dish: dish,
        tableNo: tableNo,
    }
    if (obj.tableNo === "Table1") {
        table1.push(obj)
        localStorage.setItem("table1", JSON.stringify(table1))
        append1(table1)
    } else if (obj.tableNo === "Table2") {
        table2.push(obj);
        localStorage.setItem("table1", JSON.stringify(table1))
        append2(table2)
   
        
    } else if (obj.tableNo === "Table3") {
        table3.push(obj)
     
      localStorage.setItem("table1", JSON.stringify(table1))
        append3(table3)
    }
}
    
     table1 = JSON.parse(localStorage.getItem("table1")) || [];
     table2 = JSON.parse(localStorage.getItem("table2")) || [];
     table3 = JSON.parse(localStorage.getItem("table3")) || [];

function append1(table1) {
    table1 = JSON.parse(localStorage.getItem("table1")) || [];
    let c1 = document.getElementById("container1")
      
    c1.innerHTML = null;
    let h1 = document.createElement("h1");
    h1.innerText = "Table1";
    c1.append(h1)
    let button = document.createElement("button");
    button.innerText = "Delete";
    let hr = document.createElement("hr")
    for (let i = 0; i < table1.length; i++) {
        let div = document.createElement("div")
        let p = document.createElement("p");
        let button = document.createElement("button");
        button.innerText = "Delete";
        let hr = document.createElement("hr");
          
        p.innerText = `${table1[i].id} ${table1[i].price}  ${table1[i].dish} ${table1[i].tableNo}`;
        
        div.append(p, button, hr)
        c1.append(div)
    
        button.addEventListener('click', function () {
           table1= JSON.parse(localStorage.getItem('table1'))
            table1.splice(i, 1)
            localStorage.setItem('table1', JSON.stringify(table1));
              table1= JSON.parse(localStorage.getItem('table1'))

         
            append1(table1);

        });
    }
}
append1(table1)
    

function append2(table2) {
    table2 = JSON.parse(localStorage.getItem("table2")) || [];
    let c2 = document.getElementById("container2")
      
    c2.innerHTML = null;
    let h1 = document.createElement("h1");
    h1.innerText = "Table2";
    c2.append(h1)
    let button = document.createElement("button");
    button.innerText = "Delete";
    let hr = document.createElement("hr")
    for (let i = 0; i < table2.length; i++) {
        let div = document.createElement("div")
        let p = document.createElement("p");
        let button = document.createElement("button");
        button.innerText = "Delete";
        let hr = document.createElement("hr");
          
        p.innerText = `${table2[i].id} ${table2[i].price}  ${table2[i].dish} ${table2[i].tableNo}`;
        
        div.append(p, button, hr)
        c2.append(div)
    
        button.addEventListener('click', function () {
           table2= JSON.parse(localStorage.getItem('table2'))
            table2.splice(i, 1)
            localStorage.setItem('table2', JSON.stringify(table2));
              table2= JSON.parse(localStorage.getItem('table2'))

         
            append2(table2);

        });
    }
}
append2(table2)
    
    
function append3(table3) {
    table3 = JSON.parse(localStorage.getItem("table3")) || [];
    let c3 = document.getElementById("container3")
      
    c3.innerHTML = null;
    let h1 = document.createElement("h1");
    h1.innerText = "Table3";
    c3.append(h1)
    let button = document.createElement("button");
    button.innerText = "Delete";
    let hr = document.createElement("hr")
    for (let i = 0; i < table3.length; i++) {
        let div = document.createElement("div")
        let p = document.createElement("p");
        let button = document.createElement("button");
        button.innerText = "Delete";
        let hr = document.createElement("hr");
          
        p.innerText = `${table3[i].id} ${table3[i].price}  ${table3[i].dish} ${table3[i].tableNo}`;
        
        div.append(p, button, hr)
        c3.append(div)
    
        button.addEventListener('click', function () {
           table3= JSON.parse(localStorage.getItem('table3'))
            table3.splice(i, 1)
            localStorage.setItem('table3', JSON.stringify(table3));
              table3= JSON.parse(localStorage.getItem('table3'))

         
            append3(table3);

        });
    }
}
append3(table3)
    