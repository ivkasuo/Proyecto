//Definimos unas cuantas variables necesarias
const postArea = document.getElementById("feed"),
      botonPost = document.getElementById("post_button"),
      post = document.getElementById("post_textarea"),
      nombre = document.getElementById("nombre"),
      form = document.getElementById("post_form");

window.onload = function (){
	saveInStorage();    
	botonPost.addEventListener("click", (e) => {    
		if (nombre.value == "" || post.value == "") {
			e.preventDefault();
			window.alert("Por favor llena el formulario");
		} else {
			postArea.insertAdjacentHTML('beforeend', 
			`<div class = "card mt-2" style = "max-width: 456px;">
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
		}          
			let user = {
			nombre: nombre.value,                
			post: post.value
			};            

			nombre.value = '';
			post.value = '';

			appendObjectToLocalStorage(user);
		}
	)

	function appendObjectToLocalStorage(object){
		let users = [],
		dataInLocalStorage = localStorage.getItem('users');

		if (dataInLocalStorage !== null) 
		{
		users = JSON.parse(dataInLocalStorage);
		}
		users.push(object);
		localStorage.setItem('users', JSON.stringify(users));
		saveInStorage();
	}

	function saveInStorage(){
		let users = [],      
		postSection = document.querySelector('section');
		users.forEach(function (parameter){
			let card = document.createElement("card-body"),
			cardName = document.createElement("card-title"),
			cardPost = document.createElement("card-text");

			cardName.innerHTML = parameter.nombre;
			cardPost.innerHTML = parameter.post;               

			card.appendChild(cardName);
			card.appendChild(cardPost);            

			postSection.appendChild(card);
		}
		);
	}
}
