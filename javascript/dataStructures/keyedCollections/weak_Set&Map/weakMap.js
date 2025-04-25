// Creamos un objeto "usuario"
let usuario = { nombre: "Cristian" };

// Creamos un WeakMap para asociar datos privados
let datosPrivados = new WeakMap();

// Asociamos datos sensibles al objeto sin modificarlo directamente
datosPrivados.set(usuario, { rol: "admin", permisos: ["editar", "eliminar"] });

// Accedemos a los datos
console.log(datosPrivados.get(usuario)); // { rol: "admin", permisos: [...] }

// Si eliminamos la referencia...
usuario = null;

// 🔥 datosPrivados automáticamente elimina la entrada relacionada cuando el objeto ya no existe