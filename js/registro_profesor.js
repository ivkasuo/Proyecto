const btnEnviar = document.getElementById('btn-enviar');

//Validador campos
const validate = (validador) => {
    validador.preventDefault();
    const nombre_usuario = document.getElementById('nombre');
    const apellido_usuario = document.getElementById('apellido');
    const input_usuario= document.getElementById('usuario');
    const correo_electronico = document.getElementById('email');
    const num_telefono = document.getElementById('telefono');
    const input_password = document.getElementById('password');
    const mensaje = document.getElementById('mensaje');
    const cedula_p = document.getElementById('cedula');
    const cedulaTipo = document.getElementById("cedula_tipo");

    //Validador nombre
    if (!nombre_valido(nombre.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un nombre válido',
          });
        nombre.focus();
        return false;
    }//Fin validador nombre

    //Validador apellido
    if (!apellido_valido(apellido.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un apellido válido',
          });
        apellido.focus();
        return false;
    } //Fin validador apellido 

    //Validador usuario
    if (!usuario_valido(usuario.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un usuario válido',
          });
       usuario.focus();
       return false;
    } //Fin validador usuario

       //Validador cedula
       if (!cedula_valido(cedula.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un numero de cedula valido',
          });
        cedula.focus();
        return false;
    } //Fin validador cedula
    
     //Validador teléfono
     if (!telefono_valido(telefono.value)) {
      Swal.fire({
          icon: 'warning',
          title: 'MENSAJE',
          text: 'Por favor, escribe un telefono válido',
        });
      telefono.focus();
      return false;
  } //Fin validador teléfono

      //Validador correo electrónico
    if (!correo_valido(email.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un correo electronico válido',
           });
        email.focus();
        return false;
    } //Fin validador correo electrónico    
  
    //Validador passwords   
    password = document.getElementById('password');
    repitePassword = document.getElementById('repitePassword');
    
    if (password.value != repitePassword.value) {       
        Swal.fire({
          icon: 'warning',
          title: 'MENSAJE',
          text: 'Por favor, verifica que tu contraseña sea la misma',
        });
      password.focus(); 
      return false;
    } //Fin validador passwords
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
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

    document.getElementById("contact-form").reset();

      let user = {
        nombre: nombre_usuario.value,
        userType: "profesor",
        apellido: apellido_usuario.value,
        usuario: input_usuario.value,
        cedula: cedula_p.value,
        cedulaTipo: cedulaTipo.value,
        correo_electronico: correo_electronico.value,
        num_telefono: num_telefono.value,
        password: input_password.value,
      }

      appendObjectToLocalStorage(user);

    return true;



}
//Fin validador campos

/*function saveInStorage(){
    let nombre= document.getElementById("nombre");
    localStorage.setItem("nombre", nombre.value);

    let apellido= document.getElementById("apellido");
    localStorage.setItem("apellido", apellido.value);

    let usuario= document.getElementById("usuario");
    localStorage.setItem("usuario", usuario.value);

    let telefono= document.getElementById("telefono");
    localStorage.setItem("telefono", telefono.value);

    let email= document.getElementById("email");
    localStorage.setItem("email", email.value);    

    let password= document.getElementById("password");
    localStorage.setItem("password", password.value);  

    let cedula= document.getElementById("cedula");
    localStorage.setItem("cedula", cedula.value);
}*/

function appendObjectToLocalStorage(object){
    let users = [],
    dataInLocalStorage = localStorage.getItem('users');
  
    if (dataInLocalStorage !== null) 
    {
    users = JSON.parse(dataInLocalStorage);
    }
    users.push(object);
    localStorage.setItem('users', JSON.stringify(users));
  }
  

//Declaración constantes para regex
const nombre_valido = nombre => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(nombre);
}

const apellido_valido = apellido => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(apellido);
}

const usuario_valido = usuario => {
  return /^[a-zA-Z0-9-_.]+$/u.test(usuario);
}
const cedula_valido = cedula => {
    return /^\d{2}\d{8}$/.test(cedula);
}

const correo_valido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

const telefono_valido = telefono => {
    return /^\d{2}\d{8}$/.test(telefono);
}


btnEnviar.addEventListener('click', validate);