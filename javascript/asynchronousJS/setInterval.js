function temporizador(seg){     // Se inicia la funcion de temporizador
    console.log(`Temporizador de: ${seg} segundos:`); // Se imprime el mensaje de inicio, antes que comience el intervalor
    let count = seg; // Variable contador para los segundos.
    // Aqui inicia el intervalo alojado en una constante.
    const timer = setInterval(()=>{ // Uso de set interval, primer argumento la funcion (flecha) del contador.
        count--; // Se restan los segundos a la variable contador.
        console.log(`Tiempo restante: ${count} segundos...`); // Se imprime el mensaje de tiempo restante (con el contador).
        // Condicion que detiene y limpia el intervalo una vez llegue a cero. 
        if(count<=0){ 
            console.log('Tiempo terminado!'); // Tambien imprime el mensaje de tiempo terminado.
            clearInterval(timer);
        }
    }, 1000); // Segundo parametro de la funcion setInterval, tiempo de espera.
    
}

temporizador(5);