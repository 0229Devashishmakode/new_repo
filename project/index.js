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
    } else if (obj.tableNo === "Table2") {
        table2.push(obj)
   
        localStorage.setItem("table2", JSON.stringify(table2))
    } else if (obj.tableNo === "Table3") {
        table3.push(obj)
     
        localStorage.setItem("table3", JSON.stringify(table3))
    }
}
    
     table1 = JSON.parse(localStorage.getItem("table1")) || [];
     table2 = JSON.parse(localStorage.getItem("table2")) || [];
     table3 = JSON.parse(localStorage.getItem("table3")) || [];

    function append(table1) {
        let c1 = document.getElementById("container1")
        console.log(c1)
        c1.innerhtml = null;
        let h1 = document.createElement("h1");
        h1.innerText = "Table1";
        c1.append(h1)
        for (let i = 0; i < table1.length; i++) {
            let p = document.createElement("p");
          
            
            p.innerText = `${table1[i].id} ${table1[i].price}  ${table1[i].dish} ${table1[i].tableNo}`;
            console.log(p);
            c1.append(p)
        }


    }
append(table1)
    

function append2(table2) {
        let c2 = document.getElementById("container2")
        console.log(c2)
        c2.innerhtml = null;
        let h1 = document.createElement("h1");
        h1.innerText = "Table2";
        c2.append(h1)
        for (let i = 0; i < table2.length; i++) {
            let p = document.createElement("p");
          
            
            p.innerText = `${table2[i].id} ${table2[i].price}  ${table2[i].dish} ${table2[i].tableNo}`;
            console.log(p);
            c2.append(p)
        }


    }
append2(table2)
    
function append3(table3) {
        let c3 = document.getElementById("container3")
        console.log(c3)
        c3.innerhtml = null;
        let h1 = document.createElement("h1");
        h1.innerText = "Table3";
        c3.append(h1)
        for (let i = 0; i < table1.length; i++) {
            let p = document.createElement("p");
          
            
            p.innerText = `${table3[i].id} ${table3[i].price}  ${table3[i].dish} ${table3[i].tableNo}`;
            console.log(p);
            c3.append(p)
        }


    }
    append3(table3)
