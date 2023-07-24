const contenidotienda = document.getElementById ("contenidotienda");
const verCarrito = document.getElementById ("verCarrito");
const modalContainer = document.getElementById("modal-container");

/*Productos*/
const listaProductos = [
    {
        name: "Oinigiri",
        id: 1,
        type: "Entrada",
        price: 200,
        description:"Triángulos japoneses de arroz y alga nori, relleno de mayo-tuna.",
        img: "../img/card1.jpg",
    },
    {
        name: "Dumplings",
        id: 2,
        type: "Entrada",
        price: 800,
        description: "Dumplings rellenos de cerdo y repollo.",
        img: "../img/card2.jpg",
    },
    {
        name: "Ebi Furai",
        id: 3,
        type: "Entrada",
        price: 500,
        description: "Langostinos empanado en panko japones, acompañado de salsa de curry rojo y leche de coco",
        img: "../img/card3.jpg",
    },
    {
        name: "Karaage",
        id: 4,
        type: "Entrada",
        price: 700,
        description: "Pollo empanado en panko japones, acompañado con curry y salsa de soja agridulce",
        img: "../img/card4.jpg",
    },
];

/*Local Storage*/
const savelocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/*Recorrido Productos*/
listaProductos.forEach((producto)=>{
    let content = document.createElement ("div");
    content.className = "";
    content.innerHTML = `
    <img src="${producto.img}" style="
    max-width: 500px; max-height: 500px;">
    <h2>${producto.name}</h2>
    <h3 style="max-width: 500px;">${producto.description}</h3>
    <p class="price">$${producto.price}</p>
    `;

    contenidotienda.append(content);

/*Comprar*/
let comprar = document.createElement ("button");
    comprar.innerText = "Comprar";

    content.append(comprar);


comprar.addEventListener("click", () =>{
    carrito.push({
    id: producto.id,
    img: producto.img,
    name: producto.name,
    price: producto.price,
    description: producto.description,
    });
    console.log(carrito);
    savelocal();
    });
});

/*Carrito*/
verCarrito.addEventListener("click", () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "row";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML =`
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);
    
    carrito.forEach((producto) =>{
    let carritoContent = document.createElement ("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="${producto.img}" style="
    max-width: 500px; max-height: 500px;">
    <h3>${producto.name}</h3>
    <p>$${producto.price}</p>
    `;

    modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.price, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalBuying);
});
