# Asynchronous JavaScript: Callbacks, Promises y Async/Await

Para construir aplicaciones web modernas y reactivas, es esencial entender cómo JavaScript maneja las operaciones que no se ejecutan instantáneamente. Aquí es donde entran los Callbacks, Promises y Async/Await.

## 1. Callbacks

Una función callback (función de devolución de llamada) es una función que se pasa como argumento a otra función, para que se "llame de vuelta" y se ejecute después de que la función principal haya terminado alguna operación, o después de que un evento haya ocurrido. Son una forma fundamental de manejar la asincronía en JavaScript, aunque pueden llevar a problemas en escenarios complejos.

### Ejemplo

```javascript
function procesarDato(dato, callback) {
  console.log(`Procesando el dato: ${dato}`);
  // Simular una operación asíncrona (ej. una llamada a una API)
  setTimeout(() => {
    const resultado = dato.toUpperCase();
    callback(resultado); // Se llama a la función callback una vez que el "procesamiento" termina
  }, 1000);
}

function mostrarResultado(res) {
  console.log(`El resultado final es: ${res}`);
}

procesarDato("hola mundo", mostrarResultado); // Pasamos 'mostrarResultado' como callback
```

Salida esperada:
```text
Procesando el dato: hola mundo
(Después de 1 segundo)
El resultado final es: HOLA MUNDO
```

En este ejemplo, mostrarResultado es el callback que se ejecuta solo después de que procesarDato ha completado su simulación asíncrona de 1 segundo.

## 2. Callback Hell (Pirámide de la Condena)

El "Callback Hell" (también conocido como "Pirámide de la Condena") ocurre cuando se anidan múltiples funciones callback, una dentro de otra, para manejar secuencias de operaciones asíncronas dependientes. Esto resulta en un código difícil de leer, entender y mantener.

### Ejemplo de Callback Hell

```javascript
function paso1(callback) {
  setTimeout(() => {
    console.log('Paso 1 completado');
    callback(null, 'Dato del paso 1');
  }, 1000);
}

function paso2(datoPaso1, callback) {
  setTimeout(() => {
    console.log(`Paso 2 completado con: ${datoPaso1}`);
    callback(null, 'Dato del paso 2');
  }, 1000);
}

function paso3(datoPaso2, callback) {
  setTimeout(() => {
    console.log(`Paso 3 completado con: ${datoPaso2}`);
    callback(null, 'Dato del paso 3');
  }, 1000);
}

// Anidamiento que lleva al Callback Hell
paso1((error1, dato1) => {
  if (error1) {
    console.error(error1);
    return;
  }
  paso2(dato1, (error2, dato2) => {
    if (error2) {
      console.error(error2);
      return;
    }
    paso3(dato2, (error3, dato3) => {
      if (error3) {
        console.error(error3);
        return;
      }
      console.log(`Todos los pasos completados. Resultado final: ${dato3}`);
    });
  });
});
```

Este anidamiento progresivo forma una estructura similar a una pirámide, haciendo el código propenso a errores y difícil de depurar.

## 3. Promises

Las Promises (Promesas) son objetos en JavaScript que representan la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Proporcionan una alternativa más organizada y legible a los callbacks anidados, ayudando a evitar el Callback Hell. Una Promesa puede estar en uno de estos estados:

*   `pending` (pendiente): El estado inicial; ni cumplida ni rechazada.
*   `fulfilled` (cumplida): La operación asíncrona se completó con éxito.
*   `rejected` (rechazada): La operación asíncrona falló.

Las Promesas permiten encadenar operaciones asíncronas utilizando los métodos `.then()` para el éxito y `.catch()` para manejar errores.

### Ejemplo

