


async function getData() {
    try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks/129884');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const res = await response.json();
        console.log(res);

    }
    catch (error) {
        console.log(error);
    }

}

getData()