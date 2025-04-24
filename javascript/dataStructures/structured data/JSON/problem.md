### 🔎 Objetivo
Simular un formulario que captura los datos de un usuario, los convierte a formato JSON y los almacena en `localStorage`, luego los recupera y los muestra.

### 📄 Requisitos

1. Crear un formulario con los siguientes campos:
   - nombre
   - edad
   - correo
   - intereses (separados por comas)

2. Al enviar el formulario:
   - Captura los datos con JavaScript
   - Transforma los datos a un objeto JavaScript
   - Convierte el objeto a JSON usando `JSON.stringify()`
   - Almacena el resultado en `localStorage`

3. Luego, usando `JSON.parse()`:
   - Recupera los datos del `localStorage`
   - Muestra los datos convertidos en pantalla dentro de un `<pre>`

### 💪 Tip extra
Usa `preventDefault()` para evitar que el formulario recargue la página.