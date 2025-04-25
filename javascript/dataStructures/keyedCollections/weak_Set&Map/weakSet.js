// Creamos objetos
let archivo1 = { nombre: "documento.pdf" };
let archivo2 = { nombre: "imagen.png" };

// Creamos un WeakSet para marcar archivos procesados
let archivosProcesados = new WeakSet();

// Añadimos archivo1
archivosProcesados.add(archivo1);

console.log(archivosProcesados.has(archivo1)); // true
console.log(archivosProcesados.has(archivo2)); // false

// Eliminamos referencia
archivo1 = null;

// 🔥 El archivo procesado es eliminado del WeakSet automáticamente
