function abrirRegalo(event){
    const image = event.currentTarget;
    image.src = 'imagen2.gif';

    const mensaje = document.querySelector('h1');
    mensaje.innerText = '¡Felicidades! Aquí esta tu pastel 🎉';

    
    image.removeEventListener('click', abrirRegalo);


}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);
 