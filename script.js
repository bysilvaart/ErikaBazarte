class Product {
  constructor(name, price, shortDescription, longDescription, category, image) {
      this.name = name;
      this.price = price;
      this.shortDescription = shortDescription;
      this.longDescription = longDescription;
      this.category = category;
      this.image = `img/productos/${image}`;
  }
};

const products = [
    new Product(
      "Collar",
      "$10.000",
      "Este es un collar artesanal", 
      "Los mandalas son utilizados como decoración para espacios del interior del hogar como living, habitaciones, área de trabajo, etc. ¿Sabes por qué? Por que son elementos que entregan energía positiva a los espacios de uso diario con sus colores, tamaños y decoraciones extras. Este es un mandala artesanal hecho 100% a mano, tejido a crochet e inspirado en las hojas de un girasol. Es ideal para decorar paredes blancas, espacios donde se necesiten colores más positivos y donde las personas que lo vean puedan recibir una dosis colorida de colores energéticos.", 
      "Bisuteria", 
      "img_01.png"
      ),
    new Product(
      "Estatuilla", 
      "$20", 
      "Description 2",
      "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
      "Budas", 
      "img_01.png"
      ),
    new Product(
      "Product 3",
      "$30",
      "Description 3",
      "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
      "Mandalas",
      "img_01.png"
      ),
    new Product(
      "Product 4",   
      "$40", 
      "Description 4", 
      "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
      "Piedras", 
      "img_01.png"
      ),
    new Product(
      "Polera", 
      "$40.000", 
      "Description 4", 
      "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
      "Cuadros", 
      "img_01.png"
      ),
      new Product(
      "Polera", 
      "$40.000", 
      "Description 4", 
      "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
      "Cuadros", 
      "img_01.png"
      ),
      new Product(
        "Polera", 
        "$40.000", 
        "Description 4", 
        "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
        "Piedras", 
        "img_01.png"
      ),
      new Product(
        "Polera", 
        "$40.000", 
        "Description 4", 
        "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
        "Cuadros", 
        "img_01.png"
      ),
      new Product(
        "Polera", 
        "$40.000", 
        "Description 4", 
        "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
        "Cuadros", 
        "img_01.png"
      ),
      new Product(
        "Polera", 
        "$40.000", 
        "Description 4", 
        "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
        "Mandalas", 
        "img_01.png"
      ),
      new Product(
        "Polera", 
        "$40.000", 
        "Description 4", 
        "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
        "Cuadros", 
        "img_01.png"
      ),
      new Product(
        "Polera", 
        "$40.000", 
        "Description 4", 
        "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
        "Cuadros", 
        "img_01.png"
      ),
      new Product(
        "Polera", 
        "$40.000", 
        "Description 4", 
        "Esta es la descripcion larga del producto. sirve para dar mas detalles sobre el producto",
        "Cuadros", 
        "img_01.png"
      ),

]



function createProductList(productArray) {
    const productList = document.createElement("div");
    productList.id = "product-list";
    productArray.forEach((product) => {
      const productContainer = document.createElement("div");
      productContainer.classList.add("product-container");
      productContainer.setAttribute("data-category", product.category);
      productContainer.addEventListener("click", () => {
        const modal = document.getElementById("modal");
        modal.style.display = "grid";
        document.getElementById("modal-name").innerText = product.name;
        document.getElementById("modal-price").innerText = `${product.price}`;
        document.getElementById("modal-description").innerText = product.longDescription;
        //document.getElementById("modal-category").innerText = `Category: ${product.category}`;
        document.getElementById("modal-image").src = product.image;

      });
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;
      productContainer.appendChild(productImage);

      const nameElem = document.createElement("h3");
      nameElem.innerText = product.name;
      productContainer.appendChild(nameElem);
  
      
      const descElem = document.createElement("p");
      descElem.innerText = product.shortDescription;
      productContainer.appendChild(descElem);
      
      const priceElem = document.createElement("h4");
      priceElem.innerText = `Desde ${product.price}`;
      productContainer.appendChild(priceElem);

      productList.appendChild(productContainer);
    });
    return productList;
  }
  const productList = createProductList(products);
  document.body.appendChild(productList);
  
  document.querySelectorAll(".btn-products").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      const productContainers = document.querySelectorAll(".product-container");
      productContainers.forEach((container) => {
        container.style.display =
          container.dataset.category === category || category === "Show All"
            ? "flex"
            : "none";
      });
    });
  });
  

  
  const modalClose = document.getElementById("modal-close");

  // Crear un elemento de imagen
  const closeModalSVG = document.createElement("img");
  // Establecer la ruta del SVG en el atributo "src"
  closeModalSVG.src = "img/close-modal.svg";
  
  // Agregar el SVG al botón de cierre
  modalClose.appendChild(closeModalSVG);
  
  // Agregar un evento "click" al elemento "modal-close"
  modalClose.addEventListener("click", () => {
      // Al hacer clic en el botón, ocultar el modal estableciendo el estilo "display" en "none"
      document.getElementById("modal").style.display = "none";
  });

// Agregar un evento "click" al elemento "modal-content"
modalContent.addEventListener("click", (e) => {
  // Detener la propagación del evento, para evitar que el modal se cierre si se hace clic en el contenido
  e.stopPropagation();
});