```javascript
function operacionAsincrona(parametro) {
  return new Promise((resolve, reject) => { // La función retorna una Promesa
    setTimeout(() => {
      if (parametro === 'exito') {
        resolve('Dato procesado con éxito'); // Si todo va bien, se resuelve la Promesa
      } else {
        reject('Error al procesar el dato'); // Si hay un error, se rechaza la Promesa
      }
    }, 1500);
  });
}

// Consumiendo la Promesa:
operacionAsincrona('exito')
  .then(resultado => { // .then() se ejecuta si la Promesa se resuelve
    console.log(`Éxito: ${resultado}`);
    return operacionAsincrona('otro exito'); // Encadenamiento de Promesas
  })
  .then(segundoResultado => {
    console.log(`Segundo éxito: ${segundoResultado}`);
  })
  .catch(error => { // .catch() se ejecuta si alguna Promesa en la cadena se rechaza
    console.error(`Error: ${error}`);
  });

operacionAsincrona('fallo')
  .then(resultado => {
    console.log(`Éxito: ${resultado}`);
  })
  .catch(error => {
    console.error(`Error en la segunda llamada: ${error}`); // Este se ejecutará
  });
```

## 4. async/await

`async/await` es una sintaxis moderna de JavaScript construida sobre las Promesas, que permite escribir código asíncrono que se ve y se comporta de manera más síncrona, haciéndolo más fácil de leer y depurar.

Una función declarada con `async` siempre devuelve una Promesa.

La palabra clave `await` solo puede ser usada dentro de una función `async` y hace que JavaScript "espere" hasta que una Promesa se resuelva.

### Ejemplo

```javascript
function simularPeticionAPI(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Obteniendo datos para el ID: ${id}`);
      resolve(`Datos del usuario ${id}`);
    }, 1000);
  });
}

async function obtenerUsuarioYPublicaciones(userId) { // Se declara como async
  try {
    console.log('Iniciando la búsqueda de usuario...');
    const usuario = await simularPeticionAPI(userId); // await espera a que la promesa se resuelva
    console.log(`Usuario obtenido: ${usuario}`);

    console.log('Ahora obteniendo publicaciones...');
    const publicaciones = await simularPeticionAPI(`${userId}/publicaciones`); // await para otra promesa
    console.log(`Publicaciones obtenidas: ${publicaciones}`);

    return { usuario, publicaciones };
  } catch (error) {
    console.error(`Ocurrió un error: ${error}`);
  }
}

obtenerUsuarioYPublicaciones(123)
  .then(data => {
    if (data) {
      console.log('Proceso de obtención finalizado:', data);
    }
  });

console.log('Solicitud de usuario enviada (esto se ejecuta antes que la respuesta asíncrona)');
```

En este ejemplo, await pausa la ejecución de obtenerUsuarioYPublicaciones hasta que simularPeticionAPI resuelva su Promesa. Esto hace que el flujo de control sea mucho más lineal y fácil de seguir, similar al código síncrono.

## Ejercicio de Práctica: Secuencia Asíncrona con Promesas y Async/Await

### Problema

Vas a simular una secuencia de pasos para registrar a un nuevo usuario en una aplicación. Cada paso es una operación asíncrona que tarda un tiempo.

### Tu Tarea

Completa las funciones asíncronas y el código principal para que se ejecuten en el orden correcto y manejen los errores.

### Funciones Asíncronas Base (NO MODIFICAR)

```javascript
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
```

### Completa el Código Aquí Abajo

#### OPCIÓN 1: Usando `.then()` y `.catch()` con Promises
```javascript
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
```

#### OPCIÓN 2: Usando `async/await`
```javascript
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
```

### Llamadas para Probar las Funciones (NO MODIFICAR)

```javascript
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
```

### Instrucciones para el ejercicio

*   Completa la función `registrarUsuarioConPromises`: Utiliza `.then()` para encadenar las llamadas a `simularRegistroUsuario`, `simularEnvioEmailConfirmacion` y `simularAsignacionRol`. Asegúrate de pasar los datos correctos entre las Promesas y usa `.catch()` al final para manejar cualquier error que pueda ocurrir en cualquiera de los pasos.

*   Completa la función `registrarUsuarioConAsyncAwait`: Dentro del bloque `try`, utiliza `await` para esperar la resolución de cada una de las Promesas (`simularRegistroUsuario`, `simularEnvioEmailConfirmacion`, `simularAsignacionRol`). El bloque `catch` ya está implementado para manejar los errores.

Prueba los casos de éxito y error descomentando las líneas de prueba.

¡Mucha suerte con el ejercicio! Esto te ayudará a solidificar el conocimiento de cómo manejar la asincronía en JavaScript de manera efectiva.