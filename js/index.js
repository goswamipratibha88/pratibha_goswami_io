
async function fetchProducts() {
    try {
        const response = await fetch('https://api.artic.edu/api/v1/products?limit=6');
        const data = await response.json();

        if (data && data.data) {
            displayProducts(data.data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayProducts(productData) {

    const container = document.getElementById('product-container');
    container.innerHTML = '';

    productData.forEach(product => {

        const productDiv = document.createElement('div');
        productDiv.className = 'product-piece';

        const prodTitle = document.createElement('h3');
        prodTitle.innerText = "Name:  " + product.title;

        const prodImage = document.createElement('img');
        prodImage.src = product.image_url;
        prodImage.alt = product.title || 'Product Image';

        const prodPrice = document.createElement('p');
        prodPrice.innerText = "Price:  $" + product.min_current_price;

        productDiv.appendChild(prodTitle);
        productDiv.append(prodImage);
        productDiv.appendChild(prodPrice);
        container.appendChild(productDiv);
    });

}

// fetchProducts() - To display products under product tab

fetchProducts();

let currentPage = 1;

async function fetchArtworks(page) {
    try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=10`);
        const data = await response.json();

        return data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function displayArtworks() {
    const arts = await fetchArtworks(currentPage);
    const container = document.getElementById('artworks-container');
    container.innerHTML = '';
    arts.forEach(art => {

        const artDiv = document.createElement('div');
        artDiv.className = 'art-piece';

        const title = document.createElement('h2');
        title.innerText = art.title || 'Untitled';

        //ID cn be used to display image id
        // const ID = document.createElement('h2');
        // ID.innerText = art.image_id|| 'Untitled';

        const artistDisplay = document.createElement('p');
        artistDisplay.innerText = art.artist_display;

        const image = document.createElement('img');
        image.src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
        image.alt = art.title || 'Artwork Image';

        if (art.title !== 'Untitled') {

            artDiv.appendChild(image);
            artDiv.appendChild(title);
            artDiv.appendChild(artistDisplay);
            container.appendChild(artDiv);
        }

    });

}

//For Next Button
document.getElementById('nextPageButton').addEventListener('click', () => {
    currentPage++;
    displayArtworks();
});

//For Back button
document.getElementById('backPageButton').addEventListener('click', () => {
    currentPage--;
    displayArtworks();
});

//displayArtworks() - To display art details under artworks tab
displayArtworks();
