let sesion = {
    usuario: 'Facundo',
    contraseña: 'coder123'
  };

function iniciarSesion() {
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
  
    if (usuario === 'Facundo' && contraseña === 'coder123') {
      sessionStorage.setItem('sesionIniciada', usuario);
      document.getElementById('estado-sesion').textContent = '¡Login correcto!';
      document.getElementById('loginForm').classList.add('sesion-iniciada');
      console.log('Login exitoso');
      Swal.fire({
        title: '¡Login exitoso!',
        text: 'Ya puedes comprar',
        icon: 'success',
        confirmButtonText: '¡Genial!',
        timer: 5000
      })
    } else {
      document.getElementById('estado-sesion').textContent = '¡Login incorrecto!';
      console.log('Login erróneo');
    }
  }
  
let btnIniciarSesion = document.getElementById('btnIniciarSesion');
    btnIniciarSesion.addEventListener('click', iniciarSesion);

    sessionStorage.setItem('sesion', JSON.stringify(sesion));
  
let sesionGuardada = sessionStorage.getItem('sesion');
  
let sesionObjeto = JSON.parse(sesionGuardada);
  
  console.log(sesionObjeto.usuario);
  console.log(sesionObjeto.contraseña);

function cargarPagina() {
    let sesionIniciada = sessionStorage.getItem('sesionIniciada');
    if (sesionIniciada) {
      document.getElementById('loginForm').classList.add('sesion-iniciada');
      document.getElementById('estado-sesion').textContent = `Bienvenido ${sesionIniciada}`;
    }
  }
  
window.onload = cargarPagina;

let tienda = document.getElementById("tienda");

const espadas = [
    {
      id: 1,
      nombre: "Espada Orcrist",
      precio: 28500,
      img:"https://http2.mlstatic.com/D_NQ_NP_787963-MLA48873197072_012022-O.webp",
     
    },
    {
      id: 2,
      nombre: "Espada Glamdring",
      precio: 32000,
      img:"https://http2.mlstatic.com/D_NQ_NP_630266-MLA50171815182_062022-O.webp",
      
    },
    {
      id: 3,
      nombre: "Espada Anduril",
      precio: 40000,
      img:"https://www.blades.co.uk/wp-content/uploads/2021/08/uc1380-united-cutlery-lotr-anduril-sword-of-aragorn-bg_black.jpg",
      
    },
    {
        id: 4,
        nombre: "Espadas del Caos",
        precio: 95000,
        img:"https://i.pinimg.com/550x/0d/1c/d2/0d1cd2575c271608c2dd1de76ac00544.jpg",
      
    },
    {
      id: 5,
      nombre: "Espada del Olimpo",
      precio: 135000,
      img:"https://i.pinimg.com/originals/29/53/3e/29533e0967faa2fb6b24eb3a9aa42d8a.jpg",
     
    },
];

let abrirCarrito = document.getElementById("abrirCarrito");
let divCarro = document.getElementById("divCarro");
let carrito = [];

espadas.forEach((product)=> {
    let contenido = document.createElement("div");
    contenido.className = "tarjetaJs";
    contenido.innerHTML = `
        <img class="imgTarjetaJs" src="${product.img}">
        <h2 class="nombreTarjetaJs">${product.nombre}</h2>
        <span class="Precios">${product.precio} $</span>
    `;
    tienda.append(contenido)

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "botonOrc";
    contenido.append(comprar);
    comprar.addEventListener("click", ()  => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    })   
});

abrirCarrito.addEventListener("click",  () =>  {
    divCarro.innerHTML = "";
    divCarro.style.display = "flex";
    let carroHeader = document.createElement("div");
    carroHeader.className = "carroHeader"
    carroHeader.innerHTML = `
    <h1 class"carroTitulo">Carrito</h1>
    `;

    divCarro.append(carroHeader);

let borrarCarrito = document.createElement("button");
    borrarCarrito.innerText = "Borrar carrito";
    borrarCarrito.className = "botonOrc";
    
    carroHeader.append(borrarCarrito);
    
    borrarCarrito.addEventListener("click", () => {
    carrito = [];
    divCarro.innerHTML = "";
    let mensaje = document.createElement("p");
    mensaje.innerText = "El carrito ha sido borrado";
    divCarro.append(mensaje);

    setTimeout(() => {
        mensaje.remove();
        actualizarCarrito();
    }, 2000);
});

let pagar = document.createElement("button");
    pagar.innerText = "Pagar";
    pagar.className = "botonOrc";

carroHeader.append(pagar);

pagar.addEventListener("click", () => {
  let total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  divCarro.innerHTML = "";
  let mensaje = document.createElement("p");
  mensaje.innerText = `Gracias por su compra. Total a pagar: ${total} $`;
  
  divCarro.append(mensaje);

  setTimeout(() => {
    mensaje.remove();
    actualizarCarrito();
}, 2000);
});

    let carroBoton = document.createElement("h1");
    carroBoton.innerText = "x";
    carroBoton.className = "carroBotonHeader";

    carroBoton.addEventListener("click",  ()  =>  {
        divCarro.style.display = "none";
    });

    carroHeader.append(carroBoton);


    carrito.forEach((product)  =>   {
        let contenidoDelCarro = document.createElement("div");
        contenidoDelCarro.className = "Carro"
        contenidoDelCarro.innerHTML = `
        <img src=${product.img}>
        <h3 class="tituloH3">${product.nombre}</h3>
        <p class="Precios">${product.precio} $</p>   
        `;
        
        divCarro.append(contenidoDelCarro);
    });

    let total = carrito.reduce((acc, prod)  => acc + prod.precio, 0);

    let compraTotal = document.createElement("div");
    compraTotal.className = "contenidoTotal"
    compraTotal.innerHTML = `Total a pagar: ${total} $`;
    divCarro.append(compraTotal);
});



  