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
usuario.push(new Colaborador("f3823", "Mariano", "Palma",));
console.log("colaboradores activos:");
console.log(usuario);
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
                f75: "Guera(f75)",
                f3823: "Palma(f3823)"
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
        let buscadorlegajo = buscadorDeLegajo.legajo;
        let nombreDeFooter = document.getElementById("nombreFooterHtml");
        nombreDeFooter.innerHTML = buscadorNombre;
        let apellidoDeFooter = document.getElementById("apellidoFooterHtml");
        apellidoDeFooter.innerHTML = buscadorApellido;
        let legajoDeFooter = document.getElementById("legajoFooterHtml");
        legajoDeFooter.innerHTML = buscadorlegajo;
        //sessionStorage pt1
        console.log(buscadorDeLegajo);
        sessionStorage.setItem("userStorage", buscadorDeLegajo.legajo) //exporta el valor en formato json.
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
                <h4>${buzo.marca}</h4>
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
            <h4>${campera.marca}</h4>
            <p>${campera.color}</p>
            <p>${campera.talle}</p>
            <p>${campera.precio}</p>
            <p>${campera.tipo}</p>
            `;
            itemCampera.append(li);
        });
        console.log(camperas);
    });

$("#boton").click(function () {
    (async () => {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    'buzo': 'Buzo',
                    'campera': 'Campera'
                })
            }, 1000)
        })
        const { value: nuevoItem } = await Swal.fire({
            title: 'Seleccione el tipo de prenda:',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'Seleccione una prenda'
                }
            }
        })
        if (nuevoItem) {
            Swal.fire({ html: `seleccionaste: ${nuevoItem}` });


            let selecUsuario = nuevoItem
            if (selecUsuario === "buzo") {
                let testigoNuevo = document.getElementById("testigo");//"testigo es la ID de <P> del header."
                testigoNuevo.innerHTML = "Nuevo buzo ingresado";
                let tipoNew = "Buzo";
                let marcaNew = prompt("ingrese la marca:");
                let colorNew = prompt("ingrese el color:");
                let talleNew = prompt("ingrese el talle: -XS-S-M-L-X-XL-XXL-:");
                let precioNew = prompt("ingrese el precio -sin el signo $-:");
                let itemBuzo = [{"tipo":tipoNew}, {"marca":marcaNew}, {"color":colorNew}, {"talle":talleNew}, {"precio":precioNew}];
                console.log("Nuevo Buzo");
                console.log(itemBuzo);
                
            }
            else if (selecUsuario === "campera") {
                let testigoNuevo = document.getElementById("testigo");//"testigo es la ID de <P>"
                testigoNuevo.innerHTML = "Nueva Campera ingresada";
                let tipoNew = "Campera";
                let marcaNew = prompt("ingrese la marca:");
                let colorNew = prompt("ingrese el color:");
                let talleNew = prompt("ingrese el talle: -XS-S-M-L-X-XL-XXL-:");
                let precioNew = prompt("ingrese el precio -sin el signo $-:");
                let itemCampera = [{"tipo":tipoNew}, {"marca":marcaNew}, {"color":colorNew}, {"talle":talleNew}, {"precio":precioNew}];
                console.log("Nueva campera");
                console.log(itemCampera);
                
            }

        }
    })()
})
