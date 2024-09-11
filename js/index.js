


async function getArtData() {
    try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        const artworks = data.data;

        const container = document.getElementById('artworks-container');
        container.innerHTML = '';

        artworks.forEach(artwork => {
            const artworkDiv = document.createElement('div');
            artworkDiv.className = 'artwork';

            const artworkTitle = document.createElement('h2');
            artworkTitle.textContent = artwork.title;
            artworkTitle.style.color = "#008080";

            const artworkArtist = document.createElement('p');
            artworkArtist.textContent = `Artist: ${artwork.artist_title}`;
            artworkArtist.style.color = '#000080';

            artworkDiv.appendChild(artworkTitle);
            artworkDiv.appendChild(artworkArtist);

            container.appendChild(artworkDiv);

           
        });

    } catch (error) {
        console.error('Error fetching artworks:', error);
    }
}

getArtData();
