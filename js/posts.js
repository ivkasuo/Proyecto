//Definimos unas cuantas variables necesarias
let postArea = document.getElementById("feed");
let botonPost = document.getElementById("post_button");
let post = document.getElementById("post_textarea");
let nombre = document.getElementById("nombre");

//Función que postea cuando clickeas al botón "Publicar"
botonPost.addEventListener('click', function() {   
    postArea.insertAdjacentHTML('beforeend', 
    `<div class = "card mt-2" style = "width: 18rem;">
        <div class = "card-body">
            <div class = "card-title">
                <strong>${nombre.value} dice:</strong>
            </div>
            <hr>
            <p class = "card-text ms-3">${post.value}</p>
            <hr>
            <button class = "btn btn-light">Like</button>
            <button class = "btn btn-light">Comentar</button>
        </div> 
     </div>`
     )
})