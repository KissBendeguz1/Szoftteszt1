function deleteProduct() {
  const pruducts = JSON.parse(localStorage.getItem("products"));
  const productId = event.target.parentElement.parentElement.id;
  console.log("Deleting product with ID:", productId);
  for (let index = 0; index < pruducts.length; index++) {
    console.log(pruducts[index]);
    const element = pruducts[index];
    if (pruducts[index].id == productId) {
      console.log(pruducts[index]);
      pruducts.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(pruducts));
      location.reload();
    }
  }
}

function ShowContainer() {
  const container = document.getElementById("modifyBannerContainer");
  container.style.display = "block";
  const modifyName = document.getElementById("ModifyProductName");
  const modifyDescription = document.getElementById("ModifyProductDescription");
  const modifyPrice = document.getElementById("ModifyProductPrice");
  const modifyImage = document.getElementById("ModifyProductImage");
  const productId = event.target.parentElement.parentElement.id;
  const fixProductId = [...productId];
  console.log("Modifying product with ID:", productId);
  modifyName.value = event.target.parentElement.parentElement.querySelector(
    ".classDescription h3"
  ).textContent;
  modifyDescription.value =
    event.target.parentElement.parentElement.querySelector(
      ".classDescription p"
    ).textContent;
  modifyPrice.value = event.target.parentElement.parentElement
    .querySelector(".cardPrice p")
    .textContent.replace(" Ft", "");

  const modifyButton = document.getElementById("modifyButton");
  modifyButton.addEventListener("click", function () {
    const pruducts = JSON.parse(localStorage.getItem("products"));
    console.log("Modifying product with ID:", productId);
    for (let index = 0; index < pruducts.length; index++) {
      console.log(pruducts[index]);

      if (pruducts[index].id == productId) {
        console.log(pruducts[index]);
        const element = pruducts[index];
        const newName = modifyName.value;
        const newDescription = modifyDescription.value;
        const newPrice = modifyPrice.value;
        const newImageFile = modifyImage.files[0];
        const fr = new FileReader();
        if (newImageFile != undefined || null) {
          fr.readAsDataURL(newImageFile);
          fr.onload = function () {
            var newImageBase64 = fr.result;
            element.name = newName;
            element.description = newDescription;
            element.price = parseFloat(newPrice);
            element.imageBase64 = newImageBase64 || element.imageBase64;
            const products = JSON.parse(localStorage.getItem("products"));
            products[index] = element;
            localStorage.setItem("products", JSON.stringify(products));
            closeModifyBanner();
            location.reload();
          };
        } else {
          element.name = newName;
          element.description = newDescription;
          element.price = parseFloat(newPrice);

          const products = JSON.parse(localStorage.getItem("products"));
          products[index] = element;
          localStorage.setItem("products", JSON.stringify(products));
          closeModifyBanner();
          location.reload();
        }
      }
    }
  });
}

function closeModifyBanner() {
  const container = document.getElementById("modifyBannerContainer");
  container.style.display = "none";
}
