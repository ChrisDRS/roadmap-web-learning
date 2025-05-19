function temporizador(seg) {
    const timer = setInterval(() => {
      console.log(`Tiempo restante: ${seg} segundos...`);
      seg--;
    }, 1000);
  
    setTimeout(() => {
      clearInterval(timer);
      console.log(`Tiempo restante: 1 segundo`);
      console.log('Tiempo terminado!');
    }, seg * 1000); // Detiene el intervalo después de 'seg' segundos
  }
  
  temporizador(5);