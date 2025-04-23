# 🎯 Miniproyecto: Validador y Formateador de Datos de Usuario

## 📋 Objetivo
Desarrollar un pequeño programa en JavaScript que reciba datos simulados de usuarios (como si vinieran de un formulario) y los procese adecuadamente usando conversión de tipos.

## 🧠 Conceptos a aplicar
- Type Conversion vs Coercion
- Implicit Type Casting
- Explicit Type Casting
- Verificación de tipos con `typeof`

## 📝 Instrucciones

1. Simula un formulario que devuelve datos como strings:
   - nombre: string
   - edad: string (pero debe convertirse a número)
   - suscrito: string `"true"` o `"false"` (debe convertirse a booleano)
   - ingresos: string numérico o vacío (debe convertirse a número o `null`)
   - aceptoTérminos: número (`1` o `0`) que se convierte en booleano

2. Crea una función `procesarUsuario(datos)` que reciba un objeto con esas propiedades y:
   - Aplique **type casting explícito** a los datos.
   - Use `typeof` para validar que el tipo final sea el correcto.
   - Use algún ejemplo de **coerción implícita** dentro del proceso (por ejemplo, sumar una string + número).

3. Muestra en consola el resultado como un nuevo objeto con tipos corregidos:
   ```js
   {
     nombre: 'Cristian',
     edad: 22,
     suscrito: true,
     ingresos: 1500,
     aceptoTerminos: true
   }
