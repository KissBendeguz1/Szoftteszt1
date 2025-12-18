const products = JSON.parse(localStorage.getItem("products")) || [];

function LoadProduct(product) {
  // Get the container
  const cardContainer = document.getElementById("cardContainer");

  // Create main card div
  const card = document.createElement("div");
  card.className = "card";
  card.id = product.id;

  // Image
  const img = document.createElement("img");
  img.className = "cardImage";
  img.src = product.imageBase64;
  img.alt = "";

  // Description
  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "classDescription";

  const nameHeader = document.createElement("h3");
  nameHeader.textContent = product.name;
  descriptionDiv.appendChild(nameHeader);

  const descriptionText = document.createElement("p");
  descriptionText.textContent = product.description;

  descriptionDiv.appendChild(descriptionText);

  // Price
  const priceDiv = document.createElement("div");
  priceDiv.className = "cardPrice";

  const priceText = document.createElement("p");
  priceText.textContent = product.price + " Ft";

  priceDiv.appendChild(priceText);

  // Button
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "cardButton";

  const link = document.createElement("a");
  link.href = "";
  link.textContent = "Vásárlás";

  const deleteLink = document.createElement("a");
  deleteLink.setAttribute("onclick", "deleteProduct()");
  deleteLink.onclick 
  deleteLink.textContent = "Törlés";

  modifyLink = document.createElement("a");
  modifyLink.setAttribute("onclick", "ShowContainer()");
  modifyLink.textContent = "Módosítás";

  buttonDiv.appendChild(link);
  buttonDiv.appendChild(deleteLink);
  buttonDiv.appendChild(modifyLink);

  // Assemble card
  card.appendChild(img);
  card.appendChild(descriptionDiv);
  card.appendChild(priceDiv);
  card.appendChild(buttonDiv);

  cardContainer.appendChild(card);
}

function LoadTopProducts() {
  console.log(products);
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    LoadProduct(element, cardContainer);
  }
}
