//NavBar

//gestionar la activación de elementos de la barra de navegación

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link =>{
    link.addEventListener('click',function(){
        //Eliminar la clase activate para todos los elementos
        navLinks.forEach(link=> link.classList.remove('active'));
        //Agregar la clase activate para el elemento seleccionado
        this.classList.add('active');
    })
});