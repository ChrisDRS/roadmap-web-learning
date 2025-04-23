document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const entrada = document.getElementById("entrada").value.trim();
    const cantidad = parseFloat(entrada);
  
    if (isNaN(cantidad)) {
      mostrarError("Esta entrada no es válida");
      return;
    }
  
    mostrarResultados(cantidad);
    limpiarFormulario();
  });
  
  function convertir(cantidad, tasa) {
    return (cantidad * tasa).toFixed(2);
  }
  
  function mostrarResultados(cantidad) {
    const euros = convertir(cantidad, 0.88);
    const yenes = convertir(cantidad, 143.07);
    const rupias = convertir(cantidad, 86.10);
  
    document.getElementById("salida").textContent = `Valor en USD: $${cantidad.toFixed(2)}`;
    document.getElementById("euros").textContent = `Valor en Euro: €${euros}`;
    document.getElementById("yenes").textContent = `Valor en Yenes: ¥${yenes}`;
    document.getElementById("rupias").textContent = `Valor en Rupia: ₹${rupias}`;
  }
  
  function mostrarError(mensaje) {
    document.getElementById("salida").textContent = mensaje;
    document.getElementById("euros").textContent = "";
    document.getElementById("yenes").textContent = "";
    document.getElementById("rupias").textContent = "";
  }
  
  function limpiarFormulario() {
    document.getElementById("entrada").value = "";
  }
  