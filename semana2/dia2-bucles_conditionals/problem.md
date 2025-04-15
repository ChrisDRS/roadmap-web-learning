# 🎓 Miniproyecto: Clasificador de Edades

## 🌍 Descripción
Este proyecto en JavaScript permite ingresar una edad por teclado y clasificarla según su rango etario. El usuario puede realizar varias clasificaciones hasta que decida salir.

## 🌐 Tecnologías usadas
- JavaScript
- Interacción con el usuario vía `prompt`, `alert`, `console.log`

## 📆 Instrucciones
1. Solicitar al usuario que ingrese una edad (por `prompt`).
2. Validar que sea un número mayor o igual a 0.
3. Usar estructuras condicionales para determinar:
   - 0 a 12: Niño
   - 13 a 17: Adolescente
   - 18 a 64: Adulto
   - 65 en adelante: Adulto mayor
4. Mostrar el resultado con `alert()` y `console.log()`.
5. Preguntar si desea ingresar otra edad usando `confirm()`.
6. Si acepta, repetir; si no, finalizar.

## 💡 Recomendaciones
- Usa `while` o `do...while` para repetir la acción.
- Usa `parseInt()` o `parseFloat()` para convertir strings a números.
- Considera separar la clasificación en una función.

## 📄 Archivos sugeridos
/edad-clasificador
├── index.html (vacío o con referencia a JS)
└── clasificador.js