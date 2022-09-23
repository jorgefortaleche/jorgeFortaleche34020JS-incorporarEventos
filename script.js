class Entrada {
    constructor(nombre, localidad, precio){
        this.nombreEvento = nombre;
        this.localidad = localidad;
        this.precio = (precio * 1.15).toFixed(0); //valor ticket service incluido
    }
}


const ValorEntrada = new Entrada("Marco Carola", "General", 10000);

const itemsEntrada = [ValorEntrada]


console.log(itemsEntrada);

const tituloPrincipal = document.getElementById("tituloPrincipal");

tituloPrincipal.innerHTML = `<h1>Tu Boleta.com</h1>`

tituloPrincipal.className = `titulo`

const subTitulo = document.getElementById("subTitulo");

subTitulo.innerHTML = `<h2>Compra tus entradas Marco Carola</h2>`

subTitulo.className = `titulo`

const conntenedorEntradas = document.getElementById("contenedorEntradas");

itemsEntrada.forEach(item =>{
    let div = document.createElement(`div`);
    div.innerHTML =`<p class= "localidad">${item.localidad}</p> 
                    <p>$${item.precio}</p>
                    <button class= "boton">Agregar al carrito</button>`;

    conntenedorEntradas.appendChild(div);
    div.className = "divBoleta"
})

const lecturaFlyers = document.getElementById("mouseMove"); 

lecturaFlyers.onmousemove = () =>{
    console.log("Cantidad de tiempo y veces que el usuario se detiene leyendo el Flyers");
}

class Postulado{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
    }
}

let arrayPostulados = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e) =>{
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const edad = document.getElementById("edad");
    const postulado = new Postulado(nombre.value, apellido.value, edad.value);
    arrayPostulados.push(postulado)
    console.log(arrayPostulados)

    formulario.reset();
});
