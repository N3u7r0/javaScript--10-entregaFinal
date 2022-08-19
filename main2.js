console.log(document.body);
console.log("Sistema iniciado, bienvenido a Hight-BackUp");
//Legajos activos Colaboradores/ empleados.
class Colaborador {
    constructor(legajo, nombre, apellido) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
//Array de los colaboradores activos.
const usuarios = [];
usuarios.push(new Colaborador("f14903", "Brian", "Sabatini",));
usuarios.push(new Colaborador("f14799", "Gabriel", "Teves",));
usuarios.push(new Colaborador("f75", "Ignacio", "Buera",));
usuarios.push(new Colaborador("f14908", "Maria De Los Angeles", "Cisneros",));
console.log("colaboradores activos:")
console.log(usuarios);

let itemBuzo = document.getElementById("listaStockBuzo");
fetch("./stock/stockBuzo.json")
    .then(respeustaBuzo => respeustaBuzo.json())
    .then(buzos => {
        buzos.forEach(buzo => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h2>${buzo.marca}</h2>
                <p>${buzo.color}</p>
                <p>${buzo.talle}</p>
                <p>${buzo.precio}</p>
                <p>${buzo.tipo}</p>
            `;
            itemBuzo.append(li);
        });
    });

let itemCampera = document.getElementById("listaStockCampera");
fetch("./stock/stockCampera.json")
    .then(respeustaCampera => respeustaCampera.json())
    .then(camperas => {
        camperas.forEach(campera => {
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${campera.marca}</h2>
            <p>${campera.color}</p>
            <p>${campera.talle}</p>
            <p>${campera.precio}</p>
            <p>${campera.tipo}</p>
            `;
            itemBuzo.append(li);
        });
    });
//ingreso a la app.
Swal.fire('Bienvenido a High-BackUp');
