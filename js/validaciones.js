const btnEnviar = document.getElementById('btn-enviar');
const validate = (validador) => {
    validador.preventDefault();
    const nombre_usuario = document.getElementById('nombre');
    const apellido_usuario = document.getElementById('apellido');
    const correo_electronico = document.getElementById('email');
    const num_telefono = document.getElementById('telefono');
    const mensaje = document.getElementById('mensaje');

    if (nombre.value === "") {
        alert("Ingresa tu nombre");
        nombre.focus();
        return false;
    }

    if (apellido.value === "") {
        alert("Ingresa tu apellido");
        apellido.focus();
        return false;
    }

    if (email.value === "") {
        alert("Ingresa tu correo electrónico");
        email.focus();
        return false;
    }

    if (telefono.value === "") {
        alert("Ingresa tu número telefónico");
        telefono.focus();
        return false;
    }

    if (mensaje.value === "") {
        alert("Deja un mensaje, por favor!");
        mensaje.focus();
        return false;
    }


    //validador nombre
    if (!nombre_valido(nombre.value)) {
        alert("Por favor, escribe un nombre válido");
        nombre.focus();
        return false;
    } // fin validador nombre

    //validador apellido
    if (!apellido_valido(apellido.value)) {
        alert("Por favor, escribe un apellido válido");
        apellido.focus();
        return false;
    } // fin validador apellido

    //validador teléfono
    if (!telefono_valido(telefono.value)) {
        alert("Por favor, escribe un teléfono válido");
        telefono.focus();
        return false;
    } // fin validador teléfono

    //validador correo electrónico
    if (!correo_valido(email.value)) {
        alert("Por favor, escribe un correo electrónico válido");
        email.focus();
        return false;
    } // fin validador correo electrónico

    alert("Datos enviados correctamente");
    return true;
}

//declaración constantes
const nombre_valido = nombre => {
    return /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(nombre);
}

const apellido_valido = apellido => {
    return /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(apellido);
}

const telefono_valido = telefono => {
    return /^\d{2}[-]\d{8}$/.test(telefono);
}

const correo_valido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


btnEnviar.addEventListener('click', validate);