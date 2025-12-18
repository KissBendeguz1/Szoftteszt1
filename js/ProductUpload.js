// Upload function now handles file conversion and stores base64 in localStorage
const button = document.getElementById("uploadButton");
const imageInput = document.getElementById("productImage");
button.addEventListener("click", () => {
  const fr = new FileReader();

  fr.readAsDataURL(imageInput.files[0]);
  const url = fr.addEventListener("load", () => {
    var url = fr.result;
    console.log(url);


      const name = document.getElementById("productName").value;
      const description = document.getElementById("productDescription").value;
      const price = document.getElementById("productPrice").value;

      const newProduct = {
        id: Date.now(),
        name: name,
        description: description,
        price: parseFloat(price) || 0,

        imageBase64: url,
      };

      const products = JSON.parse(localStorage.getItem("products") || "[]");
      products.push(newProduct);
      
      localStorage.setItem("products", JSON.stringify(products));

      console.log("Product saved:", newProduct, products);
      return newProduct;
    }
  )});



