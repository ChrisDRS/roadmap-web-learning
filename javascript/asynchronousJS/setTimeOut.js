function temporizador(seg) {
    // `setInterval` ejecuta la función interna repetidamente.
    // Aquí, se usa para mostrar la cuenta regresiva cada 1000ms (1 segundo).
    const timer = setInterval(() => {
      console.log(`Tiempo restante: ${seg} segundos...`);
      seg--; // Decrementa 'seg' para la siguiente iteración de la cuenta regresiva.
    }, 1000); // El intervalo es de 1 segundo.
  
    // `setTimeout` ejecuta la función interna UNA SOLA VEZ después de un retardo especificado.
    // Aquí, se programa para que se ejecute cuando el tiempo total del temporizador ('seg' original) haya pasado.
    setTimeout(() => {
      // Esta función se ejecuta una vez que transcurren 'seg' (valor original) segundos.
      clearInterval(timer); // Detiene el `setInterval` para que no siga mostrando la cuenta.
      console.log(`Tiempo restante: 1 segundo`);
      console.log('Tiempo terminado!');
    }, seg * 1000); // El retardo es 'seg' (valor original al llamar la función) multiplicado por 1000ms.
                     // Efectivamente, esto detiene el intervalo `timer` después de 'seg' segundos.
  }
  
  temporizador(5);