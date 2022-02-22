console.log("connect")

function loadAlbum(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}

function displayAlbums(albums) {
        console.log(albums)
        const albumContainer = document.getElementById('albums');
        for (const album of albums) {
            const p = document.createElement('p');
            p.style.textAlign = 'center';
            p.innerHTML = `<img src=${album.url}`>;
            albumContainer.appendChild(p);
        }
    }

    loadAlbum()