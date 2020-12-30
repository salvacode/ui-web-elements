 
let ca = document.querySelector('#gastronomia');

ca.addEventListener('click', () => {
    let fca = ca.dataset.gastronomia = "Española";
    alert("El atributo data-gastronomia del botón cambió a " + fca);
});

/* Set with custom attribute with jQuery*/
// let emp = $('li[data-postre="Arroz con leche"]').hide();
