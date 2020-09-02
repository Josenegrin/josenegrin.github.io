var articulos = [
    {nombre: "Bici", costo: 3000 },
    {nombre: "TV", costo: 2500 },
    {nombre: "Libro", costo: 320 },
    {nombre: "Celular", costo: 10000 },
    {nombre: "Laptop", costo: 20000 },
    {nombre: "Teclado", costo: 500 },
    {nombre: "Audifonos", costo: 1700 },
];

/*Meodo FILTER */
/* el filter nos ayuda a filtrar cosas especificas de un arrey generando un array nuevo*/
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

/*Metodo MAP*/
/*este es el segundo metodo para filtrar los articulos, metodo de map */

/* map nos ayuda a mapear todo el contenido del array y nos trae justo lo que estabamos buscando, en esta caso nos genera los nombres de los articulos, no nos genera un nuevo objeto si no los strings que estabamos buscando con los nombres de los objetos */
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos;

/* Metodo FIND */
/* Generamos un nuevo arrayque va a ser igual a referencia a nuestro array pasado.find y 
pidiendole que vamos a buscar un articulo,
le estamos diciendo que nos regrese de la variable articulo, el nombre que sea estrictamente necesario a "Laptop" */
/*No nos modifica el array si no que nos genera uno nuevo con ese articulo */

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

/*FOR EACH*/
/*Este es itri etidim bs reakuza ek fuktradi de un nuevo array sin modificarlo y nos genera cosas*/
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

/* nos regresa los nombres de los articulos que es estan dentro del array */

/*Metodo SOME*/
/**Est metodo se usa para validar si existe en el array un articulo que tenga un costo menor de 700, nos arroja un true de ser asi, es para validar */
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
