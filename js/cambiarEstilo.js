// Autor: Claudia Souza
// Función para cambiar el color al pulsar el botón, para pasar de
// modo claro a oscuro o viceversa
function cambiarEstilo(boton) {
    if (boton === "boton1") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");

    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");

    }
    printValue();
}