const resultSection = document.querySelector("#results");
const buttonClick = document.querySelector("#send");

const url = "https://lamp.computerstudi.es/~Priyansh001/practice/product.json";

buttonClick.addEventListener("click",fetchResults);

function fetchResults(){

    fetch(url).then(response => response.json()).then(json => displayResults(json));
    console.log(url);
}

function displayResults(json){

    var arrayProducts = json.products;

    for (let i = 0; i < arrayProducts.length; i++) {
        // array[i];
        let article = document.createElement("article");
        let id = document.createElement("h2");
        let title = document.createElement("h3");
        let description = document.createElement("p");
        let price = document.createElement("p");
        let discountPercentage = document.createElement("p");
        let rating = document.createElement("p");
        let stock = document.createElement("p");
        let brand = document.createElement("p");
        let category = document.createElement("p");
        let thumbImage = document.createElement("img");

        id.textContent = arrayProducts[i].id;
        title.textContent = arrayProducts[i].description;
        description.textContent = arrayProducts[i].price;
        price.textContent = arrayProducts[i].id;
        discountPercentage.textContent = arrayProducts[i].discountPercentage;
        rating.textContent = arrayProducts[i].rating;
        stock.textContent = arrayProducts[i].stock;
        brand.textContent = arrayProducts[i].brand;
        category.textContent = arrayProducts[i].category;
        thumbImage.setAttribute("src",arrayProducts[i].thumbnail)

        article.appendChild(id);
        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(price);
        article.appendChild(discountPercentage);
        article.appendChild(rating);
        article.appendChild(stock);
        article.appendChild(brand);
        article.appendChild(category);
        article.appendChild(thumbImage);

        resultSection.appendChild(article);
        
    }

}

// <!-- "id": 1,
//       "title": "iPhone 9",
//       "description": "An apple mobile which is nothing like apple",
//       "price": 549,
//       "discountPercentage": 12.96,
//       "rating": 4.69,
//       "stock": 94,
//       "brand": "Apple",
//       "category": "smartphones",
//       "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//       "images": [
//         "https://i.dummyjson.com/data/products/1/1.jpg",
//         "https://i.dummyjson.com/data/products/1/2.jpg",
//         "https://i.dummyjson.com/data/products/1/3.jpg",
//         "https://i.dummyjson.com/data/products/1/4.jpg",
//         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//       ] -->