console.log(document.body);
console.log("Sistema iniciado, bienvenido a Hight-BackUp");
Swal.fire('Bienvenido a High-BackUp');
//Legajos activos Colaboradores/ empleados.
class Colaborador {
    constructor(legajo, nombre, apellido) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
//Array de los colaboradores activos.
const usuario = [];
usuario.push(new Colaborador("f14903", "Brian", "Sabatini",));
usuario.push(new Colaborador("f14799", "Gabriel", "Teves",));
usuario.push(new Colaborador("f75", "Ignacio", "Buera",));
usuario.push(new Colaborador("f14908", "Maria De angeles", "Cisneros",));
console.log("colaboradores activos:")
console.log(usuario);
//ingreso a la app.
let ingresoLegajo;
let usuarioStorage = localStorage.getItem("ingresoLegajo");
if (usuarioStorage) {
    ingresoLegajo = usuarioStorage;
    const buscadorDeLegajo = usuario.find(Colaborador => Colaborador.legajo === ingresoLegajo);//buscador de legajo.
    console.log("ingreso el colaborador " + buscadorDeLegajo.nombre + " " + buscadorDeLegajo.apellido);
    Swal.fire("Bienvenido " + buscadorDeLegajo.nombre + " " + buscadorDeLegajo.apellido);
    //footer.
    let buscadorNombre = buscadorDeLegajo.nombre;
    let buscadorApellido = buscadorDeLegajo.apellido;
    let nombreDeFooter = document.getElementById("nombreFooter");
    nombreDeFooter.innerHTML = buscadorNombre;
    let apellidoDeFooter = document.getElementById("apellidoFooter");
    apellidoDeFooter.innerHTML = buscadorApellido;
    let legajoDeFooter = document.getElementById("legajoFooter");
    legajoDeFooter.innerHTML = usuarioStorage;
} else {

    const { value: ingresoLegajo } = Swal.fire({
        input: 'text',
        inputLabel: 'Por favor, ingrese su legajo',
        inputPlaceholder: 'Por ej. f14903 f14908 f14799 etc.'
      })
      
      if (ingresoLegajo) {
        Swal.fire(ingresoLegajo)
      }

    //ingresoLegajo = prompt("por favor, ingrese su legajo");
//-------------------------------------------------------------------
    const buscadorDeLegajo = usuario.find(Colaborador => Colaborador.legajo === ingresoLegajo);//buscador de legajo.

    console.log("ingreso el colaborador " + buscadorDeLegajo.nombre + " " + buscadorDeLegajo.apellido);
    Swal.fire("Bienvenido " + buscadorDeLegajo.nombre + " " + buscadorDeLegajo.apellido);
    localStorage.setItem("ingresoLegajo", ingresoLegajo)
    //footer
    let buscadorNombre = buscadorDeLegajo.nombre;
    let buscadorApellido = buscadorDeLegajo.apellido;
    let nombreDeFooter = document.getElementById("nombreFooter");
    nombreDeFooter.innerHTML = buscadorNombre;
    let apellidoDeFooter = document.getElementById("apellidoFooter");
    apellidoDeFooter.innerHTML = buscadorApellido;
    let legajoDeFooter = document.getElementById("legajoFooter");
    legajoDeFooter.innerHTML = usuarioStorage;
}
//items.
class Productobuzo {
    constructor(tipo, marca, color, talle, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
    }
}
class Productocampera {
    constructor(tipo, marca, color, talle, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
    }
}
let itemBuzo = [];
itemBuzo.push(new Productobuzo("Buzo", "Rush", "negro", "S", "2000"));
itemBuzo.push(new Productobuzo("Buzo", "Adidas", "rojo", "Xl", "3800"));
itemBuzo.push(new Productobuzo("Buzo", "Nike", "azul", "L", "5100"));
itemBuzo.push(new Productobuzo("Buzo", "Rip Curl", "gris", "M", "12000"));
itemBuzo.push(new Productobuzo("Buzo", "Rusty", "negro", "L", "7400"));
itemBuzo.push(new Productobuzo("Buzo", "Fila", "gris y negro", "M", "24500"));
let itemCampera = [];
itemCampera.push(new Productocampera("Campera", "Volcom", "violeta", "S", "3700"));
itemCampera.push(new Productocampera("Campera", "Nike", "negro", "S", "6200"));
itemCampera.push(new Productocampera("Campera", "Dc shoes", "verde", "XXl", "6900"));
itemCampera.push(new Productocampera("Campera", "Rip Curl", "azul", "M", "15000"));
itemCampera.push(new Productocampera("Campera", "volcom", "violeta", "XL", "3700"));
itemCampera.push(new Productocampera("Campera", "N3 Beats Studio", "negro", "M", "999999"));
//ingreso de stock.
let selecUsuario = prompt("Hola " + ingresoLegajo + ". ¿Que producto vas a ingresar, buzo o campera?.");
if (selecUsuario === "buzo") {
    let testigoNuevo = document.getElementById("testigo");//"testigo es la ID de <P> del header."
    testigoNuevo.innerHTML = "Nuevo buzo ingresado";
    let tipoNew = "Buzo";
    let marcaNew = prompt("ingrese la marca:");
    let colorNew = prompt("ingrese el color:");
    let talleNew = prompt("ingrese el talle: -XS-S-M-L-X-XL-XXL-:");
    let precioNew = prompt("ingrese el precio -sin el signo $-:");
    itemBuzo.push(new Productobuzo(tipoNew, marcaNew, colorNew, talleNew, precioNew));
    console.log(ingresoLegajo + " ingreso un nuevo item");
    console.log(itemBuzo);
    itemRed = itemBuzo.length;
    Swal.fire(usuarioStorage + " ingreso un nuevo item");
}
else if (selecUsuario === "campera") {
    let testigoNuevo = document.getElementById("testigo");//"testigo es la ID de <P>"
    testigoNuevo.innerHTML = "Nueva Campera ingresada";
    let tipoNew = "Campera";
    let marcaNew = prompt("ingrese la marca:");
    let colorNew = prompt("ingrese el color:");
    let talleNew = prompt("ingrese el talle: -XS-S-M-L-X-XL-XXL-:");
    let precioNew = prompt("ingrese el precio -sin el signo $-:");
    itemCampera.push(new Productocampera(tipoNew, marcaNew, colorNew, talleNew, precioNew));
    console.log(ingresoLegajo + "ingreso un nuevo item");
    console.log(itemCampera);
    itemBlue = itemCampera.length;
    Swal.fire(usuarioStorage + " ingreso un nuevo item");
}
console.log("stock total");
console.log(itemCampera, itemBuzo);
//testigo.
let testigoItem = " ";
selecUsuario === "buzo" ? testigoItem = itemRed : testigoItem = itemBlue;

//listas de articulos en DOM.
for (const Productobuzo of itemBuzo) {
    let listaStockBuzo = document.getElementById("listaStockBuzo");
    let li = document.createElement("li");
    li.innerText = Productobuzo.tipo + " " + Productobuzo.marca + " " + Productobuzo.color + " " + Productobuzo.talle + " $:" + Productobuzo.precio;
    listaStockBuzo.append(li);
}
for (const Productocampera of itemCampera) {
    let listaStockCampera = document.getElementById("listaStockCampera");
    let li = document.createElement("li");
    li.innerText = Productocampera.tipo + " " + Productocampera.marca + " " + Productocampera.color + " " + Productocampera.talle + " $:" + Productocampera.precio;
    listaStockCampera.append(li);
}