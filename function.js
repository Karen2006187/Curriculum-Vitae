document.getElementById('boton').onclick = function () {
    console.log("funcionaaaa");
    document.getElementById('nombre').innerHTML = "Periodista y escritora";
};

document.getElementById("boton2").onclick = function () {
    document.getElementById("sobremi").innerHTML = "Soy escritora hace más de cinco años, siempre en busca de nuevos proyectos relacionados o no al periodismo y a la escritura. Me considero una persona responsable, creativa y organizada.";
};

document.getElementById("enviarform").onclick = function () {
    alert("Formulario enviado");
};

// Evento para cuando la transición termine
document.getElementById("myDIV").addEventListener("transitionend", function () {
    document.getElementById("myDIV").style.backgroundColor = "violet";
});
