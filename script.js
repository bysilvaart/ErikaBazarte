class Product {
    constructor(name, price, description, category, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = `img/productos/${image}`;
    }
}

const products = [
    new Product("Collar", "$10.000", "Este es un collar artesanal", "Collares", "img_01.png"),
    new Product("Product 2", "$20", "Description 2", "Category 2", "img_01.png"),
    new Product("Product 3", "$30", "Description 3", "Category 3", "img_01.png"),
    new Product("Product 4", "$40", "Description 4", "Category 4", "img_01.png"),
    new Product("Polera", "$40.000", "Description 4", "Category 4", "img_01.png"),

];

function createProductList(productArray) {
    const productList = document.createElement("div");
    productList.id = "product-list";
    productArray.forEach((product) => {
      const productContainer = document.createElement("div");
      productContainer.classList.add("product-container");
      productContainer.setAttribute("data-category", product.category);
      productContainer.addEventListener("click", () => {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
        document.getElementById("modal-name").innerText = product.name;
        document.getElementById("modal-price").innerText = `Price: ${product.price}`;
        document.getElementById("modal-description").innerText = product.description;
        document.getElementById("modal-category").innerText = `Category: ${product.category}`;
      });
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;
      productContainer.appendChild(productImage);

      const nameElem = document.createElement("h3");
      nameElem.innerText = product.name;
      productContainer.appendChild(nameElem);
  
      const priceElem = document.createElement("p");
      priceElem.innerText = `Price: ${product.price}`;
      productContainer.appendChild(priceElem);
  
      const descElem = document.createElement("p");
      descElem.innerText = product.description;
      productContainer.appendChild(descElem);
  
      const categoryElem = document.createElement("p");
      categoryElem.innerText = `Category: ${product.category}`;
      productContainer.appendChild(categoryElem);
  
      productList.appendChild(productContainer);
    });
    return productList;
  }
  const productList = createProductList(products);
  document.body.appendChild(productList);
  
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      const productContainers = document.querySelectorAll(".product-container");
      productContainers.forEach((container) => {
        container.style.display =
          container.dataset.category === category || category === "Show All"
            ? "block"
            : "none";
      });
    });
  });
  

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      const productContainers = document.querySelectorAll(".product-container");
      productContainers.forEach((container) => {
        container.style.display =
          container.dataset.category === category || category === "Show All"
            ? "block"
            : "none";
      });
    });
  });
  
const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});


const showModal = (product) => {
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    const modalName = document.getElementById("modal-name");
    modalName.textContent = product.name;

    const modalPrice = document.getElementById("modal-price");
    modalPrice.textContent = product.price;

    const modalDescription = document.getElementById("modal-description");
    modalDescription.textContent = product.description;

    const modalCategory = document.getElementById("modal-category");
    modalCategory.textContent = product.category;

    const modalImage = document.getElementById("modal-image");
    modalImage.src = product.image;
    modalImage.alt = product.name;
    
};


