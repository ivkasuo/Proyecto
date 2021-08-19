let usuario = document.getElementById("usuario");
let post    = document.getElementById("post");  

window.onload = function () {

    //Definimos la key en el local storage
    let localStorageKeyName = 'usuarios';

    //Carga de datos desde el local storage
    loadFromLocalStorage();

    document.querySelector("#btn-add").addEventListener('click', function () {               

        // Validacióm de condiciones
        if (usuario.value.length === 0 || post.value.length === 0) return;

        let user = {
            usuario: usuario.value,
            post: post.value            
        };

        usuario.value = '';
        post.value = '';  
      
        appendObjectToLocalStorage(user);
    })

    function appendObjectToLocalStorage(objetoUsuario) {
        let users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        users.push(objetoUsuario);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }

    function loadFromLocalStorage() {
        let users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName),
            publications = document.querySelector("#publications p");

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

       // Crear publicación
       publications.innerHTML = '';

       users.forEach(function (parameter, parameterTwo) {
           let divPost  = document.createElement("div");
           let divUsuario = document.createElement("div");           
           let divMensaje = document.createElement("div");        
          
               
           let divbtnDelete  = document.createElement("div");
           let buttonDelete = document.createElement("button");

           divUsuario.innerHTML = parameter.usuario;
           divMensaje.innerHTML = parameter.post;
           

           buttonDelete.textContent = 'Eliminar publicación';
           buttonDelete.className = 'btn btn-xs btn-danger';
           buttonDelete.addEventListener('click', function(){
               removeFromLocalStorage(parameterTwo);
           });

           divbtnDelete.appendChild(buttonDelete);
           divPost.appendChild(divUsuario);           
           divPost.appendChild(divMensaje);           
           divPost.appendChild(divbtnDelete);
           publications.appendChild(divPost);
       });
    }

    function removeFromLocalStorage(index){
        let users = [],
        dataInLocalStorage = localStorage.getItem(localStorageKeyName);
        users = JSON.parse(dataInLocalStorage);
        users.splice(index, 1);
        localStorage.setItem(localStorageKeyName, JSON.stringify(users));
        loadFromLocalStorage();
    }
}