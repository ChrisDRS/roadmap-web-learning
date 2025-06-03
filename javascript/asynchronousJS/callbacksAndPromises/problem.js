// --- Funciones Asíncronas Base (NO MODIFICAR ESTAS FUNCIONES) ---
function simularRegistroUsuario(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (nombre && nombre.length > 2) {
          console.log(`Usuario '${nombre}' registrado.`);
          resolve({ id: Math.floor(Math.random() * 1000), nombre: nombre });
        } else {
          reject("Error: Nombre de usuario inválido.");
        }
      }, 1500);
    });
  }
  
  function simularEnvioEmailConfirmacion(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.includes('@')) {
          console.log(`Email de confirmación enviado a: ${email}`);
          resolve("Email enviado.");
        } else {
          reject("Error: Formato de email inválido.");
        }
      }, 800);
    });
  }
  
  function simularAsignacionRol(userId, rol) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Rol '${rol}' asignado al usuario con ID: ${userId}`);
        resolve(`Rol asignado.`);
      }, 1000);
    });
  }
  // ------------------------------------------------------------------
  
  // --- COMPLETA EL CÓDIGO AQUÍ ABAJO ---
  
  // OPCIÓN 1: Usando .then() y .catch() con Promises
  function registrarUsuarioConPromises(nombreUsuario, emailUsuario) {
    console.log("\n--- INICIANDO REGISTRO CON PROMISES ---");
    // Paso 1: Registrar el usuario
    // ...
    
    // Paso 2: Enviar email de confirmación (usando el emailUsuario)
    // ...

    // Paso 3: Asignar un rol por defecto (ej. 'user') al usuario recién registrado (usando el userId)
    // ...

    // Manejar cualquier error en la cadena
    // ...
    
  }
  
  // OPCIÓN 2: Usando async/await
  async function registrarUsuarioConAsyncAwait(nombreUsuario, emailUsuario) {
    console.log("\n--- INICIANDO REGISTRO CON ASYNC/AWAIT ---");
    try {
      // Paso 1: Registrar el usuario
      // ...
      // Paso 2: Enviar email de confirmación
      // ...
      // Paso 3: Asignar un rol por defecto
      // ...
      console.log("¡Proceso de registro con Async/Await completado con éxito!");
    } catch (error) {
      console.error(`Falló el proceso de registro con Async/Await: ${error}`);
    }
  }
  
  // --- LLAMADAS PARA PROBAR LAS FUNCIONES (NO MODIFICAR ESTO) ---
  // Prueba de Promises (éxito)
  registrarUsuarioConPromises("Ana", "ana@example.com");
  
  // Prueba de Promises (error en email)
  // registrarUsuarioConPromises("Pedro", "pedro-mal-email");
  
  // Prueba de Async/Await (éxito)
  setTimeout(() => { // Pequeño retraso para separar las salidas en la consola
    registrarUsuarioConAsyncAwait("Juan", "juan@example.com");
  }, 4000);
  
  // Prueba de Async/Await (error en el nombre de usuario)
  // setTimeout(() => {
  //   registrarUsuarioConAsyncAwait("Jo", "jo@example.com"); // Nombre muy corto
  // }, 8000);
  