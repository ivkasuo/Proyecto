let postArea = document.getElementById("feed");
let botonPost = document.getElementById("post_button");
botonPost.addEventListener('click', function() {
    let nombre = window.prompt("Escribe tu nombre");
    let post = window.prompt("Escribe tu post");
    postArea.insertAdjacentHTML('beforeend', `
        <div class = "card" style = "width: 18rem;">
            <div class = "card-body">
                <div class = "card-title">
                    <strong>${nombre}</strong>
                </div>
                <div class = "card-text">
                    <p>${post}</p>
                </div>
            </div>
            
        </div>
    `)
})