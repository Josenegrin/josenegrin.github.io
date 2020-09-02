/* El ejercicio es que el sistema genere aleatoriamente 30 carros, con 30 modelos, y 30 años aleatorios

consegui generar 30 carros, pero escribiendo las 30 marcas,
tendria que crear una funcion para la var marca, var modelo, y var annio, que genere aleatoriamente una elemento*/


function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var marca = ["Abart", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Citroën", "Cupra", "Dacia", "DS", "Ferrari", "Fiat", "Ford","Honda", "Hyundai", "Jaguar", "Jeep", "Kia", "Koeningsegg", "Lamborghini", "Land Rover", "Lexus", "Lotus", "Maseratti", "Mazda", "McLaren", "Mercedes Benz", "Mini", "Toyota"];
var modelo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var annio = [2017, 2018, 2019, 2020, 2017, 2018, 2019, 2020, 2017, 2018, 2019, 2020, 2017, 2018, 2019, 2020, 2017, 2018, 2019, 2020, 2017, 2018, 2019, 2020, 2017, 2018, 2019, 2020, 2017, 2018];

var marcaRandom = Math.floor(Math.random()*(marca.lenght));
var seleccionMarca = marca[marcaRandom];

var modeloRandom = Math.floor(Math.random()*(modelo.lenght));
var seleccionModelo = modelo[modeloRandom];

var annioRandom = Math.floor(Math.random()*(annio.lenght));
var seleccionAnnio = annio[annioRandom];


for (var i = 0; i < marca.length; i++) {
    var autoNew = new auto(marcaRandom[i], modeloRandom[i], annioRandom[i]);
    console.log (`El Auto ${i} es, un ${marca[i]} de modelo ${modelo[i]} del año ${annio[i]} `);
    
}

