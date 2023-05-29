let cargo = [];
cargo [0]= {
    name: "Великий контейнер",
    price: 1000
}
cargo [1]= {
    name: "Середній контейнер",
    price: 500
}
cargo [2]= {
    name: "Малий контейнер",
    price: 200
}
cargo [3]= {
    name: "Без контейнеру",
    price: 50
}

let selector = document.querySelector("#cargo");
selector.innerHTML ='';
function createSelect(sel,ar)
{
    for (let i = 0; i < ar.length;i++)
    {
        const option = document.createElement("option");
        option.value = i;
        option.text = ar[i].name;
        
        sel.add(option);
        }

}
createSelect(selector, cargo);

let count_cargos = document.querySelector("#cargo_count");
function calc_price(ar, i, count)
{
    return ar[i].price * count;
}

let index_cargo = selector.options[selector.selectedIndex].value;
let price_cargos = 0.0;
let count_cargo = document.querySelector("#cargo_count").value;
function price_cargo(){
    index_cargo = selector.options[selector.selectedIndex].value;
    count_cargo = document.querySelector("#cargo_count").value;
    price_cargos = calc_price(cargo,index_cargo,count_cargo)
    let price_h3 = document.querySelector("#price_cargos");
    price_h3.innerHTML = 'Вартість = ' + price_cargos;
}
price_cargo();
count_cargos.onclick = function(){
    price_cargo()
}
selector.onclick = function(){
    price_cargo()
}
let all_price_cargos = 0.0;
let all_price = 0.0
let all_cargos = document.querySelector("#all_Cargos");
let all_price_cargo = document.querySelector("#all_price_cargo");
all_cargos.innerHTML = '';
all_price_cargo.innerHTML = '';
let cargos = document.getElementById("calc_cargos");
cargos.onclick = function(){
    all_cargos.innerHTML = all_cargos.innerHTML + ", " +
        cargo[index_cargo].name + " " | 
        count_cargo;
    all_price_cargos = all_price_cargos + price_cargos;
    all_price = all_price_cargos;
    all_price_cargo.innerHTML = " Загальна вартість " + all_price;
}