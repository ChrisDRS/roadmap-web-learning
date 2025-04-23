// Ejemplos de Type Coercion (Conversión Implícita)

// Coerción de número a string (concatenación)
console.log('10' + 2); // '102'

// Coerción de string a número (resta)
console.log('10' - 2); // 8

// Coerción booleano a número
console.log(true + 1); // 2 (true se convierte en 1)

// Ejemplos de Type Conversion (Conversión Explícita)

// String a número
const numero = Number('123');
console.log(numero); // 123

// Número a string
const texto = String(456);
console.log(texto); // '456'

// Valor a booleano
const esVerdad = Boolean(0);
console.log(esVerdad); // false (0 es falsy)

// Comparativa directa Conversion vs Coercion

// Coerción implícita (concatenación)
console.log("50" + 10); // '5010'

// Conversión explícita para sumar
console.log(Number("50") + 10); // 60
