// Consigue todos los elementos que tienen la clase .ver-mas
let links = document.querySelectorAll(".ver-mas");
//console.log(links);

// Recorre todos los elementos para ejecutar acciones en cada uno de ellos
links.forEach(function(link){
    
    // Agrega un evento click a cada uno de los elementos
    link.addEventListener("click", function(evento){
        evento.preventDefault();

        // Quita las clases de animación que ya tiene el elemento
        let content = document.querySelector(".content");
        content.classList.remove("animate__animated", "animate__fadeInDown");

        // Se añaden las clases que animan la salida del elemento
        content.classList.add("animate__animated", "animate__fadeOutUp");

        // Para ir a una dirección concreta
        // location.href = "/tablas/index.html"; 

        // Recargar la página
        setTimeout(function(){
            location.reload();
        }, 700);

        

        return false;
    });
});

