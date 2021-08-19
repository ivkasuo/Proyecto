  // Tomamos el valor de sessionStorage y localStorage de la siguiente manera:
  $("#id-usr").text(sessionStorage.usuario);
  $("#id-usr2").text(sessionStorage.usuario);
  /*   $("#id-pwd").text(localStorage.password);  */

  $("#btnSalir").click(function(){
  // Con el metodo Clear limpiamos todo lo que tengamos en sessionStorage o localStorage 
  sessionStorage.clear();
  localStorage.clear();
  window.location="iniciar-sesion.html";
  });