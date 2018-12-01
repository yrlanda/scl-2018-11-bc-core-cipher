window.onload = () => {
    const box_mensaje = document.getElementById('mensaje');
    const box_offset = document.getElementById('desplazamientos');


    document.getElementById('codificar').addEventListener('click', (evento) => {
        evento.preventDefault();
        let entrada = box_mensaje.value;
        let offset = parseInt(box_offset.value);

        console.log(cipher.encode(entrada, offset));

    });

    document.getElementById('decodificar').addEventListener('click', (evento) => {
        evento.preventDefault();

        let entrada = box_mensaje.value;
        let offset = parseInt(box_offset.value);

        console.log(cipher.decode(entrada, offset));


    });
}


