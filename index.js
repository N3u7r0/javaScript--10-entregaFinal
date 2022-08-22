console.log(document.body);
console.log("Sistema iniciado, bienvenido a Hight-BackUp");
//ingreso a la app.
Swal.fire('Bienvenido a High-BackUp');
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
usuario.push(new Colaborador("f9092", "Leonardo", "Rosa",));
usuario.push(new Colaborador("f3656", "Esteban", "Torre",));
console.log("colaboradores activos:")
console.log(usuario);
//seleccion de usuario.
let seleccionUsuario;
let usuarioStorage = localStorage.getItem("seleccionUsuario");
(async () => {
    const { value: seleccionUsuario } =
        await swal.fire({
            title: "Seleccione su usuario",
            confirmButtonText: "Seleccionar",
            icon: "info",
            footer: '<span class= "swalRojo">Si su legajo no figura en al app, contacte a back office.</span>',
            allowEscapeKey: false,
            allowOutsideClick: false,
            //inputs
            input: "select",
            inputPlaceholder: "Usuario",
            inputValue: "seleccionUsuario ",
            inputOptions: {
                f14903: "Sabatini(f14903)",
                f14799: "Teves(f14799)",
                f9092: "Rosa(f9092)",
                f3656: "Torre(f3656)",
                f75: "Guera(f75)"
            }
        });
    //usuario ya ingresado 
    if (seleccionUsuario) {
        const buscadorDeLegajo = usuario.find(Colaborador => Colaborador.legajo === seleccionUsuario);//buscador de legajo.
        console.log("ingreso el colaborador " + buscadorDeLegajo.nombre + " " + buscadorDeLegajo.apellido);
        swal.fire("Bienvenido " + buscadorDeLegajo.nombre + " " + buscadorDeLegajo.apellido);
        //footer.
        let buscadorNombre = buscadorDeLegajo.nombre;
        let buscadorApellido = buscadorDeLegajo.apellido;
        let nombreDeFooter = document.getElementById("nombreFooter");
        nombreDeFooter.innerHTML = buscadorNombre;
        let apellidoDeFooter = document.getElementById("apellidoFooter");
        apellidoDeFooter.innerHTML = buscadorApellido;
        let legajoDeFooter = document.getElementById("legajoFooter");
        legajoDeFooter.innerHTML = usuarioStorage;
    }
})()
//items.
let itemBuzo = document.getElementById("listaStockBuzo");
fetch("./stock/stockBuzo.json")
    .then(respeustaBuzo => respeustaBuzo.json())
    .then(buzos => {
        buzos.forEach(buzo => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h4>${buzo.marca}</h2>
                <p>${buzo.color}</p>
                <p>${buzo.talle}</p>
                <p>${buzo.precio}</p>
                <p>${buzo.tipo}</p>
            `;
            itemBuzo.append(li);
        });
        console.log("items totales");
        console.log(buzos);
    });
let itemCampera = document.getElementById("listaStockCampera");
fetch("./stock/stockCampera.json")
    .then(respeustaCampera => respeustaCampera.json())
    .then(camperas => {
        camperas.forEach(campera => {
            const li = document.createElement("li");
            li.innerHTML = `
            <h4>${campera.marca}</h2>
            <p>${campera.color}</p>
            <p>${campera.talle}</p>
            <p>${campera.precio}</p>
            <p>${campera.tipo}</p>
            `;
            itemCampera.append(li);
        });
        console.log(camperas);
    });