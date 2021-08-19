//Definimos unas cuantas variables necesarias
let postArea = document.getElementById("feed");
let botonPost = document.querySelector("post_button");
let post = document.getElementById("post_textarea");
let nombre = document.getElementById("nombre");
//Declaración constantes para regex
const nombre_valido = nombre => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(nombre);
}
//NOTA 3: BUSCAR REGEX CORRECTO PARA MENSAJE
const mensaje_valido = mensaje => {
	return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(mensaje);
  }
window.onload = function (){
	saveInStorage();    
	botonPost.addEventListener('click', function(){    
		 //Incio de validador nombre de usuario
		 if (!nombre_valido(nombre.value)) {
			Swal.fire({
				icon: 'warning',
				title: 'ALERTA',
				text: 'Por favor, escribe un nombre de usuario válido',
			  });
			nombre.focus();
			return false;
		}//Fin de validador nombre de usuario 

		//Validador mensaje NOTA 2: BUSCAR UN VALIDADOR CORRECTO PARA MENSAJE
		if (!mensaje_valido(post.value)) {
			Swal.fire({
				icon: 'warning',
				title: 'ALERTA',
				text: 'Por favor, es necesario escribir un mensaje',
			  });
			post.focus();
			return false;
		} //Fin validador mensaje
		
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 1000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.addEventListener('mouseenter', Swal.stopTimer)
			  toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		  })      
		  Toast.fire({
			icon: 'success',
			title: 'Datos enviados exitosamente'
		  })
		

			postArea.insertAdjacentHTML('afterend', 
			`<center>
			<div class = "card mt-2" style = "width: 18rem;">
				<div class = "card-body">
					<div class = "card-title">
						<strong>${nombre.value} dice:</strong>
					</div>

					<p class = "card-text ms-3">${post.value}</p>

					<button class = "btn btn-dark btn-block" >Like</button> 
					<button class = "btn btn-primary" >Comentar</button>					
				</div> 
			</div>
			</center>
			`
			)
		

			if (nombre.value.length === 0 || post.value.length === 0 ) return;          
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