//Localstorage feltöltése teszt adatokkal ha nem letezik még
const predefproducts = [
  {
    id: 1,
    name: "Bambusz fogkefe",
    description:
      "Környezetbarát bambusz nyéllel készült fogkefe, lebomló anyagokból. Ideális választás a műanyag fogkefék kiváltására.",
    price: 1490,
    imageBase64: "data:image/png;base64,PLACEHOLDER_BAMBUSZ_FOGKEFE",
  },
  {
    id: 2,
    name: "Újrahasznosított bevásárlótáska",
    description:
      "Strapabíró, újrahasznosított anyagból készült bevásárlótáska. Többször használható és könnyen tisztítható.",
    price: 2990,
    imageBase64: "data:image/png;base64,PLACEHOLDER_TASAKA",
  },
  {
    id: 3,
    name: "Rozsdamentes acél kulacs (750 ml)",
    description:
      "Hőtartó, BPA-mentes kulacs hideg és meleg italokhoz. Ideális sporthoz, iskolába vagy munkába.",
    price: 4990,
    imageBase64: "data:image/png;base64,PLACEHOLDER_KULACS",
  },
  {
    id: 4,
    name: "Méhviaszos ételcsomagoló szett",
    description:
      "Természetes alternatíva a műanyag fólia helyett. Többször használható és könnyen tisztítható.",
    price: 3490,
    imageBase64: "data:image/png;base64,PLACEHOLDER_MEHVIASZ",
  },
  {
    id: 5,
    name: "Szójaviasz illatgyertya",
    description:
      "Kézzel készült, természetes szójaviaszból. Hosszú égési idő, kellemes levendula illattal.",
    price: 3990,
    imageBase64: "data:image/png;base64,PLACEHOLDER_GYERTYA",
  },
];

const url = "data:image/png;base64,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"

function containsPreloadedItems(){
  const products = JSON.parse(localStorage.getItem("products") || "null");
  var contains = false;
  if (products !== null && products.length > 0) {
    products.forEach((element) => {
      console.log(element.id);
      if (element.id == "1"|| element.id == "2" || element.id == "3" || element.id == "4" || element.id == "5") {
        contains = true;
      }
    });
  }
  console.log(contains)
  return contains;
};

function FillLocalStorage() {
  const body = document.querySelector("body");

  const products = JSON.parse(localStorage.getItem("products") || "null");
  console.log(products);
  if (containsPreloadedItems() === false || products === null) {
    console.log("LS nem tartalmaz predefiniált termékeket, feltöltés...");
    const fr = new FileReader();
    predefproducts.forEach((element) => {
      console.log("Hozzáadás:", element);
      const newProduct = {
        id: element.id,
        name: element.name,
        description: element.description,
        price: element.price,

        imageBase64: url,
      };

      const products = JSON.parse(localStorage.getItem("products") || "[]");
      products.push(newProduct);

      localStorage.setItem("products", JSON.stringify(products));

      console.log("Product saved:", newProduct, products);
      return newProduct;
    });
  } else {
    console.log(
      "LS már tartalmaz predefiniált termékeket,"
    );
    return;
  }
}
