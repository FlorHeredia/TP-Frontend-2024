let arrProductos= ["Fideos Matarazzo", "Azúcar Chango", "Yerba Mate", "Vino", "Pure De Tomate",
    "Oreo", "Leche", "Aceite", "Arroz", "Café", "Lavandina", "Cacao"];
let arrPrecio=   [1400, 1390, 4865, 4950, 700, 3850, 1230, 1850, 1150, 6650, 1150, 1390];
let arrCant=      [100, 50, 75, 60, 90, 100, 80, 70, 50, 40, 100, 120];

document.querySelector("div button").addEventListener("click", ()=>{
    let cantidad=document.querySelector("div input").value;
    cantidad=Number(cantidad);
    if(cantidad>0&&(arrCant[0]-cantidad)>0){
        comprar(cantidad);
    }else{
        alert(" Por favor, ingrese una cantidad mayor a cero o no hay stock")
    }
})

function comprar(cantidad) {
    document.getElementById("total").innerText=cantidad*arrPrecio[0];
}

















